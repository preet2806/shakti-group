 import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  Loader2, 
  Sparkles, 
  RotateCcw, 
  Copy, 
  Check, 
  PhoneCall, 
  Truck, 
  ShieldCheck,
  FlaskConical,
  FileText, 
  ChevronRight,
  ExternalLink,
  Zap,
  Flame,
  Mail,
  Building2,
  User,
  Phone,
  MapPin,
  HelpCircle,
  Clock,
  ArrowRight,
  Package
} from 'lucide-react';
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

// Structured quick prompt categories
interface QuickTopic {
  id: string;
  label: string;
  icon: React.ElementType;
  prompt: string;
  badge?: string;
  action?: 'chat' | 'quote';
}

const QUICK_TOPICS: QuickTopic[] = [
  {
    id: 'quote',
    label: 'Get a Quote',
    icon: Zap,
    prompt: 'I want a quotation for industrial gas supply. Please help me provide the required details.',
    badge: 'Fast RFQ',
    action: 'quote'
  },
  {
    id: 'products',
    label: 'Gases & Applications',
    icon: FlaskConical,
    prompt: 'What industrial, medical, specialty, and cryogenic gases does Shakti supply, and what are their common applications?',
    action: 'chat'
  },
  {
    id: 'specifications',
    label: 'Gas Specifications',
    icon: ShieldCheck,
    prompt: 'I want to know about gas purity, grades, specifications, CAS numbers, and available supply formats.',
    action: 'chat'
  },
  {
    id: 'supply',
    label: 'Supply & Delivery',
    icon: Truck,
    prompt: 'What bulk, liquid, compressed gas, cylinder, and tanker supply options does Shakti offer, and where can you deliver?',
    action: 'chat'
  },
  {
    id: 'storage',
    label: 'Cryogenic Storage Solutions',
    icon: FileText,
    prompt: 'I need a cryogenic storage and gas supply solution. What storage, vaporization, and related engineering options does Shakti offer?',
    action: 'chat'
  }
];

const SUGGESTED_CHIPS = [
  '⚡ Get a Formal Price Quote',
  '🚚 Can you deliver to my location?',
  '🔬 Which gas purity do I need?',
  '🏭 Tell me about Shakti’s manufacturing capacity',
  '📑 Cryogenic storage & engineering solutions'
];

const GAS_OPTIONS = [
  'Nitrogen (N₂) - Liquid / Compressed',
  'Oxygen (O₂) - Liquid / Compressed',
  'Argon (Ar) - Liquid / Compressed',
  'Carbon Dioxide (CO₂) - Liquid / Compressed',
  'Dissolved Acetylene (DA)',
  'Compressed Hydrogen (H2)',
  'Compressed Helium (He)',
  'Specialty & Calibration Gas Mixtures',
  'Turnkey Cryogenic Storage Solutions',
  'Pipeline Solutions',
  'Other'
];

