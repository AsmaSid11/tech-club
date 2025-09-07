import React from "react";
import { motion } from 'framer-motion';
 import { ChevronLeft, ChevronRight } from "lucide-react";
  import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2025-09-12T09:00:00"); // Example date

const TechFusion25 = () => {
  
  const navigate = useNavigate();
  const logos = [
"/images/gallery/1.jpeg",
"/images/gallery/1.jpeg",
"/images/gallery/1.jpeg",
"/images/gallery/1.jpeg",
"/images/gallery/1.jpeg",
"/images/gallery/1.jpeg",
"/images/gallery/1.jpeg",

  "/images/gallery/1.jpeg", // previous image 1
  "/images/gallery/2.jpeg", // previous image 2
];
   const [index, setIndex] = useState(0);
const events = [
  {
    name: "Hackathon",
    startTime: "10:00 AM",
    endTime: "04:00 PM",
    venue: "TechFusion Hall, Main Campus",
    img: "/images/events/hackathon.jpg",
  },
  {
    name: "AI Workshop",
    startTime: "09:00 AM",
    endTime: "01:00 PM",
    venue: "Innovation Center, Tech Campus",
    img: "/images/events/ai-workshop.jpg",
  },
  {
    name: "Panel Discussion: Future of AI",
    startTime: "11:00 AM",
    endTime: "01:00 PM",
    venue: "Conference Room 1, TechFusion Center",
    img: "/images/events/panel-discussion.jpg",
  },
  {
    name: "Networking Dinner",
    startTime: "07:00 PM",
    endTime: "10:00 PM",
    venue: "Sky Lounge, City Hotel",
    img: "/images/events/networking-dinner.jpg",
  },
];

 const next = () => {
   if (index < events.length - 3) setIndex(index + 1);
 };
 const prev = () => {
   if (index > 0) setIndex(index - 1);
 };
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 60 },
  }),
};
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = EVENT_DATE - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div >
<div className="relative w-full h-[650px] overflow-hidden"><div className="overflow-x-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="./images/techfusion25/video2.mp4" type="video/mp4" />
  </video>


</div>


<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<h1 className="text-9xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
  TechFusion'25
</h1>  <p className="text-2xl font-semibold text-white opacity-50 text-center">The Festival Of Next Geneation Thinkers</p>
</div>        

  <div className="absolute top-2/3 left-1/3 flex gap-3 text-2xl justify-center font-bold text-white mb-6">
           <div className="flex items-center justify-center  ">
      <div className="flex gap-6 text-white font-bold text-5xl">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="bg-white/30 text-white  px-6 py-4 rounded-lg shadow-lg">
            {timeLeft.days}
          </div>
          <span className="mt-2 text-sm tracking-widest">DAYS</span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-white/30 text-white  px-6 py-4 rounded-lg shadow-lg">
            {timeLeft.hours}
          </div>
          <span className="mt-2 text-sm tracking-widest">HRS</span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-white/30 text-white  px-6 py-4 rounded-lg shadow-lg">
            {timeLeft.minutes}
          </div>
          <span className="mt-2 text-sm tracking-widest">MIN</span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-white/30 text-white  px-6 py-4 rounded-lg shadow-lg">
            {timeLeft.seconds}
          </div>
          <span className="mt-2 text-sm tracking-widest">SEC</span>
        </div>
      </div>
    </div>
    
