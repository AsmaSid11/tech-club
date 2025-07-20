import { Routes, Route, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/projects', label: 'Projects' },
  { to: '/past-members', label: 'Past Members' },
  { to: '/team', label: 'Team' },
  { to: '/gallery', label: 'Gallery' },
]

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-fuchsia-800 to-pink-700 shadow-lg">
      <div className="text-2xl font-extrabold text-white tracking-widest font-tech">Tech Club</div>
      <div className="flex gap-6">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className="text-white font-semibold hover:text-pink-200 transition-colors duration-200 uppercase tracking-wide font-tech"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

function Home() {
  return <div className="p-8 text-white font-tech text-3xl">Welcome to the Tech Club!</div>
}
function About() {
  return <div className="p-8 text-white font-tech text-2xl">About the Tech Club...</div>
}
function Events() {
  return <div className="p-8 text-white font-tech text-2xl">Upcoming and past events...</div>
}
function Projects() {
  return <div className="p-8 text-white font-tech text-2xl">Our projects...</div>
}
function PastMembers() {
  return <div className="p-8 text-white font-tech text-2xl">Past members of the club...</div>
}
function Team() {
  return <div className="p-8 text-white font-tech text-2xl">Meet our current team...</div>
}
function Gallery() {
  return <div className="p-8 text-white font-tech text-2xl">Gallery of moments...</div>
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-fuchsia-950 to-pink-900">
      <Navbar />
      <main className="max-w-5xl mx-auto mt-8 bg-gray-900 bg-opacity-80 rounded-xl shadow-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/past-members" element={<PastMembers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </div>
  )
}