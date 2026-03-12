import Dreamwaytours from "../images/projects/dreamwaytours.png"
import PremiumCuts from "../images/projects/premiumcuts.png"
import GlamourHub from "../images/projects/glamourhub.png";
import KmrmTicketing from "../images/projects/kmrm-ticketing-app.png" 


export const TECH_FILTER_OPTIONS = [
  "All",
  "React",
  "Django",
  "Vue.js",
  "GraphQL",
  "Python",
  "Laravel",
  "PostgreSQL",
];

const PROJECTS = [
  {
    title: "DreamWay Tours",
    desc: "A travel website crafted with utmost creativity and precision, showcasing a blend of stunning design and seamless functionality. Built with React Js, it offers users an immersive experience to explore and book their dream vacations effortlessly.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Iamvinnie254/DreamWayTours",
    demo: "https://dreamwaytours.netlify.app/",
    gradient: "from-indigo-500 to-purple-600",
    icon: Dreamwaytours,
  },
  {
    title: "PremiumCuts Kinyozi",
    desc: "A dynamic barbershop website built with Vue.js, offering a sleek and modern design. It provides users with an intuitive interface to explore services, book appointments, and stay updated on the latest trends in men's grooming.",
    tags: ["Vue.js", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Iamvinnie254/premium_cuts_official",
    demo: "https://premiumcutskenya.netlify.app/",
    gradient: "from-pink-500 to-rose-600",
    icon: PremiumCuts,
  },
  {
    title: "GlamourHub",
    desc: "A beauty salon website built with React Js, offering a seamless user experience for booking appointments and exploring services. The platform features a sleek design and robust functionality, making it easy for users to access beauty treatments and stay updated on the latest trends in the industry.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Iamvinnie254/_glamour_hub_",
    demo: "https://glamourhubkenya.netlify.app/",
    gradient: "from-pink-500 to-rose-600",
    icon: GlamourHub,
  },
  {
    title: "Concert Ticketing App",
    desc: "A ticketing application built with Django, designed to streamline event management and ticket sales. The platform offers a user-friendly interface for event organizers to create and manage events, while providing attendees with a seamless experience for purchasing tickets and accessing event information.",
    tags: ["Django", "Python", "React", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Iamvinnie254/tujenge_kmrm_concert_ticketing",
    demo: "/",
    gradient: "from-blue-500 to-cyan-600",
    icon: KmrmTicketing,
  },
];

export default PROJECTS;
