import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, Code2, Cpu, MapPin, Sparkles, Users } from 'lucide-react';
import { upcomingEvents, weeklySeries } from '../data/eventsData';

const iconMap = {
  '01': Users,
  '02': Code2,
  '03': Cpu,
};

export default function Events() {
  return (
    <div className="subpage-section">
      <div className="subpage-header">
        <div className="subpage-eyebrow">
          <span /> 01 — CALENDAR & CYCLES
        </div>
        <div className="subpage-header-split">
          <div>
            <motion.h1
              className="subpage-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What’s <span className="brand-word">cooking?</span>
            </motion.h1>
          </div>
          <div>
            <p className="subpage-desc">
              Weekly series and flagship events return this cycle. Between scheduled seasons, exploration continues in our archives and build groups.
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section (if any are scheduled in eventsData.js) */}
      {upcomingEvents.length > 0 ? (
        <div style={{ marginBottom: '50px' }}>
          <div className="section-kicker" style={{ marginBottom: '16px' }}>UPCOMING & ACTIVE SESSIONS</div>
          <div className="editorial-grid-2">
            {upcomingEvents.map((evt) => (
              <div key={evt.id} className="editorial-card" style={{ padding: '24px' }}>
                {evt.poster && (
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '18px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src={evt.poster} alt={evt.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div className="editorial-card-top" style={{ marginBottom: '14px' }}>
                  <span className="card-tag highlight">{evt.status || 'Active'}</span>
                  {evt.tags && evt.tags.length > 0 && <span className="edition-chip">{evt.tags[0]}</span>}
                </div>
                <h3>{evt.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '12px 0 16px', fontFamily: 'DM Mono', fontSize: '11px', color: '#aaa' }}>
                  {evt.date && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={13} /> {evt.date}</div>}
                  {evt.time && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={13} /> {evt.time}</div>}
                  {evt.venue && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={13} /> {evt.venue}</div>}
                </div>
                <p>{evt.description}</p>
                {evt.registrationLink && (
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <a href={evt.registrationLink} target="_blank" rel="noreferrer" className="button button-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Register Now <ArrowUpRight size={15} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Status banner when between cycles */
        <motion.div
          className="status-banner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="status-banner-content">
            <div className="status-indicator">
              <span className="status-indicator-dot" /> BETWEEN ACTIVE CYCLES · NEXT UP: 2026 SERIES
            </div>
            <h2>No live sessions this <span className="brand-word">week</span></h2>
            <p>
              Cursor Hackathon, Buildify, and CodeDay Kashmir are wrapped for the season. The upcoming roster of weekly meetups, hackathons, and technical discussions will land right here.
            </p>
          </div>
          <div>
            <Link to="/archives" className="button button-primary">
              Explore past events <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>
      )}

      {/* Weekly Series */}
      <div style={{ marginBottom: '24px' }}>
        <div className="section-kicker">RECURRING INITIATIVES</div>
      </div>

      <div className="editorial-grid-3">
        {weeklySeries.map((item, i) => {
          const Icon = iconMap[item.num] || Sparkles;
          return (
            <motion.article
              key={item.title}
              className="editorial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
            >
              <div className="editorial-card-top">
                <span className="card-number">{item.num}</span>
                <span className="card-tag">{item.tag}</span>
              </div>
              <div style={{ marginBottom: '18px', color: '#f5f5f0' }}>
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
              <div className="editorial-card-bottom">
                <span style={{ fontFamily: 'DM Mono', fontSize: '10px', color: '#777', letterSpacing: '0.12em' }}>
                  {item.schedule}
                </span>
                <Sparkles size={14} color="#666" />
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Bottom manifesto note */}
      <div className="manifesto" style={{ marginTop: '90px' }}>
        <div className="manifesto-mark">✦</div>
        <p>“Building is a muscle. The club is the gym.”</p>
        <span>TECHNOLOGY CLUB · NIT SRINAGAR</span>
      </div>
    </div>
  );
}
