import React, { useState } from "react";
import {
  Leaf,
  Bed,
  Wind,
  Brain,
  PhoneOutgoing,
  Gamepad,
  Star,
  StarHalf,
} from "lucide-react";

const categories = ["All", "Popular", "Trending", "Essential", "Featured", "Emergency", "Fun"];

const resources = [
  {
    title: "Stress Management",
    rating: 4.8,
    description: "Learn effective techniques to manage academic and personal stress",
    details: "12 exercises",
    icon: <Leaf className="text-green-600" size={28} />,
    route: "/stress-management",
    category: "Essential",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Sleep Audio Library",
    rating: 4.9,
    description: "Guided meditations and calming sounds for better sleep",
    details: "25 audios",
    icon: <Bed className="text-blue-600" size={28} />,
    route: "/sleep-library",
    category: "Popular",
    bgColor: "bg-blue-50",
  },
  {
    title: "Breathing Exercises",
    rating: 4.7,
    description: "Simple breathing techniques for anxiety and relaxation",
    details: "8 techniques",
    icon: <Wind className="text-orange-600" size={28} />,
    route: "/breath",
    category: "Trending",
    bgColor: "bg-orange-50",
  },
  {
    title: "Mindfulness Practice",
    rating: 4.8,
    description: "Daily mindfulness exercises to improve mental clarity",
    details: "15 practices",
    icon: <Brain className="text-purple-600" size={28} />,
    route: "/mindfulness",
    category: "Featured",
    bgColor: "bg-purple-50",
  },
  {
    title: "Interactive Games",
    rating: 4.6,
    description: "Fun games designed to boost mood and reduce anxiety",
    details: "6 games",
    icon: <Gamepad className="text-pink-600" size={28} />,
    route: "/interactive-games",
    category: "Fun",
    bgColor: "bg-pink-50",
  },
];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources =
    selectedCategory === "All"
      ? resources
      : resources.filter((res) => res.category === selectedCategory);

  const handleNavigation = (route) => {
    alert(`Navigating to: ${route}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 mb-3 sm:mb-4">
            Wellness Resources Hub
          </h1>
          <p className="max-w-xl mx-auto text-green-800 text-sm sm:text-base md:text-lg leading-relaxed">
            Explore our curated collection of mental health tools and resources designed to improve your well-being.
          </p>
        </header>

        {/* Categories */}
        <nav className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 focus:outline-none
                ${selectedCategory === cat
                  ? "bg-green-700 text-white shadow-md scale-105"
                  : "bg-white border border-green-300 text-green-800 hover:bg-green-100 hover:border-green-400 hover:scale-105"}`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredResources.map((res, idx) => (
            <article
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 shadow-lg border border-green-100 flex flex-col
                transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white
                ${res.bgColor} ring-1 ring-green-100`}
            >
              <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white shadow-md animate-bounce-slow">
                  {res.icon}
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-green-900">{res.title}</h2>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(Math.floor(res.rating))].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                    {res.rating % 1 >= 0.5 && <StarHalf className="text-yellow-400 w-4 h-4" />}
                    <span className="text-green-800 text-xs sm:text-sm font-medium ml-1">{res.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <p className="flex-grow text-green-900 mb-4 sm:mb-6 text-sm sm:text-base">{res.description}</p>
              <p className="mb-4 sm:mb-8 text-xs sm:text-sm font-semibold text-green-700">{res.details}</p>
              <div className="flex gap-3 sm:gap-5 mt-auto flex-wrap">
                <button
                  onClick={() => handleNavigation(res.route)}
                  className="flex-1 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                >
                  Start
                </button>
                <button className="flex-1 py-2 sm:py-3 rounded-xl border border-green-300 text-green-800 hover:bg-green-100 transition-colors duration-300">
                  Preview
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
