import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Code2, Cpu, Users, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeSlideshow from '../components/HomeSlideshow';

const heroSlides = [
  {
    src: '/images/gallery2/2.webp',
    title: 'Coding Competition Arena',
    tag: 'NIT SRINAGAR // CODING ARENA',
  },
  {
    src: '/images/gallery/4.webp',
    title: 'Live Lab Session',
    tag: 'NIT SRINAGAR // WORKSHOP LAB',
  },
  {
    src: '/images/gallery2/4.webp',
    title: 'Robotics & Hardware Systems',
    tag: 'NIT SRINAGAR // HARDWARE SPRINT',
  },
  {
    src: '/images/gallery/8.webp',
    title: 'Hackathon Sprint',
    tag: 'NIT SRINAGAR // HACKATHON ARENA',
  },
  {
    src: '/images/gallery/14.webp',
    title: 'Robotics Demonstration Track',
    tag: 'NIT SRINAGAR // ROBOTICS DEMO',
  },
  {
    src: '/images/gallery2/3.webp',
    title: 'Late Night Build Session',
    tag: 'NIT SRINAGAR // BUILD NIGHT',
  },
  {
    src: '/images/gallery/12.webp',
    title: 'Innovation Showcase',
    tag: 'NIT SRINAGAR // PROJECT DEMOS',
  },
  {
    src: '/images/gallery2/14.webp',
    title: 'Student Builders Community',
    tag: 'NIT SRINAGAR // TECH COMMUNITY',
  },
];

const pillars = [
  { icon: Code2, label: 'Build', title: 'Turn ideas into working systems', text: 'Hands-on projects, coding challenges and experiments that move beyond theory.' },
  { icon: Cpu, label: 'Explore', title: 'Stay close to emerging tech', text: 'Workshops and technical discussions create room to learn tools worth knowing.' },
  { icon: Users, label: 'Collaborate', title: 'Find your people', text: 'A campus community for sharing ideas, solving problems and building together.' },
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
        <div className="hero-side-label">NIT SRINAGAR / TECHNOLOGY CLUB / 2026</div>
        <div className="hero-content">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="eyebrow"><span /> STUDENT-LED · TECH-DRIVEN</motion.div>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.08}}>
            Make the<br /><em>future</em> <span className="brand-word">tangible.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.18}}>
            Technology Club at NIT Srinagar is where curiosity becomes capability — through projects, workshops, hackathons and conversations that make technology real.
          </motion.p>
          <div className="hero-actions">
            <a href="#about" className="button button-primary">Discover the club <ArrowDownRight size={17}/></a>
            <Link to="/events" className="button button-ghost">See what’s happening <ArrowUpRight size={17}/></Link>
          </div>
        </div>
        <div 
          className="hero-device"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="device-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={heroSlides[currentHeroIndex].src}
                src={heroSlides[currentHeroIndex].src}
                alt={heroSlides[currentHeroIndex].title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <div className="device-overlay" />
            <div className="device-controls">
              <button 
                type="button" 
                className="device-nav-btn" 
                onClick={prevSlide}
                aria-label="Previous image"
              >
                <ChevronLeft size={13} />
              </button>
              <div className="device-dots">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`device-dot ${idx === currentHeroIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentHeroIndex(idx);
                    }}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                type="button" 
                className="device-nav-btn" 
                onClick={nextSlide}
                aria-label="Next image"
              >
                <ChevronRight size={13} />
              </button>
            </div>
            <span className="device-tag">{heroSlides[currentHeroIndex].tag}</span>
            <span className="device-counter">{String(currentHeroIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /><Zap size={14}/></div>
      </section>

      <section id="about" className="story-section">
        <div className="section-kicker">01 — THE CLUB</div>
        <div className="story-heading"><h2>Not just a club.<br /><span>A place to </span><span className="brand-word">build.</span></h2><p>We provide a platform for students to explore cutting-edge technologies, develop practical skills and collaborate on exciting projects.</p></div>
        <div className="story-grid">
          <div className="story-image"><img src="/images/gallery/1.webp" alt="Technology Club activity" /><span>TECHNOLOGY / COMMUNITY / EXPERIMENTATION</span></div>
          <div className="story-copy"><div className="big-number">01</div><h3>Curiosity is the starting point.</h3><p>Our mission is to create a vibrant tech ecosystem within campus — one where learning is social, experimentation is encouraged, and students can turn an idea into something they can show.</p><p>From technical discussions to hackathons and workshops, every activity is designed to move from “I want to learn” to “I can build.”</p><Link to="/archives" className="text-link">Explore our journey <ArrowUpRight size={16}/></Link></div>
        </div>
      </section>

      {/* Moving Cards Slideshow featuring all images from gallery and gallery2 */}
      <HomeSlideshow />

      <section className="pillars-section">
        <div className="section-kicker">02 — HOW WE MOVE</div>
        <div className="pillar-grid">
          {pillars.map(({icon: Icon,label,title,text}, i) => <motion.article key={label} className="pillar" whileHover={{y:-8}} transition={{type:'spring',stiffness:250}}>
            <div className="pillar-top"><span>0{i+1}</span><Icon size={22}/></div><small>{label}</small><h3>{title}</h3><p>{text}</p>
          </motion.article>)}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-mark">✦</div>
        <p>“Technology becomes meaningful when people have the space to experiment with it.”</p>
        <span>TECHNOLOGY CLUB · NIT SRINAGAR</span>
      </section>

      <section className="home-cta">
        <div><div className="section-kicker">03 — STEP INSIDE</div><h2>There’s more<br />to <span className="brand-word">explore.</span></h2></div>
        <div className="cta-links"><Link to="/events">Events <ArrowUpRight /></Link><Link to="/gallery">Gallery <ArrowUpRight /></Link><Link to="/team">Meet the team <ArrowUpRight /></Link></div>
      </section>
    </div>
  );
}