</div>
</div>
<div className="py-32 px-32">
  <div className="py-20 text-5xl text-center font-semibold text-white/70">
    About
  </div>

  <div className="flex gap-20">
    {/* Left Side - Text */}
   <motion.div
  className="w-3/5"
  initial={{ x: -200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  exit={{ x: -200, opacity: 0 }}
  transition={{ type: "spring", stiffness: 70, damping: 20 }}
  viewport={{ once: true, amount: 0.35 }} // <-- change here
>

      <div className="text-lg font-lg text-white/70 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        expedita enim perspiciatis nobis voluptate placeat delectus soluta
        accusantium. Enim nisi labore assumenda doloribus odit dolores, modi
        delectus quasi rem quod provident officiis, vitae ipsa, eum mollitia
        voluptatibus. Eligendi unde explicabo placeat perspiciatis nesciunt
        excepturi fuga! Animi, illum. Minus, adipisci quo?Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Accusamus saepe fuga nemo qui culpa,
        nisi harum quis ipsa repellendus illum molestiae necessitatibus? Ullam
        ad optio aliquam. Exercitationem dicta recusandae quia!
      </div>
    </motion.div>

    {/* Right Side - Images */}
    <motion.div
  className="relative w-2/5 h-[400px] rounded-2xl"
  initial={{ x: 200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  exit={{ x: 200, opacity: 0 }}
  transition={{ type: "spring", stiffness: 70, damping: 20 }}
  viewport={{ once: true, amount: 0.35 }} // <-- change here
>

      {/* Big Image */}
      <img
        src="./images/gallery/1.jpeg"
        alt="Main"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />

      {/* Small Image overlapping */}
      <img
        src="./images/gallery/2.jpeg"
        alt="Overlay"
        className="absolute bottom-[-40px] left-[-40px] w-[150px] h-[150px] object-cover rounded-lg shadow-xl border-4 border-white"
      />
    </motion.div>
  </div>
</div>

<div className="py-10">
  <div className="text-center py-10 text-5xl font-bold text-white/70">Events</div>
    
  <div className="flex justify-center">
      <div className=" flex gap-10  ">
             <div className="relative w-full">
       <button
       
         onClick={prev}
         className="absolute -left-12 top-1/2 -translate-y-1/2 bg-fuchsia-500/70 hover:bg-fuchsia-500 text-white p-2 rounded-full z-20"
       >
         <ChevronLeft className="w-6 h-6" />
       </button>
       <button
         onClick={next}
         className="absolute -right-12 top-1/2 -translate-y-1/2 bg-fuchsia-500/70 hover:bg-fuchsia-500 text-white p-2 rounded-full z-20"
       >
         <ChevronRight className="w-6 h-6" />
       </button>
       <div className="overflow-hidden">
         <motion.div
           className="flex gap-10"
           animate={{ x: `-${index * (384 + 40)}px` }} // 384 = w-96, 40 = gap-10
           transition={{ type: "spring", stiffness: 90 }}
         >
           {events.map((ev) => (
             <motion.div
               key={ev.id}
               className="w-96 flex-shrink-0 relative event-card flex flex-col bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-fuchsia-500/40 border border-fuchsia-900/30 min-h-[260px] overflow-hidden group"
               variants={cardVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.8 }}
             >
               <img className="pb-4 rounded-lg" src={ev.img} alt={ev.name} />
             <h3 className="text-2xl text-center font-semibold text-fuchsia-100 mb-2 group-hover:text-fuchsia-300 transition-colors">
                 {ev.name}
               </h3>
              <div className="flex gap-6 "> <p className=" text-gray-200 text-lg font-semibold mb-2">Start : {ev.startTime}   </p>
               <p className="text-lg font-semibold text-gray-200 mb-2">End: {ev.endTime}</p></div>
               <p className="text-lg font-semibold text-gray-200 mb-4 line-clamp-4">Venue :{ev.venue}</p>
               <a
                 href="/techfusion25/events"
                 className="inline-block mt-auto px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-300 font-medium !bg-fuchsia-900/10 hover:bg-fuchsia-600/20 hover:text-fuchsia-100 transition-all duration-200 shadow-fuchsia-900/20 shadow-sm"
               >
                 View More
               </a>
             </motion.div>
           ))}
         </motion.div>
       </div>
     </div>
</div> </div>
{/* view more events button */}
<div className="text-center pt-9"> <a 
                href=""
                className=" text-3xl text-bold inline-block mt-auto px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-300 font-medium bg-fuchsia-900/10 hover:bg-fuchsia-600/20 hover:text-fuchsia-100 transition-all duration-200 shadow-fuchsia-900/20 shadow-sm"
              >
                View More Events...
              </a></div></div>
              {/* highlights */}
<div className="py-20">
  <div className="text-center py-10 text-5xl font-bold text-white/70">Highlights</div>
  <div className="overflow-hidden w-full py-4 rounded-xl">
     <motion.div
  className="flex gap-12 [&input]:!rounded-xl"
  animate={{ x: ["0%", "-50%"] }} // -50% for seamless loop
  transition={{
    x: {
      repeat: Infinity,
      duration: 25, // adjust speed
      ease: "linear",
    },
  }}
>
  {logos.concat(logos).map((src, i) => (
    <div key={i} className="flex-shrink-0 ">
      <img src={src} alt="" className="h-72 w-96 object-contain " />
    </div>
  ))}
</motion.div>
    </div>
  </div>
 
   </div>

  );
};

export default TechFusion25;
