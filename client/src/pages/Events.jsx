import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    date: 'MAY 09',
    title: 'BUG HUNT',
    desc: 'Find and fix bugs in provided code challenges to win exciting prizes.',
    link: '#',
  },
  {
    date: 'MAY 09',
    title: 'EV DEBATE',
    desc: 'Participate in an engaging debate on the future of electric vehicles.',
    link: '#',
  },
  {
    date: 'MAY 16',
    title: 'THE MYSTERY TECH BOX',
    desc: 'Create innovative solutions with mystery components revealed on the day.',
    link: '#',
  },
  {
    date: 'MAY 23',
    title: 'ALUMNI TECH TALKS',
    desc: 'Connect with NIT Srinagar alumni working in leading tech companies.',
    link: '#',
  },
  {
    date: 'MAY 30',
    title: 'CODE BLACKOUT',
    desc: 'Code against the clock with periodic challenges and handicaps.',
    link: '#',
  },
  {
    date: 'JUNE 06',
    title: 'BOT FIGHTS',
    desc: 'Design and program bots to compete in exciting challenge arenas.',
    link: '#',
  },
  {
    date: 'JUNE 13',
    title: 'SHARK TANK NIT SRINAGAR',
    desc: 'Pitch your tech startup ideas to a panel of investors and mentors.',
    link: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, type: 'spring', stiffness: 60 },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

export default function Events() {
  return (
    <section className="py-16 min-h-[80vh] text-white font-tech ">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-fuchsia-400 mb-4 drop-shadow-lg"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Events
      </motion.h2>
      <motion.div
        className="mb-10 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-fuchsia-300 mb-2 tracking-wide">WEEKLY TECH BUZZ</h3>
        <p className="text-base sm:text-lg text-gray-200">Join us for our exciting lineup of tech events</p>
      </motion.div>
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className="relative event-card flex flex-col bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-fuchsia-500/40 border border-fuchsia-900/30 min-h-[260px] overflow-hidden group"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Accent bar */}
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-500 via-fuchsia-400 to-purple-600 rounded-l-2xl" />
              {/* Date badge */}
              <span className="event-date inline-block px-3 py-1 rounded-full bg-fuchsia-800/80 text-xs font-bold text-fuchsia-100 mb-3 tracking-widest shadow-fuchsia-900/30 shadow-sm self-start">
                {event.date}
              </span>
              <h3 className="event-title text-xl font-semibold text-fuchsia-100 mb-2 group-hover:text-fuchsia-300 transition-colors">
                {event.title}
              </h3>
              <p className="event-desc text-sm text-gray-200 mb-4 flex-1">
                {event.desc}
              </p>
              <a
                href={event.link}
                className="event-link inline-block mt-auto px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-300 font-medium bg-fuchsia-900/10 hover:bg-fuchsia-600/20 hover:text-fuchsia-100 transition-all duration-200 shadow-fuchsia-900/20 shadow-sm"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 