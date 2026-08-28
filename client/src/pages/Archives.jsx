import React from 'react';
import { motion } from 'framer-motion';

const pastEditions = [
  {
    title: 'TechVaganza',
    type: 'Annual Inter College Event',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8.46-6.46L16.6 9.4c.93-1.87.93-3.93 0-5.8l4.06-4.06L22 5.4 20.07 7.33c1.02.96 1.77 2.23 2.07 3.67h2.86V13h-2.86c-.3 1.44-1.05 2.71-2.07 3.67L22 18.6l-2.46 2.46-4.06-4.06c-1.87.93-3.93.93-5.8 0L3.76 20.6 1.3 18.14l4.06-4.06c-.93-1.87-.93-3.93 0-5.8L1.3 3.26 3.76.8l4.06 4.06c1.87-.93 3.93-.93 5.8 0l4.06-4.06 2.46 2.46zm-6.46 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
    description: 'A premier two-day inter-college tech fest that brings together workshops, hackathons, coding competitions, and inspiring sessions under one vibrant banner. It serves as a dynamic platform for students to showcase their talent, exchange ideas across disciplines, and immerse themselves in the spirit of technology-driven innovation and creativity.',
    editions: [
      { year: 'TechVaganza 2024' },
    ],
  },
  {
    title: 'TechFusion',
    type: 'Annual Intra College Event',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Our flagship two-day intra-college tech fest that brings together workshops, hackathons, coding competitions, and engaging sessions under one banner. It serves as a platform for students to showcase their skills, collaborate across disciplines, and experience the thrill of technology-driven innovation and creativity on campus.',
    editions: [
      { year: 'TechFusion 2025' },
      { year: 'TechFusion 2024' },
    ],
  },
  {
    title: 'Cursor Hackathon Kashmir',
    type: 'Collaborative Hackathon',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: 'Kashmir\'s largest hackathon, hosted at NIT Srinagar on 28–29 March 2026 with Cursor Ambassador Mohtasham Madani and the Technology Club. Themed "Build for the Next Billion," 125+ teams used Cursor, OpenAI, Convex, and v0 by Vercel to ship solutions in healthcare, education, and agriculture. Judges from NVIDIA, Oracle, LinkedIn, and Dell EMC evaluated the finals.',
    editions: [
      { year: 'Cursor Hackathon Kashmir 2026' },
    ],
  },
  {
    title: 'CodeDay Kashmir',
    type: 'Collaborative Event',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20v-6h4v6m0-11V3m0 0h-3m3 0h3m-6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'A free 24-hour student hackathon run with Team CodeDay, aimed at school and first-year undergrad students across the valley. Workshops cover Scratch, GitHub, and LLMs, then teams stay overnight to build apps and games. The 2025 inaugural edition (12–13 July) was the first of its kind in Kashmir; 2026 (23–24 May) sold out weeks in advance with 150+ participants.',
    editions: [
      { year: 'CodeDay Kashmir 2026' },
      { year: 'CodeDay Kashmir 2025' },
    ],
  },
  {
    title: 'Buildify Kashmir',
    type: 'Collaborative Hackathon',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: 'A two-day, execution-first hackathon held on 9–10 May 2026, organised by Buildify and the Technology Club under the theme "Making Business Future-Proof." Over 48 hours, teams shipped working products rather than pitch decks. Highlights included Curtain AI (Best Technical Team) and Hunarmand, a platform for Kashmiri arts and crafts (Best Idea & Presentation).',
    editions: [
      { year: 'Buildify Kashmir 2026' },
    ],
  },
  {
    title: 'Weekly Events',
    type: 'Ongoing Series',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Coding challenges, brainstorming sessions, and interactive meetups that run through the semester. A new weekly series is returning soon — past sessions lived here as a culture of continuous learning, skill-sharing, and staying current with tech.',
    editions: [
      { year: 'Weekly Tech Sessions' },
    ],
  },
];

export default function Archives() {
  return (
    <section className="py-20 min-h-[100vh] text-white font-tech">
      {/* Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="text-gray-100">Event </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Archives</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Explore past editions and memorable moments from our flagship annual and collaborative events. Full archives with photos, details, and highlights coming soon.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Event families */}
        <div className="space-y-16">
          {pastEditions.map((eventFamily, familyIdx) => (
            <motion.div
              key={eventFamily.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: familyIdx * 0.15, type: 'spring', stiffness: 60 }}
              className="group"
            >
              {/* Event family header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-700/50 group-hover:border-gray-600/80 transition-colors duration-300">
                <div className="flex-shrink-0 text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity">
                  {eventFamily.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-gray-100 transition-colors">
                    {eventFamily.title}
                  </h2>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                    {eventFamily.type}
                  </p>
                </div>
              </div>

              {/* Event description */}
              <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-3xl">
                {eventFamily.description}
              </p>

              {/* Editions list */}
              <div className="space-y-4 ml-0 sm:ml-12">
                {eventFamily.editions.map((edition, edIdx) => (
                  <motion.div
                    key={edition.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: edIdx * 0.08 }}
                    className="group/edition"
                  >
                    <div className="flex gap-4">
                      {/* Vertical line and dot */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-gray-600/80 group-hover/edition:bg-cyan-500 transition-colors mt-1.5" />
                        {edIdx < eventFamily.editions.length - 1 && (
                          <div className="w-0.5 h-12 bg-gray-700/40 mt-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-2">
                        <div className="flex items-baseline gap-3 mb-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-200 group-hover/edition:text-white transition-colors">
                            {edition.year}
                          </h3>
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-2 py-1">
                            Archived
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming archives section */}
        <motion.div
          className="mt-20 pt-16 border-t border-gray-700/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 60 }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800/50 border border-gray-700/50 mb-4">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m0 0h6m-6-6h-6m0 0H6m6 0h6" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">More Coming Soon</h3>
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              Full galleries, Drive albums, competition results, and participant highlights will land here as we document each edition. Robonox and other collaborative events are next.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
