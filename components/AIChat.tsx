import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateChatResponse } from '../services/geminiService';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  initialInput?: string;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose, initialInput }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Ciao! I'm Marco's Digital Twin. I can tell you about my logistics experience, my design skills, or my time in Italy.", timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Effect to handle initial input when chat opens
  useEffect(() => {
    if (isOpen && initialInput) {
      setInputValue(initialInput);
    }
  }, [isOpen, initialInput]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await generateChatResponse(messages, userMsg.text);

    const modelMsg: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-[90vw] md:w-[420px] h-[600px] bg-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl flex flex-col shadow-2xl border border-white/10 z-50 animate-in slide-in-from-bottom-10 fade-in duration-300 font-outfit">
      {/* Header */}
      <div className="p-5 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-emerald-900/20 to-transparent rounded-t-3xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold font-syne text-white">Marco AI</h3>
            <p className="text-[10px] text-emerald-400/70 uppercase tracking-widest">Digital Twin</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'model' && (
               <div className="w-8 h-8 rounded-full bg-emerald-900/50 border border-emerald-500/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                 <Bot size={14} className="text-emerald-400" />
               </div>
            )}
            <div className={`max-w-[80%] p-4 text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-white text-black rounded-2xl rounded-tr-sm font-medium' 
                : 'bg-[#1a1a1a] text-gray-300 rounded-2xl rounded-tl-sm border border-white/5'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-900/50 border border-emerald-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                 <Bot size={14} className="text-emerald-400" />
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
              <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 pt-2 bg-transparent">
        <div className="flex gap-2 bg-[#111] p-1.5 rounded-2xl border border-white/10 focus-within:border-emerald-500/30 transition-colors">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Supply Chain or Design..."
            className="flex-1 bg-transparent px-4 py-2 text-sm text-white focus:outline-none placeholder:text-gray-600"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            className="p-2.5 bg-white text-black rounded-xl hover:bg-emerald-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;