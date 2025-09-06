import { motion } from 'framer-motion';

import Ayush from '../assets/PastPhotos/PastPhotos/Ayush.png';
import Hurmat from '../assets/PastPhotos/PastPhotos/Hurmat.png';
import Md from '../assets/PastPhotos/PastPhotos/Md.png';
import Tushar from '../assets/PastPhotos/PastPhotos/Tushar.png';
import Samarvir from '../assets/PastPhotos/PastPhotos/Samarvir.png';
import Hafsa from '../assets/PastPhotos/PastPhotos/Hafsa.png';
import pinak from '../assets/PastPhotos/PastPhotos/Pinak.png'
import syed from '../assets/PastPhotos/PastPhotos/Syed.png'

let hard_coded_data = [
  {
    initials:'PP',
    name:'PINAK PANI DIXIT',
    role:'Core Member',
    year:'2020',
    // 2. Use the imported variables as the src value
    src: pinak
  },
  {
    initials:'AK',
    name:'AYUSH KUMAR DUBEY',
    role:'Core Member',
    year:'2020',
    src: Ayush
  },
  {
    initials:'HK',
    name:'HURMAT KHAILD',
    role:'Core Member',
    year:'2020',
    src: Hurmat
  },
  {
    initials:'MS',
    name:'MD SAIF',
    role:'Core Member',
    year:'2021',
    src: Md
  },
  {
    initials:'TK',
    name:'TUSHAR KUMAR MEHRA',
    role:'Core Member',
    year:'2022',
    src: Tushar
  },
  {
    initials:'AM',
    name:'AYMAN MAKROO',
    role:'Core Member',
    year:'2022',
    src: null
  },
  {
    initials:'SS',
    name:'SAMARVIR SINGH',
    role:'Core Member',
    year:'2023',
    src: Samarvir
  },
  {
    initials:'HA',
    name:'HAFSHA AYOUB SIDQI',
    role:'Core Member',
    year:'2023',
    src: Hafsa
  },
  
  {
    initials:'UF',
    name:'UROOJ FAYAZ',
    role:'Core Member',
    year:'20223',
    src: null
  },
  {
    initials:'SK',
    name:'SYED KASHIF JEELANI ALVI',
    role:'Core Member',
    year:'2022',
    src: syed
  }
];

const pastMembers = Array.from({ length: 10 }, (_, i) => ({
  initials: hard_coded_data[i].initials,
  name: hard_coded_data[i].name,
  role: hard_coded_data[i].role ,
  year: hard_coded_data[i].year,
  src:hard_coded_data[i].src,
}));

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, type: 'spring', stiffness: 60 },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

export default function PastMembers() {
  return (
    <section className="py-16 min-h-[80vh] font-tech">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-fuchsia-700 mb-3 drop-shadow-lg"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Past Members
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl text-center text-gray-600 mb-10 font-medium"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
      >
        Honoring our alumni and contributors
      </motion.p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-4 md:px-6">
        {pastMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col items-center text-center bg-neutral-900 border border-neutral-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg min-w-0 group overflow-hidden"
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-lg font-bold text-fuchsia-400 shadow mb-3 border border-fuchsia-900/20"
            >
              {member.src ? (
                <motion.img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                />
              ) : (
                member.initials
              )}
            </div>
            <h3 className="text-base font-semibold text-gray-100 mb-1 truncate group-hover:text-fuchsia-400 transition-colors">{member.name}</h3>
            <p className="text-xs text-gray-300 mb-1">{member.role}</p>
            <p className="text-xs text-gray-500">{member.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}