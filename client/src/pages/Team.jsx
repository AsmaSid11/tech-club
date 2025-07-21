import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const teamMembers = [
  { initials: 'FM', name: 'Fahad Makdoomi', role: '4th Year BTech | Core Member' },
  { initials: 'AM', name: 'Aliza Mushtaq', role: '4th Year BTech | Core Member' },
  { initials: 'TK', name: 'Tejal Kumari', role: '3rd Year BTech | Core Member' },
  { initials: 'A', name: 'Ashvick', role: '3rd Year BTech | Core Member' },
  { initials: 'HS', name: 'Harkirat Singh', role: '2nd Year BTech | Core Member' },
  { initials: 'AS', name: 'Asma Siddiqui', role: '2nd Year BTech | Core Member' },
  { initials: 'K', name: 'Kritigya', role: '1st Year BTech | Core Member' },
  { initials: 'SM', name: 'Saeed Abdul Muizz', role: '1st Year BTech | Core Member' },
  { initials: 'BQ', name: 'Basar Qari', role: '1st Year MTech | Core Member' },
  { initials: 'RS', name: 'Rishabh Shukla', role: 'MSc 2nd Year | Core Member' },
  { initials: 'IR', name: 'Isa Reshi', role: '2nd Year BTech | Creative Head' },
  { initials: 'A', name: 'Ankita', role: '2nd Year BTech | Designer' },
];

const coreTeam = teamMembers.filter(member => member.role.includes('Core Member'));
const supportTeam = teamMembers.filter(member => !member.role.includes('Core Member'));

const facultyCoordinator = {
  initials: 'IA',
  name: 'Dr. Iqra Altag Gillani',
  role: 'Faculty Coordinator',
};

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 60 },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

export default function Team() {
  return (
    <section className="py-16 text-white font-tech min-h-[80vh]">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-violet-300 mb-4 drop-shadow-lg"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Our Tech Team
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl text-center text-violet-200 mb-10 font-medium"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
      >
        Academic Year 2024-2025
      </motion.p>
      
      {/* Faculty Coordinator Section */}
      <div className="mb-16">
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-center text-violet-300 mb-8"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          Faculty Coordinator
        </motion.h3>
        <motion.div
          className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-violet-dark/40"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-deep via-violet-dark to-purple-800 flex items-center justify-center text-3xl font-bold text-white shadow-xl mb-5"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {facultyCoordinator.initials}
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-bold text-violet-100 mb-1">
            {facultyCoordinator.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-200 mb-4">
            {facultyCoordinator.role}
          </p>
          <div className="flex gap-5 text-violet-300 text-xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-violet-200 transition-colors"><FaLinkedinIn /></a>
            <a href="#" aria-label="GitHub" className="hover:text-violet-200 transition-colors"><FaGithub /></a>
            <a href="#" aria-label="Twitter" className="hover:text-violet-200 transition-colors"><FaTwitter /></a>
          </div>
        </motion.div>
      </div>

      <div className="mb-12">
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-center text-violet-300 mb-8"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          Core Team
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
          {coreTeam.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center group bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-2 min-w-0 cursor-pointer hover:shadow-violet-dark/40 hover:scale-[1.04]"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-deep via-violet-dark to-purple-800 flex items-center justify-center text-2xl font-bold text-white shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                whileHover={{ scale: 1.13, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {member.initials}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-violet-100 mb-1 truncate">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 whitespace-pre-line mb-3">
                {member.role}
              </p>
              <div className="flex gap-4 text-violet-300 text-lg">
                <a href="#" aria-label="LinkedIn" className="hover:text-violet-200 transition-colors">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-violet-200 transition-colors">
                  <FaGithub />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-violet-200 transition-colors">
                  <FaTwitter />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {supportTeam.length > 0 && (
        <div>
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold text-center text-violet-300 mb-8"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            Creative Team
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
            {supportTeam.map((member, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center group bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-2 min-w-0 cursor-pointer hover:shadow-violet-dark/40 hover:scale-[1.04]"
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-deep via-violet-dark to-purple-800 flex items-center justify-center text-2xl font-bold text-white shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                  whileHover={{ scale: 1.13, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {member.initials}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-violet-100 mb-1 truncate">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 whitespace-pre-line mb-3">
                  {member.role}
                </p>
                <div className="flex gap-4 text-violet-300 text-lg">
                  <a href="#" aria-label="LinkedIn" className="hover:text-violet-200 transition-colors">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" aria-label="GitHub" className="hover:text-violet-200 transition-colors">
                    <FaGithub />
                  </a>
                  <a href="#" aria-label="Twitter" className="hover:text-violet-200 transition-colors">
                    <FaTwitter />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
