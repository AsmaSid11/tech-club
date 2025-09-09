import React, { useState } from "react";
import data from "../../public/json/events.json";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";



const eventsJson = data;

const events = Array.from({ length: 16 }, (_, i) => ({
  id: eventsJson[i].id,
  name: eventsJson[i].name,
  day: eventsJson[i].day,
  start_time: eventsJson[i].start_time,
  end_time: eventsJson[i].end_time,
  venue: eventsJson[i].venue,
  image: eventsJson[i].image,
}));

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 60 },
  }),
};


const TechFusionEvents = () => {
  const [dayFilter, setDayFilter] = useState("all");

  const navigate = useNavigate();

  // visibleEvents: filtered by selected day (all / 1 / 2)
  const visibleEvents = events.filter((ev) => {
    if (dayFilter === "all") return true;
    return Number(ev.day) === Number(dayFilter);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-12 text-white font-tech text-xl sm:text-2xl md:text-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">TechFusion '25 Events</h1>
        <p className="mb-4">Explore all the exciting events happening at TechFusion '25!</p>
        {/* List your events here */}

        <div className="w-full flex flex-col items-center mb-4">
          <div className="flex gap-3 mb-6">
            <button
              className={`px-4 py-2 rounded ${dayFilter === "all" ? "bg-fuchsia-500 text-white" : "bg-white/10 text-white"}`}
              onClick={() => setDayFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded ${dayFilter === 1 ? "bg-fuchsia-500 text-white" : "bg-white/10 text-white"}`}
              onClick={() => setDayFilter(1)}
            >
              Day 1
            </button>
            <button
              className={`px-4 py-2 rounded ${dayFilter === 2 ? "bg-fuchsia-500 text-white" : "bg-white/10 text-white"}`}
              onClick={() => setDayFilter(2)}
            >
              Day 2
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

{visibleEvents.map((ev) => (
  <motion.div
    key={ev.id}
    className="w-[20rem] sm:w-[36rem] md:w-[20rem] flex-shrink-0 relative event-card flex flex-col bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-fuchsia-300 transition-all duration-300 hover:shadow-fuchsia-500/40 min-h-[260px] overflow-hidden group mb-4 mr-30"
    viewport={{ once: true, amount: 0.8 }}
  >
    <div className="flex-grow">
      <img className="w-full h-48 object-cover rounded-lg mb-4" src={ev.image} alt={ev.name} />
      <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-fuchsia-200 transition-colors">
        {ev.name}
      </h3>
      <div className="flex flex-col gap-2">
        <p className="text-gray-200 text-sm font-medium">
          <span className="font-semibold text-fuchsia-300">Time:</span> {ev.start_time} - {ev.end_time}
        </p>
        <p className="text-gray-200 text-sm font-medium">
          <span className="font-semibold text-fuchsia-300">Venue:</span> {ev.venue}
        </p>
      </div>
    </div>
    <a
      href="/techfusion25/events"
      className="inline-block w-full mt-6 px-4 py-2 text-center rounded-lg border border-fuchsia-500 text-fuchsia-300 font-medium bg-fuchsia-900/10 hover:bg-fuchsia-600/20 hover:text-fuchsia-100 transition-all duration-200"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/techfusion25/events/${ev.id}`);
      }}
    >
      View Details
    </a>
  </motion.div>
))}


          </div>
        </div>
      </main>
    </div>
  );
};

export default TechFusionEvents;
