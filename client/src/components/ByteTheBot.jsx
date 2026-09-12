import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, X, Laugh } from 'lucide-react';

const funnyMemes = [
  "“99 bugs in the code. Fix 1 bug. 142 bugs in the code.” 🐛",
  "“A SQL query walks into a bar, walks up to 2 tables and asks: ‘Can I join you?’ ” 🍺",
  "“Git commit -m ‘I have no idea why this works but please don't touch it’ ” 🚀",
  "“There is no place like 127.0.0.1 (especially with hot Kashmiri Chai).” ☕",
  "“CSS: Centering a div since 1996 and still questioning life choices.” 🎨",
  "“Hardware is easy until the magic blue smoke comes out.” ⚡",
  "“Why do programmers prefer dark mode? Because light attracts bugs!” 💡",
  "“Launch Code philosophy: If it compiles, it ships. We optimize during the demo.” 💻",
  "“Robonox rule #1: If it doesn't move, more voltage. If it smokes, run!” 🤖",
  "“My code doesn't have bugs, it just develops random unexpected features.” ✨"
];

const expressions = ['(•‿•)', '(>‿<)', '(⌐■_■)', '(⊙_⊙)', '(^‿^)', '(づ｡◕‿‿◕｡)づ'];

export default function ByteTheBot() {
  const [open, setOpen] = useState(false);
  const [memeIndex, setMemeIndex] = useState(0);
  const [exprIndex, setExprIndex] = useState(0);
  const [floatingEmojis, setFloatingEmojis] = useState([]);

  const pokeByte = (e) => {
    e.stopPropagation();
    setMemeIndex((prev) => (prev + 1) % funnyMemes.length);
    setExprIndex((prev) => (prev + 1) % expressions.length);
    setOpen(true);

    // Spawn 5 fun floating emojis
    const emojis = ['🚀', '☕', '👾', '🍕', '💻', '✨', '🐛', '🔥'];
    const newItems = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: (Math.random() - 0.5) * 80,
      y: -60 - Math.random() * 50,
    }));
    setFloatingEmojis((prev) => [...prev.slice(-8), ...newItems]);

    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((item) => !newItems.some((n) => n.id === item.id)));
    }, 1200);
  };

  return (
    <div className="byte-bot-container">
      {/* Floating Emojis Burst */}
      <AnimatePresence>
        {floatingEmojis.map((item) => (
          <motion.div
            key={item.id}
            className="byte-floating-emoji"
            initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.4, x: item.x, y: item.y }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Speech Bubble Joke */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="byte-speech-bubble"
            initial={{ opacity: 0, y: 15, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="bubble-header">
              <span className="bubble-title">
                <Laugh size={12} /> Byte's Campus Wisdom
              </span>
              <button
                type="button"
                className="bubble-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                aria-label="Close speech bubble"
              >
                <X size={12} />
              </button>
            </div>
            <p className="bubble-text">{funnyMemes[memeIndex]}</p>
            <div className="bubble-footer">
              <button type="button" className="bubble-next-btn" onClick={pokeByte}>
                roll another 🎲
              </button>
            </div>
            <div className="bubble-pointer" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Mascot Button */}
      <motion.button
        type="button"
        className="byte-avatar-btn"
        onClick={pokeByte}
        whileHover={{ scale: 1.12, rotate: [0, -6, 6, 0] }}
        whileTap={{ scale: 0.9, rotate: 15 }}
        aria-label="Click Byte the club mascot for fun tech jokes"
        title="Click me for fun memes & dopamine!"
      >
        <span className="byte-face">{expressions[exprIndex]}</span>
        <span className="byte-ping-ring" />
        <span className="byte-badge-label">
          <Sparkles size={9} /> Byte
        </span>
      </motion.button>
    </div>
  );
}
