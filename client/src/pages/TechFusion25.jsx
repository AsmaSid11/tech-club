import React from "react";


import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2025-12-01T09:00:00"); // Example date

const TechFusion25 = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = EVENT_DATE - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-violet-deep to-violet-dark">
      {/* Countdown Section */}
      <section className="flex flex-col items-center justify-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-violet-300">TechFusion '25 Countdown</h1>
        <div className="flex gap-6 text-2xl font-mono text-white mb-6">
          <div><span className="text-3xl font-bold">{timeLeft.days}</span> days</div>
          <div><span className="text-3xl font-bold">{timeLeft.hours}</span> hrs</div>
          <div><span className="text-3xl font-bold">{timeLeft.minutes}</span> min</div>
          <div><span className="text-3xl font-bold">{timeLeft.seconds}</span> sec</div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center justify-center py-8 px-4 bg-white/10 rounded-xl mx-4 mb-8">
        <h2 className="text-3xl font-bold mb-2 text-violet-200">About TechFusion '25</h2>
        <p className="max-w-2xl text-lg text-white mb-2">
          TechFusion '25 is the annual flagship event of Technology Club, bringing together tech enthusiasts, innovators, and creators for a day of learning, networking, and fun. Join us for workshops, competitions, talks, and more!
        </p>
      </section>

      {/* Event List Section */}
      <section className="flex flex-col items-center justify-center py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-violet-200">Event List</h2>
        <button
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300"
          onClick={() => navigate("/techfusion25/events")}
        >
          View All Events
        </button>
      </section>
    </div>
  );
};

export default TechFusion25;
