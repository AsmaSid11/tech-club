import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Calendar, Layers, Sparkles, Terminal, Trophy, Zap } from 'lucide-react';
import { pastEditions } from '../data/eventsData';

const archiveIconMap = {
  '01': Trophy,
  '02': Zap,
  '03': Terminal,
  '04': Calendar,
  '05': Award,
  '06': Layers,
};

export default function Archives() {
  return (
    <div className="subpage-section">
      <div className="subpage-header">
        <div className="subpage-eyebrow">
          <span /> 02 — HISTORICAL RECORD
        </div>
        <div className="subpage-header-split">
          <div>
            <motion.h1
              className="subpage-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Event <span className="brand-word">archives.</span>
            </motion.h1>
          </div>
          <div>
            <p className="subpage-desc">
              A comprehensive chronicle of competitions, hackathons, and symposiums curated by Technology Club across seasons at NIT Srinagar.
            </p>
            <div className="subpage-stats">
              <div className="subpage-stat-item">
                <span className="subpage-stat-num">06+</span>
                <span className="subpage-stat-label">Major Formats</span>
              </div>
              <div className="subpage-stat-item">
                <span className="subpage-stat-num">1.4k+</span>
                <span className="subpage-stat-label">Participants</span>
              </div>
              <div className="subpage-stat-item">
                <span className="subpage-stat-num">200+</span>
                <span className="subpage-stat-label">Projects Built</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Archives Grid */}
      <div className="editorial-grid-2">
        {pastEditions.map((item, i) => {
          const Icon = archiveIconMap[item.num] || Sparkles;
          return (
            <motion.article
              key={item.title}
              className="editorial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
            >
              <div className="editorial-card-top">
                <span className="card-number">{item.num}</span>
                <span className={`card-tag ${item.highlight ? 'highlight' : ''}`}>{item.type}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <Icon size={22} color="#f5f5f0" strokeWidth={1.8} />
                <h3 style={{ margin: 0 }}>{item.title}</h3>
              </div>

              <p>{item.description}</p>

              <div className="editorial-card-bottom">
                <div className="edition-chips">
                  {item.editions.map((ed) => (
                    <span key={ed} className="edition-chip">
                      {ed}
                    </span>
                  ))}
                </div>
                <Link
                  to="/gallery"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'DM Mono',
                    fontSize: '11px',
                    color: '#ddd',
                    textDecoration: 'none',
                  }}
                >
                  Visuals <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Footer call to gallery */}
      <div
        style={{
          marginTop: '90px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <div className="section-kicker">CURATED MEMORIES</div>
          <h3 style={{ fontSize: '28px', margin: '8px 0 0', letterSpacing: '-0.03em' }}>
            Looking for event photographs?
          </h3>
        </div>
        <Link to="/gallery" className="button button-primary">
          View gallery <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
