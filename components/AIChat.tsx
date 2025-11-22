
import React, { useState, useEffect } from 'react';
import { Send, Mail, X, User, MessageSquare, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { MARCO_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  initialInput?: string;
  lang: Language;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose, initialInput, lang }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = UI_TEXT.contact;

  useEffect(() => {
    if (isOpen && initialInput) {
      setSubject(`Inquiry: ${initialInput}`);
      // Keeping initial message in English as it's standard, or could translate if needed
      setMessage(`Hi Marco,\n\nI'm interested in discussing your project "${initialInput}".`);
    } else if (isOpen) {
      if (isSuccess) {
        setSubject('');
        setMessage('');
        setName('');
        setIsSuccess(false);
        setError(null);
      }
    }
  }, [isOpen, initialInput, isSuccess]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setError(null);

    const formspreeId = MARCO_DATA.contacts.formspreeId;

    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name || "Anonymous",
            subject: subject || "Portfolio Message",
            message: message,
            _replyto: "no-reply@portfolio.com"
          })
        });

        if (response.ok) {
          setIsSuccess(true);
          setName('');
          setSubject('');
          setMessage('');
        } else {
          throw new Error("Failed to send message");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong. Please try again.");
      }
    } else {
      const emailTo = MARCO_DATA.contacts.email;
      const emailSubject = encodeURIComponent(subject || "New Message from Portfolio Site");
      const emailBody = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
      setIsSuccess(true);
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-[90vw] md:w-[400px] bg-[#0a0a0a] rounded-[2rem] flex flex-col shadow-2xl border border-white/10 z-50 animate-in slide-in-from-bottom-10 fade-in duration-300 font-sans overflow-hidden ring-1 ring-emerald-500/20">
      
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Mail className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">{t.title[lang]}</h3>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{t.subtitle[lang]}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-gradient-to-b from-transparent to-black/40 relative min-h-[400px] flex flex-col">
        {isSuccess ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-10 h-10 text-black" strokeWidth={3} />
            </div>
            <h4 className="text-2xl font-black italic text-white mb-2">{t.successTitle[lang]}</h4>
            <p className="text-gray-400 text-sm mb-8">{t.successMsg[lang]}</p>
            <button 
              onClick={() => { setIsSuccess(false); onClose(); }}
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all"
            >
              {t.btnClose[lang]}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="p-6 space-y-5 flex-grow flex flex-col">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{t.labelName[lang]}</label>
              <div className="relative group">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
                 <input 
                   type="text" 
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Name..."
                   className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-700"
                 />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{t.labelSubject[lang]}</label>
              <div className="relative group">
                 <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
                 <input 
                   type="text" 
                   value={subject}
                   onChange={(e) => setSubject(e.target.value)}
                   placeholder="..."
                   className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-700"
                 />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{t.labelMessage[lang]}</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="..."
                rows={5}
                className="w-full bg-[#151515] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-700 resize-none"
              ></textarea>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs text-red-300">{error}</p>
              </div>
            )}

            <button 
              type="submit"
              disabled={!message.trim() || isSubmitting}
              className="mt-auto w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.btnSending[lang]}</span>
                </>
              ) : (
                <>
                  <span>{t.btnSend[lang]}</span>
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AIChat;
