import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { ChatMessage } from "../types";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    // process.env.API_KEY is guaranteed by the environment instructions
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  }
  return aiClient;
};

export const generateChatResponse = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const client = getAiClient();
    
    // Format history for the model
    // We are using a single-turn approach here for simplicity with context injection,
    // but treating it as a chat flow visually.
    // For the best results with "persona", we send the system instruction + history.
    
    const prompt = `
      History of conversation:
      ${history.map(h => `${h.role.toUpperCase()}: ${h.text}`).join('\n')}
      
      USER: ${newMessage}
      MODEL (You are Marco Su):
    `;

    const response: GenerateContentResponse = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm having trouble connecting to my thought process right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently offline (API Error). Please contact me directly via email.";
  }
};
