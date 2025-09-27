import React, { useState } from "react";

export default function CounselorBooking() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSessionType, setSelectedSessionType] = useState("");

  const counselors = [
    { name: "Dr. Sarah Johnson", tag: "Top Rated", avatar: "https://i.pravatar.cc/80?img=1" },
    { name: "Dr. Michael Chen", tag: "Verified", avatar: "https://i.pravatar.cc/80?img=5" },
    { name: "Dr. Emily Rodriguez", tag: "Student Specialist", avatar: "https://i.pravatar.cc/80?img=3" },
    { name: "Dr. John Doe", tag: "Experienced", avatar: "https://i.pravatar.cc/80?img=4" },
  ];

  const sessionTypes = [
    { type: "Video Call", duration: "50 min" },
    { type: "Phone Call", duration: "50 min" },
    { type: "Live Chat", duration: "45 min" },
  ];

  function handleBook() {
    if (!selectedCounselor || !selectedDate || !selectedTime || !selectedSessionType) {
      alert("Please select counselor, date, time, and session type");
      return;
    }
    alert(`Booked ${selectedCounselor.name} on ${selectedDate} at ${selectedTime} (${selectedSessionType})`);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 overflow-hidden bg-gradient-to-tr from-green-50 via-green-100 to-green-200">
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-300/30 blur-2xl animate-[float_10s_ease-in-out_infinite]"
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating triangles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-emerald-200/40 animate-[float_12s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}

        {/* Connecting lines (SVG) */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="5%" y1="20%" x2="80%" y2="30%" stroke="#10B98144" strokeWidth="2" />
          <line x1="40%" y1="10%" x2="90%" y2="60%" stroke="#34D39933" strokeWidth="2" />
          <line x1="25%" y1="60%" x2="70%" y2="85%" stroke="#06B6D422" strokeWidth="1.5" />
          <line x1="0%" y1="50%" x2="100%" y2="45%" stroke="#34D39922" strokeWidth="1" />
        </svg>

        {/* Curved flowing waves */}
        <svg
          className="absolute w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#waveGradient)"
            d="M0,200 C360,100 1080,300 1440,150 L1440,320 L0,320 Z"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero + Form Layout */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Left: Hero Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-green-800 mb-4">
            Book Your Wellness Session
          </h1>
          <p className="text-green-900 text-sm sm:text-base lg:text-lg mb-6">
            Connect with licensed counselors who understand your challenges. Choose your counselor, schedule a session, and start your journey towards better mental health.
          </p>
        </div>

        {/* Right: Booking Form */}
        <div className="lg:w-1/2 w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8 relative z-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-6 text-center">
            Schedule Your Session
          </h2>

          {/* Counselors Horizontal Scroll */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto mb-6">
            {counselors.map((doc, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCounselor(doc)}
                className={`flex flex-col items-center gap-2 p-2 rounded-xl cursor-pointer transition flex-shrink-0 ${
                  selectedCounselor === doc ? "bg-green-200 border-2 border-green-500" : "bg-green-50"
                }`}
              >
                <img
                  src={doc.avatar}
                  alt={doc.name}
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 border-green-200"
                />
                <span className="text-green-900 font-medium text-xs sm:text-sm">{doc.name}</span>
                <span className="text-green-700 text-xs">{doc.tag}</span>
              </div>
            ))}
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-green-800 mb-1 font-medium text-sm sm:text-base">Date</label>
            <input
              type="date"
              className="w-full border border-green-300 rounded-lg px-3 py-2 text-green-900 text-sm sm:text-base focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {/* Time */}
          <div className="mb-4">
            <label className="block text-green-800 mb-1 font-medium text-sm sm:text-base">Time</label>
            <select
              className="w-full border border-green-300 rounded-lg px-3 py-2 text-green-900 text-sm sm:text-base focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select a time</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
            </select>
          </div>

          {/* Session Type */}
          <div className="mb-4">
            <label className="block text-green-800 mb-1 font-medium text-sm sm:text-base">Session Type</label>
            <select
              className="w-full border border-green-300 rounded-lg px-3 py-2 text-green-900 text-sm sm:text-base focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={selectedSessionType}
              onChange={(e) => setSelectedSessionType(e.target.value)}
            >
              <option value="">Select session type</option>
              {sessionTypes.map((s, idx) => (
                <option key={idx} value={s.type}>{s.type} ({s.duration})</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-green-800 mb-1 font-medium text-sm sm:text-base">Message (Optional)</label>
            <textarea
              rows="3"
              placeholder="Share what's on your mind..."
              className="w-full border border-green-300 rounded-lg px-3 py-2 text-green-900 text-sm sm:text-base focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            onClick={handleBook}
            className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition"
          >
            📅 Book Session
          </button>
        </div>
      </div>

      {/* Background animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 0.3; }
        }
        .animate-float { animation: float linear infinite; }

        @keyframes float-slow {
          0% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(-30px); opacity: 0.35; }
          100% { transform: translateY(0); opacity: 0.15; }
        }
        .animate-float-slow { animation: float-slow linear infinite; }

        @keyframes line-move {
          0% { transform: translateY(0) rotate(45deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(45deg); opacity: 0.3; }
          100% { transform: translateY(0) rotate(45deg); opacity: 0.1; }
        }
        .animate-line { animation: line-move linear infinite; }
      `}</style>
    </section>
  );
}
