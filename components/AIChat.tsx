import React, { useState, useEffect } from 'react';
import { Send, Mail, X, User, MessageSquare } from 'lucide-react';
import { MARCO_DATA } from '../constants';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  initialInput?: string; // Used for pre-filling subject or message
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose, initialInput }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Effect to handle initial input (e.g., from project inquiry)
  useEffect(() => {
    if (isOpen && initialInput) {
      setSubject(`Inquiry: ${initialInput}`);
      setMessage(`Hi Marco,\n\nI'm interested in discussing your project "${initialInput}".\n\nBest regards,`);
    } else if (isOpen) {
      // Reset if opened without specific context
      setSubject('');
      setMessage('');
      setName('');
    }
  }, [isOpen, initialInput]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const emailTo = MARCO_DATA.contacts.email;
    const emailSubject = encodeURIComponent(subject || "New Message from Portfolio Site");
    const emailBody = encodeURIComponent(
      `Name: ${name}\n\nMessage:\n${message}`
    );

    // Trigger mailto
    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
    
    // Optional: Close modal after sending
    // onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-[90vw] md:w-[400px] bg-[#0a0a0a] rounded-[2rem] flex flex-col shadow-2xl border border-white/10 z-50 animate-in slide-in-from-bottom-10 fade-in duration-300 font-sans overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Mail className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Leave a Message</h3>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Direct to my Inbox</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Form */}
      <div className="p-6 bg-gradient-to-b from-transparent to-black/40">
        <form onSubmit={handleSend} className="space-y-5">
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Name</label>
            <div className="relative group">
               <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
               <input 
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="John Doe"
                 className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-700"
               />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Subject</label>
            <div className="relative group">
               <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
               <input 
                 type="text" 
                 value={subject}
                 onChange={(e) => setSubject(e.target.value)}
                 placeholder="Project Inquiry..."
                 className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-700"
               />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can I help you?"
              rows={5}
              className="w-full bg-[#151515] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-700 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={!message.trim()}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
          >
            <span>Send Email</span>
            <Send className="w-4 h-4" strokeWidth={2.5} />
          </button>

          <p className="text-center text-[10px] text-gray-600 font-medium">
            This will open your default email client.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AIChat;