// Rich Markdown / Industrial Spec Formatter Component
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  const lines = text.split('\n');

  return (
    <div className="space-y-1.5 text-[13.5px] leading-relaxed">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-1.5" />;

        // Check for bullet points
        const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ') || /^\d+\.\s/.test(line.trim());
        let content = line.trim();
        if (content.startsWith('- ') || content.startsWith('* ')) {
          content = content.substring(2);
        } else if (/^\d+\.\s/.test(content)) {
          content = content.replace(/^\d+\.\s/, '');
        }

        // Parse bold syntax: **text**
        const parts = content.split(/(\*\*.*?\*\*)/g);

        return (
          <div key={i} className={`flex items-start ${isBullet ? 'pl-1.5' : ''}`}>
            {isBullet && (
              <span className="mr-2 text-blue-600 font-bold text-base leading-tight select-none">•</span>
            )}
            <span className="break-words text-slate-800 flex-1">
              {parts.map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return (
                    <strong key={j} className="font-semibold text-slate-950">
                      {part.slice(2, -2)}
                    </strong>
                  );
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
  const [showTeaser, setShowTeaser] = useState(false);
  const [hasDismissedTeaser, setHasDismissedTeaser] = useState(false);
  const [teaserTimeLeft, setTeaserTimeLeft] = useState(5000);
  const [isTeaserHovered, setIsTeaserHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'quote' | 'escalate'>('chat');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Quote Form State with Required Fields
  const [quoteForm, setQuoteForm] = useState({
    contactName: '',
    companyName: '',
    contactNumber: '',
    email: '',
    gasType: GAS_OPTIONS[0],
    customGas: '',
    quantity: '',
    location: '',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [quoteGenerated, setQuoteGenerated] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hi! I am Shakti AI, your 24/7 industrial gas assistant.\n\n- **Technical & Product Questions**: Ask me about gas specifications, purity grades, applications, CAS numbers, and technical information.\n- **Manufacturing & Supply Capabilities**: Learn about our products, production capacity, plants, logistics, and supply options.\n- **Pricing & Supply Enquiries**: Share your requirement and I can help gather the relevant details for a quotation from our commercial team.'    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-display subtle teaser bubble after 3.5s if not opened and not dismissed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasDismissedTeaser) {
        setShowTeaser(true);
        setTeaserTimeLeft(5000);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [isOpen, hasDismissedTeaser]);

  // 5-second auto-cancel timelapse countdown for teaser bubble
  useEffect(() => {
    if (!showTeaser || isOpen || isTeaserHovered) return;

    const interval = setInterval(() => {
      setTeaserTimeLeft((prev) => {
        if (prev <= 50) {
          clearInterval(interval);
          setShowTeaser(false);
          setHasDismissedTeaser(true);
          return 0;
        }
        return prev - 50;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [showTeaser, isOpen, isTeaserHovered]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen, activeTab]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      setShowTeaser(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, activeTab]);

  // Validate Required Fields for Quote / Timeline Generation
  const validateQuoteForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!quoteForm.contactName.trim()) {
      errors.contactName = 'Contact name is required';
    }
    if (!quoteForm.companyName.trim()) {
      errors.companyName = 'Company name is required';
    }
    if (!quoteForm.contactNumber.trim() && !quoteForm.email.trim()) {
      errors.contactNumber = 'Phone number or Email is required';
      errors.email = 'Phone number or Email is required';
    } else {
      if (quoteForm.contactNumber.trim() && quoteForm.contactNumber.trim().length < 8) {
        errors.contactNumber = 'Please enter a valid contact number';
      }
      if (quoteForm.email.trim() && !quoteForm.email.includes('@')) {
        errors.email = 'Please enter a valid email address';
      }
    }
    if (!quoteForm.location.trim()) {
      errors.location = 'Delivery location / plant city is required';
    }
    if (quoteForm.gasType.startsWith('Other') && !quoteForm.customGas.trim()) {
      errors.customGas = 'Please specify the gas or solution required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Build Structured RFQ Text for WhatsApp & Email
  const buildStructuredRfqText = () => {
    const gasDisplay = quoteForm.gasType.startsWith('Other')
      ? (quoteForm.customGas.trim() ? `Other: ${quoteForm.customGas.trim()}` : 'Custom / Unspecified')
      : quoteForm.gasType;

    const lines: (string | null)[] = [
      `*SHAKTI GROUP - INDUSTRIAL GAS RFQ*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Contact Person:* ${quoteForm.contactName.trim()}`,
      `🏢 *Company Name:* ${quoteForm.companyName.trim()}`,
      quoteForm.contactNumber.trim() ? `📞 *Phone / WhatsApp:* ${quoteForm.contactNumber.trim()}` : null,
      quoteForm.email.trim() ? `✉️ *Email Address:* ${quoteForm.email.trim()}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `🧪 *Product / Solution:* ${gasDisplay}`,
      `📦 *Required Quantity:* ${quoteForm.quantity.trim() || 'As per requirement / To be discussed'}`,
      `📍 *Plant / Delivery Location:* ${quoteForm.location.trim()}`,
      quoteForm.notes.trim() ? `📝 *Specific Requirements:* ${quoteForm.notes.trim()}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Inquiry sent via Shakti Group Digital Portal (shaktigases.com)_`
    ];

    return lines.filter((line): line is string => line !== null).join('\n');
  };

  const handleSendWhatsAppQuote = () => {
    if (!validateQuoteForm()) return;
    const rfqText = buildStructuredRfqText();
    const encoded = encodeURIComponent(rfqText);
    window.open(`https://wa.me/919727783440?text=${encoded}`, '_blank');
    setQuoteGenerated(true);
  };

  const handleSendEmailQuote = () => {
    if (!validateQuoteForm()) return;
    const rfqText = buildStructuredRfqText();
    const gasDisplay = quoteForm.gasType.startsWith('Other') && quoteForm.customGas.trim()
      ? quoteForm.customGas.trim()
      : quoteForm.gasType;
    const subject = encodeURIComponent(`RFQ: ${gasDisplay} - ${quoteForm.companyName.trim()}`);
    const body = encodeURIComponent(rfqText.replace(/\*/g, ''));
    window.open(`mailto:info@shaktigases.com?subject=${subject}&body=${body}`, '_blank');
    setQuoteGenerated(true);
  };

  // Helper to extract gas product from user query
  const detectGasFromQuery = (text: string): string | null => {
    const lower = text.toLowerCase();
    if (lower.includes('nitrogen') || lower.includes('lin') || lower.includes('n2')) {
      return 'Nitrogen (N₂) - Liquid / Compressed';
    }
    if (lower.includes('medical oxygen') || lower.includes('lmo')) {
      return 'Oxygen (O₂) - Liquid / Compressed';
    }
    if (lower.includes('oxygen') || lower.includes('lox') || lower.includes('o2')) {
      return 'Oxygen (O₂) - Liquid / Compressed';
    }
    if (lower.includes('argon') || lower.includes('lar') || lower.includes('ar')) {
      return 'Argon (Ar) - Liquid / Compressed';
    }
    if (lower.includes('co2') || lower.includes('carbon dioxide') || lower.includes('lco2')) {
      return 'Carbon Dioxide (CO₂) - Liquid / Compressed';
    }
    if (lower.includes('acetylene') || lower.includes('da')) {
      return 'Dissolved Acetylene (DA)';
    }
    if (lower.includes('hydrogen') || lower.includes('h2')) {
      return 'Compressed Hydrogen (H2)';
    }
    if (lower.includes('helium')) {
      return 'Compressed Helium (He)';
    }
    if (lower.includes('specialty') || lower.includes('calibration') || lower.includes('zero air') || lower.includes('standard') || lower.includes('mixtures')) {
      return 'Specialty & Calibration Gas Mixtures';
    }
    if (lower.includes('tank') || lower.includes('storage') || lower.includes('leasing') || lower.includes('rental')) {
      return 'Turnkey Cryogenic Storage Solutions';
    }
    if (lower.includes('piping') || lower.includes('pipeline')) {
      return 'Pipeline Solutions';
    }
    return null;
  };

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    // Check if the user is asking about price / quotation / rate / cost / RFQ / how much / delivery timeline
    const isPriceOrQuoteRequest = /\b(price|prices|pricing|quote|quotes|quotation|quotations|rate|rates|cost|costs|costing|rfq|rfqs|how much|charges|charge|tariff|commercials|price list)\b/i.test(trimmed);

    // Check if the user is responding affirmatively to a redirect prompt or asking to redirect
    const isAffirmative = /^(yes|yeah|yep|sure|ok|okay|please|yes please|yup|definitely|absolutely|go ahead|do it|take me there|open it|let's do it|sure please)\b/i.test(trimmed);
    const isDirectRedirectRequest = /\b(redirect|redirect me|open rfq|open quote|go to rfq|go to quote|take me to rfq|take me to quote|rfq form|quote form)\b/i.test(trimmed);
    const isDirectWhatsAppRequest = /^(whatsapp|open whatsapp|chat on whatsapp|connect on whatsapp|message on whatsapp|whatsapp desk|take me to whatsapp|whatsapp link)$/i.test(trimmed);

    if (isDirectWhatsAppRequest) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'user',
          text: trimmed
        },
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: 'Opening our **WhatsApp Sales & Logistics Desk (+91 9727783440)** with your inquiry framed and ready to send.'
        }
      ]);
      setInput('');
      openWhatsAppWithContext();
      return;
    }

    // Look at the last message from the assistant to see if it offered a redirect
    const lastMsg = messages[messages.length - 1];
    const lastMsgOfferedRedirect = lastMsg && lastMsg.role === 'model' && (
      /redirect|rfq|quotation|quote|price|pricing|availability|storage|engineering/i.test(lastMsg.text)
    );

    if (isDirectRedirectRequest || (isAffirmative && lastMsgOfferedRedirect)) {
      // Find any gas mentioned across the entire conversation history or current prompt
      const fullConversationContext = messages.map(m => m.text).join(' ') + ' ' + trimmed;
      const detectedGas = detectGasFromQuery(fullConversationContext);

      setQuoteForm(prev => ({
        ...prev,
        gasType: detectedGas || prev.gasType,
        notes: prev.notes ? prev.notes : (trimmed.length > 10 ? trimmed : '')
      }));

      // Record in conversation history for smooth continuity
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'user',
          text: trimmed
        },
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: 'Redirecting you to our **Price & Timeline (Instant RFQ)** section now. Please verify your details below to generate a framed quotation directly dispatched to our sales team.'
        }
      ]);

      setInput('');
      setActiveTab('quote');
      setIsOpen(true);
      return;
    }

    if (isPriceOrQuoteRequest) {
      const detectedGas = detectGasFromQuery(trimmed);
      if (detectedGas) {
        setQuoteForm(prev => ({
          ...prev,
          gasType: detectedGas,
          notes: prev.notes ? prev.notes : trimmed
        }));
      } else {
        setQuoteForm(prev => ({
          ...prev,
          notes: prev.notes ? prev.notes : trimmed
        }));
      }

      // Record in conversation history for continuity
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'user',
          text: trimmed
        },
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: 'Industrial gas pricing and transit logistics depend on off-take volume (Bulk Road Tankers / Dura Cylinders / Bundles), required purity grade, and plant delivery location.\n\nI have switched to the **Price & Timeline (Instant RFQ)** section so you can generate an exact framed quotation directly dispatched to our WhatsApp or Email sales desk.'
        }
      ]);

      setInput('');
      setActiveTab('quote');
      setIsOpen(true);
      return;
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: trimmed
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const historyForApi = messages.map(m => ({ role: m.role, text: m.text }));

    try {
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
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: "I apologize, but I encountered an error communicating with our knowledge server. Please connect directly with our technical sales team at **+91-9727783440** or **info@shaktigases.com**.",
          isError: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const handleResetConversation = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        text: 'Conversation reset. What gas solution, technical specification, or pricing inquiry can I help you with?'
      }
    ]);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openWhatsAppWithContext = (msgId?: string) => {
    let userQuery = '';
    if (msgId) {
      const idx = messages.findIndex(m => m.id === msgId);
      if (idx > 0 && messages[idx - 1].role === 'user') {
        userQuery = messages[idx - 1].text.trim();
      }
    }
    if (!userQuery) {
      const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
      if (lastUserMsg) {
        userQuery = lastUserMsg.text.trim();
      }
    }

    const fullHistory = messages.map(m => m.text).join(' ') + ' ' + (quoteForm.notes || '');
    const detectedGas = detectGasFromQuery(fullHistory || userQuery) || (quoteForm.gasType && !quoteForm.gasType.startsWith('Other') ? quoteForm.gasType : null);

    const lines: (string | null)[] = [
      `*SHAKTI GROUP - DIRECT SALES & LOGISTICS DESK*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Hello Shakti Group, I am reaching out via your AI Gas Assistant on shaktigases.com:`,
      ``,
      detectedGas ? `🧪 *Product / Solution:* ${detectedGas}` : `🧪 *Topic:* Industrial Gas Supply & Specifications`,
      userQuery ? `💬 *Requirement / Query:* ${userQuery}` : null,
      quoteForm.contactName.trim() ? `👤 *Contact Person:* ${quoteForm.contactName.trim()}` : null,
      quoteForm.companyName.trim() ? `🏢 *Company:* ${quoteForm.companyName.trim()}` : null,
      quoteForm.location.trim() ? `📍 *Plant / Delivery Location:* ${quoteForm.location.trim()}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Please provide commercial pricing, delivery timeline, and technical specifications.`,
      ``,
      `_Inquiry sent via Shakti Group Digital Portal (shaktigases.com)_`
    ];

    const messageText = lines.filter((l): l is string => l !== null).join('\n');
    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/919727783440?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">

      {/* Proactive Floating Teaser Bubble (Auto-cancels after 5s with visible timelapse) */}
      {!isOpen && showTeaser && (
        <div
          id="chat-teaser-bubble"
          onMouseEnter={() => setIsTeaserHovered(true)}
          onMouseLeave={() => setIsTeaserHovered(false)}
          className="mb-3 w-[300px] sm:w-[330px] bg-white rounded-2xl shadow-2xl border border-blue-200/80 p-4 animate-in fade-in slide-in-from-bottom-3 duration-300 relative text-left overflow-hidden group"
        >
          <button
            onClick={() => {
              setShowTeaser(false);
              setHasDismissedTeaser(true);
            }}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition z-10"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold tracking-wide uppercase text-blue-900">
                  Shakti Gas Consultant
                </span>
                {isTeaserHovered ? (
                  <span className="text-[9.5px] text-slate-400 font-medium ml-auto pr-4">Paused</span>
                ) : (
                  <span className="text-[9.5px] text-slate-400 font-mono ml-auto pr-4">
                    {Math.ceil(teaserTimeLeft / 1000)}s
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-slate-800 leading-snug">
                👋 Need an instant gas quotation, purity specs, or delivery estimate?
              </p>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setShowTeaser(false);
                setIsOpen(true);
                setActiveTab('quote');
              }}
              className="text-[11.5px] font-medium text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition text-left truncate flex-1 flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Get Price & Timeline</span>
            </button>
            <button
              onClick={() => {
                setShowTeaser(false);
                setIsOpen(true);
                setActiveTab('chat');
              }}
              className="text-[11.5px] font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition shadow-sm shrink-0"
            >
              Ask AI
            </button>
          </div>

          {/* Visible Timelapse Progress Bar (5-second countdown) */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden">
            <div
              className={`h-full ${isTeaserHovered ? 'bg-amber-400' : 'bg-gradient-to-r from-blue-600 to-emerald-500'} transition-all ease-linear`}
              style={{
                width: `${(teaserTimeLeft / 5000) * 100}%`,
                transitionDuration: '50ms'
              }}
            />
          </div>
        </div>
      )}

      {/* Main Chat / Quote Window */}
      {isOpen && (
        <div
          id="shakti-chat-modal"
          className="mb-3 w-[360px] sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[600px] max-h-[85vh] transition-all duration-300 transform origin-bottom-right"
        >
          {/* Top App Header */}
          <div className="bg-slate-900 text-white p-3.5 flex justify-between items-center border-b border-slate-800 shadow-sm select-none">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold text-sm leading-none text-white">Shakti AI</h3>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 font-medium px-1.5 py-0.5 rounded border border-blue-400/30">
                    24/7 Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Tech Specs, Capacity & Fast Quotations</p>
              </div>
            </div>

            {/* Action Tools */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetConversation}
                title="Restart conversation"
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close window"
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub-Navigation Switcher */}
          <div className="bg-slate-100/95 border-b border-slate-200 px-3 py-1.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 bg-slate-200/90 p-0.5 rounded-lg">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-2.5 py-1 rounded-md font-medium transition ${
                  activeTab === 'chat'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                AI Assistant
              </button>
              <button
                onClick={() => setActiveTab('quote')}
                className={`px-2.5 py-1 rounded-md font-medium transition flex items-center gap-1 ${
                  activeTab === 'quote'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Zap className="w-3 h-3 text-amber-500" />
                <span>Price & Timeline</span>
              </button>
              <button
                onClick={() => setActiveTab('escalate')}
                className={`px-2.5 py-1 rounded-md font-medium transition flex items-center gap-1 ${
                  activeTab === 'escalate'
                    ? 'bg-white text-emerald-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <PhoneCall className="w-3 h-3 text-emerald-600" />
                <span>Contact</span>
              </button>
            </div>

            <span className="text-[10.5px] text-slate-500 font-medium">
              Shakti
            </span>
          </div>

          {/* Tab 1: Interactive Quote & Delivery Timeline Estimator */}
          {activeTab === 'quote' ? (
            <div className="flex-1 p-4 bg-slate-50 overflow-y-auto space-y-3.5">
              <div className="bg-white border border-blue-100 rounded-xl p-3 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">
                    Instant Price & Delivery Estimate
                  </h4>
                </div>
                <p className="text-[11.5px] text-slate-600 leading-relaxed">
                  Enter your details to generate a framed <strong>WhatsApp direct link</strong> or <strong>Official RFQ Email</strong> directly dispatched to our sales desk.
                </p>
              </div>

              <div className="space-y-2.5 bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs text-xs">
                {/* Contact Name (Required) */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={quoteForm.contactName}
                      onChange={(e) => {
                        setQuoteForm({ ...quoteForm, contactName: e.target.value });
                        if (formErrors.contactName) setFormErrors({ ...formErrors, contactName: '' });
                      }}
                      className={`w-full pl-8 pr-3 py-2 bg-slate-50 border rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 ${
                        formErrors.contactName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:ring-blue-500'
                      }`}
                    />
                  </div>
                  {formErrors.contactName && (
                    <p className="text-[10px] text-rose-600 mt-0.5">{formErrors.contactName}</p>
                  )}
                </div>

                {/* Company Name (Required) */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Plant Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. Apex Steel & Pharma Ltd"
                      value={quoteForm.companyName}
                      onChange={(e) => {
                        setQuoteForm({ ...quoteForm, companyName: e.target.value });
                        if (formErrors.companyName) setFormErrors({ ...formErrors, companyName: '' });
                      }}
                      className={`w-full pl-8 pr-3 py-2 bg-slate-50 border rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 ${
                        formErrors.companyName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:ring-blue-500'
                      }`}
                    />
                  </div>
                  {formErrors.companyName && (
                    <p className="text-[10px] text-rose-600 mt-0.5">{formErrors.companyName}</p>
                  )}
                </div>

                {/* Contact Number & Email Grid (Both / Either Required) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp <span className="text-rose-600">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={quoteForm.contactNumber}
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, contactNumber: e.target.value });
                          if (formErrors.contactNumber) setFormErrors({ ...formErrors, contactNumber: '' });
                        }}
                        className={`w-full pl-8 pr-3 py-2 bg-slate-50 border rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 ${
                          formErrors.contactNumber ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:ring-blue-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="email"
                        placeholder="procurement@company.com"
                        value={quoteForm.email}
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        className={`w-full pl-8 pr-3 py-2 bg-slate-50 border rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 ${
                          formErrors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:ring-blue-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>
                {(formErrors.contactNumber || formErrors.email) && (
                  <p className="text-[10px] text-rose-600">Please provide a valid contact number and/or email address.</p>
                )}

                {/* Gas Product Selection */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Required Gas & Grade
                  </label>
                  <select
                    value={quoteForm.gasType}
                    onChange={(e) => {
                      setQuoteForm({ ...quoteForm, gasType: e.target.value });
                      if (formErrors.customGas) setFormErrors({ ...formErrors, customGas: '' });
                    }}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    {GAS_OPTIONS.map((gas, idx) => (
                      <option key={idx} value={gas}>{gas}</option>
                    ))}
                  </select>

                  {/* Custom Gas Name Input when "Other" is chosen */}
                  {quoteForm.gasType.startsWith('Other') && (
                    <div className="mt-2 animate-in fade-in duration-200">
                      <input
                        type="text"
                        placeholder="Please specify gas / mixture name (e.g. Methane 99.9%, SF6, Krypton, etc.)"
                        value={quoteForm.customGas}
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, customGas: e.target.value });
                          if (formErrors.customGas) setFormErrors({ ...formErrors, customGas: '' });
                        }}
                        className={`w-full px-3 py-2 bg-slate-50 border rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 ${
                          formErrors.customGas ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:ring-blue-500'
                        }`}
                        autoFocus
                      />
                      {formErrors.customGas && (
                        <p className="text-[10px] text-rose-600 mt-0.5">{formErrors.customGas}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Quantity (No dropdown) */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Quantity
                  </label>
                  <div className="relative">
                    <Package className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. 15 KL Tanker / 20 Dura Cylinders / 500 Nm³"
                      value={quoteForm.quantity}
                      onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Delivery Location (Required) */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Delivery Plant Location / GIDC <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. Dahej GIDC, Bharuch / Sanand, Ahmedabad"
                      value={quoteForm.location}
                      onChange={(e) => {
                        setQuoteForm({ ...quoteForm, location: e.target.value });
                        if (formErrors.location) setFormErrors({ ...formErrors, location: '' });
                      }}
                      className={`w-full pl-8 pr-3 py-2 bg-slate-50 border rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 ${
                        formErrors.location ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:ring-blue-500'
                      }`}
                    />
                  </div>
                  {formErrors.location && (
                    <p className="text-[10px] text-rose-600 mt-0.5">{formErrors.location}</p>
                  )}
                </div>

                {/* Notes / Special volume */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Estimated Monthly Volume / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 20 Tonnes/month, urgent dispatch required"
                    value={quoteForm.notes}
                    onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Email Frame */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleSendWhatsAppQuote}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition shadow-sm group"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Quotation Request on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={handleSendEmailQuote}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-blue-400 text-slate-800 font-medium text-xs transition shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Send Official RFQ via Email (info@shaktigases.com)</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  onClick={() => setActiveTab('chat')}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  ← Return to AI Chat
                </button>
              </div>
            </div>
          ) : activeTab === 'escalate' ? (
            /* Tab 3: Direct Contact Desk Screen */
            <div className="flex-1 p-4 bg-slate-50 overflow-y-auto space-y-4">
              <div className="text-center py-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2.5 shadow-xs">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-slate-900 text-base">Direct Engineering Hotline</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto mt-1">
                  Connect instantly with our industrial gas dispatchers and senior commercial managers.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => openWhatsAppWithContext()}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition shadow-sm group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-white fill-current" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-xs text-emerald-100">WhatsApp Instant Quote</div>
                      <div className="text-sm">+91 9727783440</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href="tel:+919727783440"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-800 font-medium text-sm transition shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] text-slate-500">Direct Desk / Logistics Dispatch</div>
                      <div className="text-sm font-semibold text-slate-900">+91 9727783440</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-slate-400" />
                </a>

                <a
                  href="mailto:info@shaktigases.com?subject=Industrial%20Gas%20Inquiry%20from%20Website"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-800 font-medium text-sm transition shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] text-slate-500">Official RFQ & Tender Inquiries</div>
                      <div className="text-xs font-semibold text-slate-900">info@shaktigases.com</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-slate-400" />
                </a>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-[11.5px] text-blue-900 leading-relaxed">
                📍 <strong>Vadodara HQ & Refilling Station</strong>: 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350. Dispatches run 24/7 across Gujarat, MP & Maharashtra.
              </div>

              <button
                onClick={() => setActiveTab('chat')}
                className="w-full py-2 text-xs font-medium text-blue-600 hover:text-blue-800 text-center flex items-center justify-center gap-1"
              >
                <span>Back to AI Gas Assistant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Tab 2: Standard AI Chat Screen */
            <div className="flex-1 overflow-y-auto p-3.5 bg-slate-50/80 space-y-4">

              {/* Quick Topic Chips (Shown on Fresh Chat) */}
              {messages.length <= 1 && (
                <div className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wide uppercase text-slate-600 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      Popular Inquiries
                    </span>
                    <span className="text-[10px] text-slate-400">1-click to ask</span>
                  </div>

                  <div className="grid grid-cols-1 gap-1.5">
                    {QUICK_TOPICS.map((topic) => {
                      const Icon = topic.icon;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            if (topic.action === 'quote') {
                              setActiveTab('quote');
                            } else {
                              handleSendMessage(topic.prompt);
                            }
                          }}
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50/80 border border-slate-200/70 hover:border-blue-300 text-left transition group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="p-1 rounded-md bg-white border border-slate-200 text-blue-600 group-hover:text-blue-700 shadow-2xs shrink-0">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-medium text-slate-800 group-hover:text-blue-900 truncate">
                              {topic.label}
                            </span>
                          </div>
                          {topic.badge && (
                            <span className="text-[9.5px] font-semibold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded shrink-0">
                              {topic.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Chat Message List */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col w-full ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm shadow-xs ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white border border-slate-200 text-slate-900 rounded-tl-none'
                    }`}
                  >
                    {msg.role === 'model' ? (
                      <FormattedText text={msg.text} />
                    ) : (
                      <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
                    )}
                  </div>

                  {/* If Model Message mentions redirect, quotation, availability, or pricing, provide quick 1-click redirect */}
                  {msg.role === 'model' && msg.text && (
                    <div className="mt-1.5 w-[88%]">
                      {/redirect|quotation|quote|price|pricing|delivery timeline|contact name|company name|whatsapp|instant rfq/i.test(msg.text) && msg.id !== 'welcome' && (
                        <button
                          onClick={() => {
                            const fullContext = messages.map(m => m.text).join(' ') + ' ' + msg.text;
                            const detectedGas = detectGasFromQuery(fullContext);
                            if (detectedGas) {
                              setQuoteForm(prev => ({ ...prev, gasType: detectedGas }));
                            }
                            setActiveTab('quote');
                          }}
                          className="w-full flex items-center justify-between p-2.5 rounded-xl bg-blue-50/90 hover:bg-blue-100/80 border border-blue-200 hover:border-blue-400 text-blue-900 transition text-[11.5px] font-medium mb-1 shadow-2xs group"
                        >
                          <span className="flex items-center gap-1.5 font-semibold text-blue-950">
                            <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span>
                              {/redirect/i.test(msg.text)
                                ? '⚡ Yes, Redirect to Instant RFQ Form'
                                : '⚡ Click to Generate WhatsApp / Email RFQ'}
                            </span>
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-blue-700" />
                        </button>
                      )}

                      {/* AI Message Footer / Quick Action Bar */}
                      <div className="flex items-center gap-2 px-1 text-[11px] text-slate-400">
                        <button
                          onClick={() => handleCopyText(msg.id, msg.text)}
                          className="hover:text-slate-700 flex items-center gap-1 transition py-0.5 px-1 rounded hover:bg-slate-200/50"
                          title="Copy answer"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>

                        <span>•</span>

                        <button
                          onClick={() => openWhatsAppWithContext(msg.id)}
                          className="hover:text-emerald-700 flex items-center gap-1 text-slate-500 font-medium transition"
                          title="Open formatted WhatsApp inquiry with current context"
                        >
                          <MessageCircle className="w-3 h-3 text-emerald-600 fill-current" />
                          <span>WhatsApp Desk</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start w-full">
                  <div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-none shadow-xs flex items-center gap-2.5">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span className="text-xs text-slate-600 font-medium">Checking technical database...</span>
                  </div>
                </div>
              )}

              {/* Follow-up Quick Chips */}
              {messages.length > 1 && !isLoading && (
                <div className="pt-2 space-y-1.5">
                  <div className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider px-1">
                    Suggested Inquiries
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_CHIPS.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (chip.includes('Quote') || chip.includes('Delivery Timeline')) {
                            setActiveTab('quote');
                          } else {
                            handleSendMessage(chip);
                          }
                        }}
                        className="text-[11.5px] bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-900 px-2.5 py-1 rounded-lg transition shadow-2xs text-left"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Chat Input Bar */}
          {activeTab === 'chat' && (
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask technical specs or request a quote..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:bg-white transition"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm hover:shadow-md active:scale-95 shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      )}

      {/* Floating Launcher Button */}
      <div className="relative flex items-center">
        {!isOpen && (
          <span className="hidden sm:flex items-center gap-1.5 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg mr-2 border border-slate-700 animate-bounce duration-1000">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Chat with Gas Specialist</span>
          </span>
        )}

        <button
          id="chat-floating-launcher"
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setShowTeaser(false);
          }}
          aria-label="Toggle Shakti Gas Assistant"
          className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group active:scale-95"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;

