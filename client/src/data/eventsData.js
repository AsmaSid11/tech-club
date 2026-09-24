/**
 * ==============================================================================
 * TECHNOLOGY CLUB - EVENTS & CONTENT CONFIGURATION
 * ==============================================================================
 * You have full control over all events, details, images, and videos here!
 *
 * HOW TO ADD A NEW EVENT:
 * ------------------------------------------------------------------------------
 * Simply add an object into `upcomingEvents` below:
 *
 * {
 *   id: 'my-new-hackathon',
 *   title: 'Spring AI Hackathon 2026',
 *   status: 'Registrations Open', // or 'Upcoming', 'Closing Soon'
 *   date: 'April 20-21, 2026',
 *   time: '10:00 AM - 6:00 PM IST',
 *   venue: 'Main Auditorium & CS Labs',
 *   poster: '/images/posters/CadAThon.webp', // or place any image in public/images/
 *   description: 'A 24-hour sprint to build agentic AI systems.',
 *   registrationLink: 'https://forms.gle/your-form-url', // Google Form or external link
 *   videoUrl: 'https://www.youtube.com/watch?v=...', // optional video embed or link
 *   tags: ['AI / ML', 'Competitive', 'All Branches']
 * }
 *
 * IF `upcomingEvents` IS EMPTY (`[]`), the website will cleanly display
 * the "Between active cycles / Next season soon" notice.
 * ==============================================================================
 */

export const upcomingEvents = [
  {
    id: 'Tech n Chai',
    title: 'Tech n Chai 2.0 – Bigger Conversations, More Fun',
    status: 'Registration Open',
    date: '25th September 2026',
    time: '4:00 PM – 6:00 PM IST',
    venue: '1st Floor, Conference Room, New Guest House',
    poster: '/images/posters/TechandChai Poster.png',
    description: 'Tech n Chai is back! After an amazing first edition, we’re bringing it back – bigger conversations, more tech, more fun, and of course, more chai!',
    registrationLink: 'https://technchai.hellofaizan.site/',
    driveLink: ''
  },
  {
    id: 'TechSharkTank',
    title: 'Tech Shark Tank',
    status: 'Coming Soon',
    date: '9th October 2026',
    time: 'TBA',
    venue: 'NIT Srinagar',
    poster: '/images/posters/coming-soon-banner-design-template-vector.jpg',
    description: 'A fun pitching event where participants present creative, unusual, or humorous technology-based ideas to judges. The more innovative and entertaining the idea, the better.',
    registrationLink: '',
    driveLink: '',
    organizer: 'Technology Club'
  },
  {
    id: 'PromptWars',
    title: 'Prompt Wars',
    status: 'Coming Soon',
    date: '23rd October 2026',
    time: 'TBA',
    venue: 'NIT Srinagar',
    poster: '/images/posters/coming-soon-banner-design-template-vector.jpg',
    description: 'A competitive prompt engineering event where participants craft creative and effective prompts to generate outputs and solve challenges.',
    registrationLink: '',
    driveLink: '',
    organizer: 'Technology Club'
  },
  {
    id: 'FundamentalsAI',
    title: 'Fundamentals of AI: From Scratch to AI Agents',
    status: 'Coming Soon',
    date: '24–25th October 2026',
    time: 'TBA',
    venue: 'NIT Srinagar',
    poster: '/images/posters/coming-soon-banner-design-template-vector.jpg',
    description: 'A beginner-friendly workshop introducing Artificial Intelligence, covering fundamentals of AI and ML, progressing to Deep Learning, Generative AI, LLMs, RAG, and AI Agents.',
    registrationLink: '',
    driveLink: '',
    organizer: 'Robonox Student Chapter'
  },
  {
    id: 'BreakTheCode',
    title: 'Break the Code',
    status: 'Coming Soon',
    date: '6th November 2026',
    time: 'TBA',
    venue: 'NIT Srinagar',
    poster: '/images/posters/coming-soon-banner-design-template-vector.jpg',
    description: 'A hands-on coding challenge where participants debug and solve broken code snippets under time pressure.',
    registrationLink: '',
    driveLink: '',
    organizer: 'Technology Club'
  },
  {
    id: 'CloudComputingAzure',
    title: 'Fundamentals of Cloud Computing with Microsoft Azure',
    status: 'Coming Soon',
    date: 'TBA',
    time: 'TBA',
    venue: 'NIT Srinagar',
    poster: '/images/posters/coming-soon-banner-design-template-vector.jpg',
    description: 'A workshop introducing cloud computing concepts with hands-on experience using Microsoft Azure services.',
    registrationLink: '',
    driveLink: '',
    organizer: 'Robonox Student Chapter'
  }

];

