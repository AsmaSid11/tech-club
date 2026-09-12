import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Ayush from '../assets/PastPhotos/PastPhotos/Ayush.webp';
import Hurmat from '../assets/PastPhotos/PastPhotos/Hurmat.webp';
import Md from '../assets/PastPhotos/PastPhotos/MD.webp';
import Tushar from '../assets/PastPhotos/PastPhotos/Tushar.webp';
import Samarvir from '../assets/PastPhotos/PastPhotos/Samarvir.webp';
import Hafsa from '../assets/PastPhotos/PastPhotos/Hafsa.webp';
import pinak from '../assets/PastPhotos/PastPhotos/Pinak.webp';
import syed from '../assets/PastPhotos/PastPhotos/Syed.webp';

const rawMembers = [
  { initials: 'PP', name: 'Pinak Pani Dixit', role: 'Core Member', year: '2020', src: pinak },
  { initials: 'AK', name: 'Ayush Kumar Dubey', role: 'Core Member', year: '2020', src: Ayush },
  { initials: 'HK', name: 'Hurmat Khalid', role: 'Core Member', year: '2020', src: Hurmat },
  { initials: 'MS', name: 'Md Saif', role: 'Core Member', year: '2021', src: Md },
  { initials: 'FM', name: 'Fahad Makdoomi', role: 'Core Member', year: '2021', src: '/images/team/Fahad.webp' },
  { initials: 'TK', name: 'Tushar Kumar Mehra', role: 'Core Member', year: '2022', src: Tushar },
  { initials: 'AM', name: 'Ayman Makroo', role: 'Core Member', year: '2022', src: null },
  { initials: 'SK', name: 'Syed Kashif Jeelani Alvi', role: 'Core Member', year: '2022', src: syed },
  { initials: 'TK', name: 'Tejal Kumari', role: 'Core Member', year: '2022', src: null },
  { initials: 'AS', name: 'Ashvick', role: 'Core Member', year: '2022', src: '/images/team/ashvick.webp' },
  { initials: 'SS', name: 'Samarvir Singh', role: 'Core Member', year: '2023', src: Samarvir },
  { initials: 'HA', name: 'Hafsha Ayoub Sidqi', role: 'Core Member', year: '2023', src: Hafsa },
  { initials: 'UF', name: 'Urooj Fayaz', role: 'Core Member', year: '2023', src: null },
];

function AlumniAvatarItem({ src, name, initials }) {
  const [err, setErr] = useState(false);
  return (
    <div className="alumni-avatar">
      {src && !err ? (
        <img src={src} alt={name} onError={() => setErr(true)} />
      ) : (
        <div className="alumni-avatar-text">{initials}</div>
      )}
    </div>
  );
}

export default function PastMembers() {
  const [activeYear, setActiveYear] = useState('All');

  const years = ['All', '2020', '2021', '2022', '2023'];

  const filteredMembers =
    activeYear === 'All'
      ? rawMembers
      : rawMembers.filter((m) => m.year === activeYear);

  return (
    <div className="subpage-section">
      <div className="subpage-header">
        <div className="subpage-eyebrow">
          <span /> 04 — ALUMNI NETWORK
        </div>
        <div className="subpage-header-split">
          <div>
            <motion.h1
              className="subpage-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Past <span className="brand-word">members.</span>
            </motion.h1>
          </div>
          <div>
            <p className="subpage-desc">
              Honoring our alumni and foundational contributors who built the bedrock of Technology Club NIT Srinagar. Their contributions continue to inspire new cohorts of student builders.
            </p>
            <div className="subpage-stats">
              <div className="subpage-stat-item">
                <span className="subpage-stat-num">{rawMembers.length}</span>
                <span className="subpage-stat-label">Recognized Alumni</span>
              </div>
              <div className="subpage-stat-item">
                <span className="subpage-stat-num">4+</span>
                <span className="subpage-stat-label">Graduating Batches</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="gallery-filters">
        {years.map((y) => (
          <button
            key={y}
            className={`gallery-filter-btn ${activeYear === y ? 'active' : ''}`}
            onClick={() => setActiveYear(y)}
          >
            {y === 'All' ? 'All Batches' : `Class of ${y}`}
          </button>
        ))}
      </div>

      {/* Alumni Grid */}
      <div className="editorial-grid-3">
        {filteredMembers.map((member, i) => (
          <motion.div
            key={`${member.name}-${member.year}`}
            className="alumni-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + (i % 6) * 0.05, duration: 0.5 }}
          >
            <AlumniAvatarItem src={member.src} name={member.name} initials={member.initials} />
            <div className="alumni-info">
              <div className="alumni-name">{member.name}</div>
              <div className="alumni-meta">
                <span>{member.role}</span>
                <span>·</span>
                <span style={{ color: '#aaa' }}>{member.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Manifesto callout */}
      <div className="manifesto" style={{ marginTop: '90px' }}>
        <div className="manifesto-mark">✦</div>
        <p>“Once a builder in the club, always a part of the network.”</p>
        <span>HONOR ROLL · NIT SRINAGAR</span>
      </div>
    </div>
  );
}