import React from "react";
import { motion } from 'framer-motion';
import { useParams } from "react-router";
import data from "../../public/json/events.json";


const icons = {
  Calendar: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>,
  Clock: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  MapPin: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 7 8 13 8 13s8-6 8-13a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>,
  Users: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
};





const TechEvent = () => {

  const { id } = useParams();
  const event = data[parseInt(id) - 1] || {};

  // Normalize image path coming from public/json/events.json
  // Use shared techfusion poster as the default/fallback image for events
  const imgSrc = event.image ? event.image.replace(/^\.\.[\/\\]/, '/') : '/images/techfusion25/Techfusionposter-main.webp';

  return (
  <div className="flex flex-col min-h-screen bg-gray-950 text-white font-sans antialiased overflow-hidden">
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
          <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
            {/* Event Header - responsive for portrait posters */}
            <div className="lg:flex lg:items-start lg:gap-8">
              <div className="flex-shrink-0 w-full lg:w-64 xl:w-80">
                <img
                  className="w-full h-auto max-h-[70vh] object-contain rounded-3xl shadow-2xl mb-4 border-4 border-fuchsia-900 bg-gray-950"
                  src={imgSrc}
                  alt={event.name || 'Event image'}
                />
              </div>

              <div className="mt-4 lg:mt-0 flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-fuchsia-400 leading-tight tracking-tight">
                  {event.name}
                </h1>

                <p className="text-base sm:text-lg text-gray-400 mb-6">
                  {event.description}
                </p>

                <a
                  href={event.google_link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block sm:inline-block w-full sm:w-auto px-5 sm:px-6 py-2.5 mb-6 rounded-lg text-base font-bold text-white bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors duration-200 shadow-md shadow-fuchsia-500/40 text-center"
                >
                  Register
                </a>

                {/* Additional content placeholder (speakers, schedule, description sections) */}
                <section className="prose prose-invert max-w-none">
                  {/* ...existing content could be added here... */}
                </section>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full lg:sticky lg:top-8">
            {/* Key Details Card */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-6 border border-fuchsia-900/40 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-fuchsia-300">
                Key Details
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  {icons.Calendar({ className: 'w-5 h-5 text-fuchsia-400' })}
                  <span className="text-sm sm:text-base text-gray-300">{event.day}, {event.date}</span>
                </li>
                <li className="flex items-center space-x-3">
                  {icons.Clock({ className: 'w-5 h-5 text-fuchsia-400' })}
                  <span className="text-sm sm:text-base text-gray-300">{event.start_time} - {event.end_time}</span>
                </li>
                <li className="flex items-center space-x-3">
                  {icons.MapPin({ className: 'w-5 h-5 text-fuchsia-400' })}
                  <span className="text-sm sm:text-base text-gray-300">{event.venue}</span>
                </li>
                <li className="flex items-center space-x-3">
                  {icons.Users({ className: 'w-5 h-5 text-fuchsia-400' })}
                  <span className="text-sm sm:text-base text-gray-300">{event.event_type}</span>
                </li>
              </ul>
            </div>

            {/* Event Leads */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-6 mt-6 border border-fuchsia-900/40 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-fuchsia-300">
                Leads
              </h2>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-300">
                  <span className="font-semibold text-fuchsia-400">Event Lead:</span> {event.lead}
                </p>
                {event.co_leads && event.co_leads.length > 0 && (
                  <p className="text-sm sm:text-base text-gray-300">
                    <span className="font-semibold text-fuchsia-400">Co-Leads:</span> {event.co_leads.join(', ')}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechEvent;