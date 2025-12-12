import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

// Simple Markdown Formatter Component
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  const lines = text.split('\n');

  return (
    <div className="space-y-1 text-sm leading-relaxed">
      {lines.map((line, i) => {
        // Handle empty lines for spacing
        if (!line.trim()) return <div key={i} className="h-2" />;

        // Check for bullet points
        const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
        const content = isBullet ? line.trim().substring(2) : line;

        // Parse bold syntax: **text**
        const parts = content.split(/(\*\*.*?\*\*)/g);

        return (
          <div key={i} className={`flex ${isBullet ? 'pl-2' : ''}`}>
            {isBullet && <span className="mr-2 text-blue-500 font-bold flex-shrink-0">•</span>}
            <span className="break-words">
              {parts.map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={j} className="font-bold">{part.slice(2, -2)}</strong>;
                }
                return <span key={j}>{part}</span>;
              })}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', role: 'model', text: 'Hello! I am **Shakti AI**. How can I assist you with our industrial gas solutions today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const historyForApi = messages.map(m => ({ role: m.role, text: m.text }));

    try {
      // Create a placeholder for the AI response
      const aiMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: aiMsgId, role: 'model', text: '' }]);

      const stream = streamChatResponse(userMsg.text, historyForApi);

      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(m =>
          m.id === aiMsgId ? { ...m, text: fullText } : m
        ));
      }
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "Sorry, something went wrong. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[550px] transition-all duration-300 transform origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-shakti-blue to-blue-700 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Shakti Assistant</h3>
                <p className="text-xs text-blue-100 opacity-90">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-shakti-blue text-white rounded-tr-none'
                      : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.role === 'model' ? (
                    <FormattedText text={msg.text} />
                  ) : (
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start w-full">
                 <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3">
                    <Loader2 className="w-4 h-4 animate-spin text-shakti-blue" />
                    <span className="text-xs text-gray-500 font-medium">Shakti AI is typing...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about gases, delivery, prices..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-shakti-blue/50 focus:bg-white transition"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-shakti-blue hover:bg-blue-600 text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md hover:shadow-lg active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-shakti-blue hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium pr-1">Chat with Us</span>}
      </button>
    </div>
  );
};

export default ChatAssistant;