export const weeklySeries = [
  {
    num: '01',
    title: 'Meetups & Demos',
    tag: 'Community',
    blurb: 'Casual weekly hangouts where builders ship projects, debug live, and exchange insights across disciplines.',
    schedule: 'Weekly · Lab 3 / Tech Hub',
  },
  {
    num: '02',
    title: 'Algorithmic Challenges',
    tag: 'Competition',
    blurb: 'Fast-paced coding contests, LeetCode / Codeforces sprints, and problem-solving puzzles to keep instincts sharp.',
    schedule: 'Bi-weekly · Online & Campus',
  },
  {
    num: '03',
    title: 'Tech Talks & Teardowns',
    tag: 'Knowledge',
    blurb: 'Deep-dive sessions on modern developer tools, distributed systems, open-source AI, and system architectures.',
    schedule: 'Monthly · Main Auditorium',
  },
];

export const pastEditions = [
  {
    num: '01',
    title: 'TechVaganza',
    type: 'Annual Inter-College Fest',
    highlight: true,
    description:
      'The premier two-day inter-college technology festival uniting students across Jammu & Kashmir. Features high-intensity hackathons, robotics challenges, guest technical keynotes, and cross-discipline competitive tracks.',
    editions: ['TechVaganza 2024'],
    driveLink: 'https://drive.google.com/drive/folders/1CiJmBmCJD0b_Ns36vb2VOCT4JkfkHW49',
  },
  {
    num: '02',
    title: 'TechFusion',
    type: 'Flagship Intra-College Fest',
    highlight: true,
    description:
      'NIT Srinagar’s flagship internal festival celebrating hands-on engineering, creative software, and embedded hardware. Brings together departments for collaborative project exhibits and peer-reviewed competitions.',
    editions: ['TechFusion 2025', 'TechFusion 2024'],
    driveLink: 'https://photos.google.com/share/AF1QipNrnHkhi1wB7iyqLRAavlGvPnbUNOMPVrDYtTl20Xb_a0yeh0cd9xMuyQ0NPkvEog?key=VEZmYUFiMUoydjlvVjVwR2szRC1rMHJOdk5PLVZ3&pli=1',
  },
  {
    num: '03',
    title: 'Cursor Hackathon Kashmir',
    type: 'Global Partner Hackathon',
    highlight: false,
    description:
      'Kashmir’s premier AI hackathon hosted at NIT Srinagar in collaboration with Cursor Ambassador Mohtasham Madani. Over 125+ teams engineered real-world solutions across healthcare, education, and agriculture evaluated by tech leaders from NVIDIA, Oracle, and LinkedIn.',
    editions: ['Cursor Hackathon 2026'],
    driveLink: 'https://drive.google.com/drive/folders/10mLsRjXnt4HztnDDmu8Be8HRJ0tuJ6lx',
  },
  {
    num: '04',
    title: 'CodeDay Kashmir',
    type: 'Student Hackathon Series',
    highlight: false,
    description:
      'A non-stop 24-hour hackathon organized with Team CodeDay targeting school and early undergrad developers. From introductory workshops in Git and modern models to overnight prototyping, creating an on-ramp for emerging builders.',
    editions: ['CodeDay 2026', 'CodeDay 2025'],
    driveLink: 'https://drive.google.com/drive/folders/1CiJmBmCJD0b_Ns36vb2VOCT4JkfkHW49',
  },
  {
    num: '05',
    title: 'Buildify Kashmir',
    type: 'Product Execution Sprint',
    highlight: false,
    description:
      'A 48-hour execution sprint organized by Buildify and Technology Club centered around "Making Business Future-Proof." Teams prioritized production-ready software over slides, delivering tangible applications like Curtain AI and Hunarmand.',
    editions: ['Buildify 2026'],
    driveLink: 'https://drive.google.com/drive/folders/1CiJmBmCJD0b_Ns36vb2VOCT4JkfkHW49',
  },
  {
    num: '06',
    title: 'Weekly Tech Sessions',
    type: 'Semester Continuum',
    highlight: false,
    description:
      'The weekly heartbeat of the club: algorithmic problem-solving, open-source sprints, and peer-to-peer workshops. The foundation through which members build technical confidence and cross-domain teams.',
    editions: ['Weekly Cycles · 2024–2026'],
    driveLink: 'https://drive.google.com/drive/folders/1CiJmBmCJD0b_Ns36vb2VOCT4JkfkHW49',
  },
];
