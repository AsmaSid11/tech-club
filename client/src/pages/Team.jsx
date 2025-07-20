import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  { initials: 'FM', name: 'Fahad Makdoomi', role: '4th Year BTech | Core Member' },
  { initials: 'AM', name: 'Aliza Mushtaq', role: '4th Year BTech | Core Member' },
  { initials: 'TK', name: 'Tejal Kumari', role: '3rd Year BTech | Core Member' },
  { initials: 'A', name: 'Ashvick', role: '3rd Year BTech | Core Member' },
  { initials: 'HS', name: 'Harkirat Singh', role: '2nd Year BTech | Core Member' },
  { initials: 'AS', name: 'Asma Siddique', role: '2nd Year BTech | Core Member' },
  { initials: 'K', name: 'Kritigya', role: '1st Year BTech | Core Member' },
  { initials: 'SM', name: 'Saeed Abdul Muizz', role: '1st Year BTech | Core Member' },
  { initials: 'BQ', name: 'Basar Qari', role: '1st Year MTech | Core Member' },
  { initials: 'RS', name: 'Rishabh Shukla', role: 'MSc 2nd Year | Core Member' },
  { initials: 'IR', name: 'Isa Reshi', role: '2nd Year BTech | Creative Head' },
  { initials: 'A', name: 'Ankita', role: '2nd Year BTech | Designer' },
];

export default function Team() {
  return (
    <section className="py-16  text-white font-tech min-h-[80vh]">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-fuchsia-400 mb-16 drop-shadow-lg">
        Our Tech Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center group bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-2 min-w-0"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg mb-4">
              {member.initials}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-fuchsia-100 mb-1 truncate">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 whitespace-pre-line mb-3">
              {member.role}
            </p>
            <div className="flex gap-4 text-fuchsia-300 text-lg">
              <a href="#" aria-label="LinkedIn" className="hover:text-fuchsia-400 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-fuchsia-400 transition-colors">
                <FaGithub />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-fuchsia-400 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
