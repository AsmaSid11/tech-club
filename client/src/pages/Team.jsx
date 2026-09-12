import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, ShieldCheck, Bot, Cpu, Sparkles, Layers } from 'lucide-react';

const coreTeamMembers = [
  {
    initials: 'AS',
    name: 'Asma Siddiqui',
    role: 'Core Member · Batch of 2023',
    image: '/images/team/asma.webp',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/asmasid11',
      github: 'https://github.com/AsmaSid11',
    },
  },
  {
    initials: 'SM',
    name: 'Saeed Abdul Muizz',
    role: 'Core Member · Batch of 2024',
    image: '/images/team/Muizz.webp',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/abdulmuizz0903',
      github: 'https://github.com/abdulmuizz0903',
    },
  },
];

const launchCodeMembers = [
  {
    initials: 'AK',
    name: 'Animesh Kumar [IT]',
    role: 'Launch Code Team · Batch of 2025-29',
    image: '/images/team/Animesh.webp',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/animesh-kumar-771b60228/',
      github: 'https://github.com/animeshx45',
    },
  },
  {
    initials: 'VC',
    name: 'Vansh Chandana [IT]',
    role: 'Launch Code Team · Batch of 2025-29',
    image: '/images/team/Vansh.webp',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/vansh-chandna-8ab11136a/',
      github: 'https://github.com/vansh100101102-debug',
    },
  },
];

const facultyCoordinator = {
  initials: 'IA',
  name: 'Dr. Iqra Altaf Gillani',
  role: 'Faculty Coordinator · NIT Srinagar',
  image: '/images/team/Iqra.webp',
  description:
    'Guiding the Technology Club’s vision, academic alignment, and institutional outreach. Supporting students in spearheading valley-wide hackathons and high-impact industry partnerships.',
};

function MemberAvatar({ src, initials, name }) {
  const [error, setError] = useState(false);
  return (
    <div className="member-avatar-box">
      {src && !error ? (
        <img src={src} alt={name} onError={() => setError(true)} />
      ) : (
        <div className="member-fallback">{initials}</div>
      )}
    </div>
  );
}

export default function Team() {
  const [facError, setFacError] = useState(false);

  return (
    <div className="subpage-section">
      <div className="subpage-header">
        <div className="subpage-eyebrow">
          <span /> 03 — PEOPLE & LEADERSHIP
        </div>
        <div className="subpage-header-split">
          <div>
            <motion.h1
              className="subpage-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The <em>team.</em>
            </motion.h1>
          </div>
          <div>
            <p className="subpage-desc">
              Meet the student organizers, contributors, and faculty advisor shaping the technical ecosystem at National Institute of Technology Srinagar.
            </p>
          </div>
        </div>
      </div>

      {/* Faculty Coordinator Feature */}
      <motion.div
        className="faculty-feature"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <div className="faculty-portrait">
          {facultyCoordinator.image && !facError ? (
            <img
              src={facultyCoordinator.image}
              alt={facultyCoordinator.name}
              onError={() => setFacError(true)}
            />
          ) : (
            <div className="faculty-portrait-fallback">{facultyCoordinator.initials}</div>
          )}
        </div>
        <div className="faculty-info">
          <span className="card-tag highlight" style={{ marginBottom: '14px', width: 'fit-content' }}>
            <ShieldCheck size={12} /> FACULTY ADVISOR
          </span>
          <h3>{facultyCoordinator.name}</h3>
          <div className="faculty-role">{facultyCoordinator.role}</div>
          <p className="faculty-desc">{facultyCoordinator.description}</p>
        </div>
      </motion.div>

      {/* 1. Core Members */}
      <div className="team-wing-header simple-header">
        <div className="team-wing-title-group">
          <div className="section-kicker">01 — LEADERSHIP</div>
          <h2>Core Members</h2>
        </div>
      </div>

      <div className="editorial-grid-2" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
        {coreTeamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            className="member-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <MemberAvatar src={member.image} initials={member.initials} name={member.name} />
            <h3 className="member-name">{member.name}</h3>
            <div className="member-role">{member.role}</div>
            <div className="social-row">
              {member.socialLinks?.github && (
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github size={15} />
                </a>
              )}
              {member.socialLinks?.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={15} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Launch Code Team */}
      <div className="team-wing-header simple-header">
        <div className="team-wing-title-group">
          <div className="section-kicker">02 — SOFTWARE INITIATIVE</div>
          <h2>Launch Code Team</h2>
        </div>
      </div>

      <div className="editorial-grid-2" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
        {launchCodeMembers.map((member, i) => (
          <motion.div
            key={member.name}
            className="member-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <MemberAvatar src={member.image} initials={member.initials} name={member.name} />
            <h3 className="member-name">{member.name}</h3>
            <div className="member-role">{member.role}</div>
            <div className="social-row">
              {member.socialLinks?.github && (
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github size={15} />
                </a>
              )}
              {member.socialLinks?.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={15} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Robonox Team */}
      <div className="team-wing-header simple-header">
        <div className="team-wing-title-group">
          <div className="section-kicker">03 — ROBOTICS & HARDWARE</div>
          <h2>Robonox Team</h2>
        </div>
      </div>

      <motion.div
        className="robonox-preview-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="robonox-preview-inner">
          <div className="robonox-icon-orb">
            <Bot size={30} />
          </div>
          <div className="robonox-preview-text">
            <div className="robonox-status-pill">
              <span className="pulse-indicator" /> ROSTER UPDATING · COMING SOON
            </div>
            <h3>Robotics & Hardware Team</h3>
            <div className="robonox-tags">
              <span><Cpu size={12} /> ESP32 & Embedded</span>
              <span><Bot size={12} /> Autonomous Bots</span>
              <span><Layers size={12} /> Drones & UAVs</span>
              <span><Sparkles size={12} /> RoboWars</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA to Past Members */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '50px',
          marginTop: '65px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <div className="section-kicker">ALUMNI LEGACY</div>
          <h3 style={{ fontSize: '28px', margin: '8px 0 0', letterSpacing: '-0.03em' }}>
            Looking for previous core members?
          </h3>
        </div>
        <Link to="/past-members" className="button button-ghost">
          Honor roll & alumni <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
