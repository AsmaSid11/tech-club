import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const weeklySeries = [
  {
    title: 'Meetups',
    blurb: 'Casual hangouts to ship, debug, and swap ideas with the rest of the club.',
  },
  {
    title: 'Challenges',
    blurb: 'Timed coding puzzles and mini-competitions to keep the skills sharp.',
  },
  {
    title: 'Tech Talks',
    blurb: 'Short sessions on tools, research, and whatever the floor is building.',
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 70 },
  }),
};

function CalendarIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

export default function Events() {
  return (
    <section className="py-16 sm:py-20 min-h-[80vh] text-white font-tech">
      <motion.div
        className="mb-14 text-center px-2"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-violet-300/80 mb-4">
          Technology Club
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">
          <span className="text-white">What&apos;s </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-400">
            Cooking?
          </span>
        </h1>
        <div className="flex justify-center mb-6">
          <div className="h-1 w-20 bg-gradient-to-r from-violet-300 to-purple-400 rounded-full" />
        </div>
        <p className="text-base sm:text-lg text-violet-200/90 max-w-2xl mx-auto leading-relaxed">
          Nothing on the calendar yet. Weekly sessions return this semester — until then, the last cycle lives in the archives.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-violet-dark/40 bg-white/5 backdrop-blur-md shadow-2xl mb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 70 }}
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-300 via-purple-400 to-violet-dark" />
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-violet-dark/30 blur-3xl pointer-events-none" />

          <div className="relative p-6 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-deep to-violet-dark border border-violet-300/20 flex items-center justify-center text-violet-200 shadow-[0_0_24px_rgba(106,30,85,0.45)]">
              <CalendarIcon />
            </div>
            <div className="flex-1 min-w-0">
              <span className="inline-block px-3 py-1 rounded-full bg-violet-dark/40 border border-violet-300/20 text-[11px] font-bold text-violet-200 uppercase tracking-[0.2em] mb-3">
                Between seasons
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                No upcoming events
              </h2>
              <p className="text-sm sm:text-base text-violet-100/80 leading-relaxed max-w-xl mb-6">
                Cursor Hackathon, Buildify, and CodeDay Kashmir are wrapped. Next up: weekly meetups, challenges, and talks. Dates land here first.
              </p>
              <Link
                to="/archives"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-dark via-violet-deep to-purple-900 text-white font-semibold text-sm shadow-lg hover:scale-105 hover:shadow-violet-dark/40 active:scale-95 transition-all duration-200"
              >
                Browse archives
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-8 text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-violet-300 mb-1 tracking-wide">
            Weekly series
          </h3>
          <p className="text-sm text-violet-200/70">
            The lineup we&apos;re bringing back. Schedule drops here once sessions start.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {weeklySeries.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative rounded-2xl border border-violet-dark/30 bg-gradient-to-br from-gray-900/70 via-violet-deep/40 to-violet-dark/30 p-6 backdrop-blur-md hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-[0_0_28px_rgba(106,30,85,0.35)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <span className="text-[10px] uppercase tracking-widest font-bold text-violet-300 bg-violet-dark/50 border border-violet-300/20 px-2 py-1 rounded-full">
                  Soon
                </span>
              </div>
              <p className="text-sm text-violet-100/75 leading-relaxed">{item.blurb}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-2xl border border-dashed border-violet-dark/50 bg-white/[0.03] px-6 py-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-violet-200 text-sm sm:text-base mb-2">
            Looking for Cursor Hackathon, Buildify, CodeDay, TechFusion, or TechVaganza?
          </p>
          <Link
            to="/archives"
            className="text-violet-300 font-semibold hover:text-white transition-colors underline underline-offset-4 decoration-violet-dark"
          >
            Open the event archives
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
