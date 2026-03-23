import React from 'react';
import { motion } from 'framer-motion';

const upcomingEvents = [
  {
    name: 'Cursor Hackathon',
    type: 'Collaborative Event',
    status: 'Priority: Starts in 5 Days',
    details:
      'Our highest-priority event right now. Join us for this collaborative hackathon experience. Registrations, team guidance, and live updates will be tracked here.',
    daysUntil: 5,
    priority: true,
    links: [
      { label: 'Register Now', url: 'https://luma.com/za5937hy' },
      { label: 'Follow on Instagram', url: 'https://www.instagram.com/cursor.in?igsh=cTV6Ym4wbjl6bjdi' },
    ],
  },
];

const weeklyEvents = [
  {
    category: 'Weekly Tech Sessions',
    description: 'No sessions scheduled for now. Stay tuned for announcements on upcoming weekly meetups, coding challenges, and tech talks.',
  },
];

const plannedEvents = [
  {
    name: 'CodeDay Kashmir 2026',
    type: 'Collaborative Event',
  },
  {
    name: 'TechVaganza 2026',
    type: 'Annual Inter College Event',
  },
  {
    name: 'TechFusion 2026',
    type: 'Annual Intra College Event',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 60 },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

export default function Events() {
  return (
    <section className="py-16 min-h-[80vh] text-white font-tech">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-cyan-400 mb-4 drop-shadow-lg"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        What's Cooking?
      </motion.h2>
      <motion.div
        className="mb-12 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-2 tracking-wide">UPCOMING & ONGOING</h3>
        <p className="text-base sm:text-lg text-gray-200">What's happening with the club. Explore past events in our archives.</p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Priority Upcoming Event */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 60 } },
          }}
        >
          <div className="mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-cyan-300 tracking-wide uppercase">Next Up</h4>
            <p className="text-sm text-gray-400 mt-1">Highest priority event happening soon</p>
          </div>
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.name}
              className="relative event-card flex flex-col bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-700/50 overflow-hidden group hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />

              {/* Days counter */}
              <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-cyan-400">{event.daysUntil}</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Days Away</span>
              </div>

              <div className="pr-20 sm:pr-24 md:pr-32 mb-4">
                <span className="inline-block px-3 py-1 rounded-md bg-cyan-900/40 border border-cyan-500/30 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                  {event.type}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                {event.name}
              </h3>

              <span className="inline-block px-3 py-1 rounded-md bg-gray-700/60 text-xs font-bold text-gray-200 uppercase tracking-wider mb-4 sm:mb-6 w-fit">
                {event.status}
              </span>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                {event.details}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {event.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Weekly Events */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, type: 'spring', stiffness: 60 } },
          }}
        >
          <div className="mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-gray-300 tracking-wide uppercase">Ongoing Series</h4>
            <p className="text-sm text-gray-400 mt-1">Regular club activities and sessions</p>
          </div>
          {weeklyEvents.map((event) => (
            <motion.div
              key={event.category}
              className="relative event-card flex flex-col bg-gray-800/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/40 group hover:border-gray-600/60 hover:bg-gray-800/50 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                {event.category}
              </h4>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon / Planned Events - COMMENTED OUT FOR NOW */}
        {/* 
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3, type: 'spring', stiffness: 60 } },
          }}
        >
          <div className="mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-gray-300 tracking-wide uppercase">Later This Year</h4>
            <p className="text-sm text-gray-400 mt-1">Events we're planning for 2026</p>
          </div>

          <motion.div
            className="rounded-2xl bg-gray-800/40 backdrop-blur-lg border border-gray-700/40 p-8 sm:p-10 flex flex-col items-center justify-center min-h-[240px] group hover:border-gray-600/60 hover:bg-gray-800/60 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h5 className="text-2xl sm:text-3xl font-bold text-white mb-4">2026 Lineup</h5>
            <p className="text-base text-gray-300 mb-8 text-center max-w-lg">
              We're planning bigger and better events this year. Here's a preview of what's coming:
            </p>

            <div className="space-y-3 w-full max-w-lg">
              {plannedEvents.map((event) => (
                <div
                  key={event.name}
                  className="bg-gray-900/50 border border-gray-700/40 rounded-lg px-5 py-4 group/item hover:border-gray-600/60 hover:bg-gray-900/80 transition-all duration-200"
                >
                  <p className="font-semibold text-gray-100">{event.name}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{event.type}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-400 mt-8 italic">Details and registration dates coming soon...</p>
          </motion.div>
        </motion.div>
        */}
      </div>
    </section>
  );
} 