import { Send, XCircle } from "lucide-react";
import { useState, useRef } from "react";

const LANGUAGES = [
  { name: "English", flag: "🇮🇳" },
  { name: "हिन्दी", flag: "🇮🇳" },
  { name: "தமிழ்", flag: "🇮🇳" },
  { name: "తెలుగు", flag: "🇮🇳" },
  { name: "मराठी", flag: "🇮🇳" },
];

const ChatbotPage = () => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const handleSend = () => {
    if (!message.trim()) return;
    alert(`Message sent: ${message}`);
    setMessage("");
    inputRef.current.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-10 py-6 relative overflow-hidden font-poppins text-green-900">

      {/* === Background === */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-56 h-56 sm:w-72 sm:h-72 bg-green-200/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-[-5rem] w-64 h-64 sm:w-80 sm:h-80 bg-teal-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-5rem] left-1/3 w-80 h-80 sm:w-96 sm:h-96 bg-lime-200/25 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

        <svg
          className="absolute w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#gradient1)"
            d="M0,160 C320,60 720,280 1440,160 L1440,320 L0,320 Z"
          />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* === Heading === */}
      <div className="mb-6 text-center max-w-4xl animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-purple-700">
          AI Chat Support
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-green-700">
          Talk to our AI for instant guidance and coping strategies
        </p>
      </div>

      {/* === Chat Card === */}
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl h-[550px] sm:h-[600px] md:h-[660px] bg-white rounded-3xl shadow-2xl border border-green-200 flex flex-col p-4 sm:p-6 md:p-8 relative">
        <div className="flex flex-col h-full w-full">

          {/* Header row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
            <div className="font-semibold text-purple-700 flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
              <Send size={20} />
              CalmMind.ai
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
              <span className="text-green-700 text-xl" role="img" aria-label="language globe">🌐</span>
              <select
                className="border-2 border-green-300 text-green-800 rounded-lg px-3 sm:px-4 py-1 sm:py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-sm sm:text-base"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.name}>{lang.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-grow overflow-y-auto py-4 sm:py-6 max-h-[420px] sm:max-h-[500px] md:max-h-[520px] space-y-4 sm:space-y-6 scroll-smooth">
            <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-3xl px-5 sm:px-7 py-4 sm:py-5 text-green-900 font-semibold shadow-lg max-w-[80%] sm:max-w-[72%] animate-slide-in">
              Hi 👋, I'm CalmMind AI. How are you feeling today?
            </div>
          </div>

          {/* Input Row */}
          <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-8 flex-shrink-0 gap-2 sm:gap-4 relative">
            <input
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="flex-1 border border-green-300 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-green-900 bg-green-50 placeholder-green-400 shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-300 placeholder-opacity-75 transition text-sm sm:text-base"
              aria-label="Message input"
            />
            {message && (
              <button
                onClick={() => setMessage("")}
                className="absolute right-24 sm:right-28 top-1/2 -translate-y-1/2 text-green-500 hover:text-green-800 transition"
                aria-label="Clear input"
                title="Clear input"
              >
                <XCircle size={24} />
              </button>
            )}
            <button
              disabled={!message.trim()}
              onClick={handleSend}
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl px-5 sm:px-7 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 text-white shadow-lg transition-transform transform active:scale-95 focus:outline-none text-sm sm:text-base"
              aria-label="Send message"
            >
              <Send size={20} />
              <span className="font-semibold">Send</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-green-600 text-center select-none">
            Your conversations are completely anonymous and secure
          </div>
        </div>
      </div>

      {/* === Animations === */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-20px) translateX(15px) scale(1.1); }
          66% { transform: translateY(10px) translateX(-15px) scale(0.9); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        .animate-blob { animation: blob 12s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 1s ease forwards; }

        @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        .animate-slide-in { animation: slideIn 0.5s ease forwards; }
      `}</style>
    </div>
  );
};

export default ChatbotPage;
