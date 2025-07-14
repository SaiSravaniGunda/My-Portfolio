import './App.css';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiBootstrap, SiExpress, SiPostman } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const profileImg = '/profile.jpg'; // Replace with your image
const resumeUrl = '/resume.pdf'; // Replace with your resume

function Hero() {
  return (
    <section className="hero" data-aos="fade-down">
      <div className="hero-content">
        <h1>Sai Sravani Gunda</h1>
        <h2>Full-Stack Developer</h2>
        <p>Building scalable web apps & solving real-world problems with clean, efficient code.</p>
        <div className="hero-btns">
          <a href={resumeUrl} className="btn accent" download>Download Resume</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" data-aos="fade-up">
      <div className="about-inner">
        <img src={profileImg} alt="Profile" className="about-img" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>I am an aspiring software developer with strong DSA skills and hands-on MERN stack experience. I love building web apps, exploring new technologies, and collaborating on impactful projects. Currently pursuing BTech in CSE (IoT) at KITS.</p>
          <div className="about-key-skills">
            <span>Problem Solving</span>
            <span>Teamwork</span>
            <span>Time Management</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Portfolio Tracker',
      desc: 'Real-time stock & crypto portfolio tracking with live prices, stock-related news, authentication, analytics, and interactive charts for comprehensive portfolio management.',
      stack: [FaReact, FaNodeJs, SiMongodb, SiBootstrap],
      demo: 'https://portfolio-tracker-capx.onrender.com/',
    },
    {
      title: 'InterioFlow',
      desc: 'A web application that streamlines services: clients can submit project requests for designers, vendors can sell their products, and designers can respond to project requests—all in one platform.',
      stack: [SiExpress, FaReact, SiMysql],
      demo: 'https://github.com/SaiSravaniGunda/Interior-Designing-Client-Management-System',
    },
    {
      title: 'Smart Surveillance System',
      desc: 'Motion-based surveillance using Raspberry Pi & OpenCV, alerts via Telegram/Twilio.',
      stack: [FaPython, FaDatabase],
      demo: 'https://github.com/SaiSravaniGunda/Smart-Surveillance-System',
    },
    {
      title: 'SoftSell Landing Page',
      desc: 'A modern SaaS landing page featuring a dark/light mode toggle and an integrated AI chat box for user support.',
      stack: [FaReact, FaNodeJs, SiBootstrap],
      demo: 'https://softsell-acy2.onrender.com/',
    },
    {
      title: 'Amar Gifts',
      desc: 'A full-featured gift shop web app with adding, removing, and updating gifts, admin dashboard, and responsive design. Built with the MERN stack.',
      stack: [FaReact, FaNodeJs, SiMongodb, SiBootstrap],
      demo: 'https://amar-gifts.onrender.com/',
    },
    {
      title: 'Vehicle Service Management',
      desc: 'A full-stack app for booking vehicle services, reminders, and secure authentication. Built with MongoDB, Node.js, Express, EJS, and JWT.',
      stack: [FaNodeJs, SiExpress, SiMongodb],
      demo: 'https://github.com/SaiSravaniGunda/Vehicle-Service-Management',
    },
    {
      title: 'Cargo Shipment Tracker',
      desc: 'A web application for tracking cargo shipments: admins can update shipment locations, view them on maps, filter by status (in transit, delivered), and update shipment statuses in real time.',
      stack: [FaReact, FaNodeJs, SiMongodb],
      demo: 'https://github.com/SaiSravaniGunda/Cargo-Shipment-Tracker',
    },
    {
      title: 'Emotion Detection from Text',
      desc: 'A FastAPI-powered backend that uses a fine-tuned DistilBERT model to detect emotions from text. It supports multi-label classification with 28 emotion categories, based on the GoEmotions dataset from Google.',
      stack: [FaPython],
      demo: 'https://github.com/SaiSravaniGunda/Detect-Emotions-From-Text',
    },
  ];
  return (
    <section className="projects section" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx} data-aos="zoom-in-up">
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="project-stack">
                {proj.stack.map((Icon, i) => <span key={i} className="project-icon"><Icon /></span>)}
              </div>
              <div className="project-links">
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">Link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const frontend = [
    { name: 'React', icon: FaReact },
    { name: 'Vite' },
    { name: 'JavaScript' },
  ];
  const backend = [
    { name: 'Express', icon: SiExpress },
    { name: 'Spring Boot' },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
  ];
  const tools = [
    { name: 'Git', icon: FaGitAlt },
    { name: 'Postman', icon: SiPostman },
  ];
  return (
    <section className="skills section" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skills-categories">
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-list">
            {frontend.map((item, i) => (
              <span key={i}>{item.icon ? <item.icon /> : null} {item.name}</span>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-list">
            {backend.map((item, i) => (
              <span key={i}>{item.icon ? <item.icon /> : null} {item.name}</span>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Tools</h3>
          <div className="skills-list">
            {tools.map((item, i) => (
              <span key={i}>{item.icon ? <item.icon /> : null} {item.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const exp = [
    {
      role: 'Full Stack Intern',
      company: 'Innovate Intern',
      date: 'Jun 2024 - Sept 2024',
      desc: 'Built a full-stack vehicle service management app with booking, reminders, and secure authentication (MongoDB, Node.js, Express, EJS, JWT).',
    },
    {
      role: 'Backend Intern',
      company: 'CourseVita',
      date: 'Jun 2025 - Ongoing',
      desc: 'Building backend APIs and managing database integration for a videographer booking platform.',
    },
  ];
  return (
    <section className="experience section" data-aos="fade-up">
      <h2>Experience</h2>
      <div className="exp-timeline">
        {exp.map((item, idx) => (
          <div className="exp-card" key={idx} data-aos="fade-right">
            <div className="exp-header">
              <h3>{item.role}</h3>
              <span className="exp-company">@ {item.company}</span>
              <span className="exp-date">{item.date}</span>
            </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact" data-aos="fade-up">
      <h2>Contact</h2>
      <div className="contact-actions">
        <a
          href="https://www.linkedin.com/in/sai-sravani-gunda-295940294"
          target="_blank"
          rel="noopener noreferrer"
          className="btn accent"
        >
          Connect on LinkedIn
        </a>
        <a
          href="mailto:saisravanigunda@gmail.com"
          className="btn"
        >
          Email - saisravanigunda@gmail.com
        </a>
      </div>
      <div className="contact-socials">
        <a href="mailto:saisravanigunda@gmail.com" title="Email"><FaEnvelope /></a>
        <a href="https://github.com/SaiSravaniGunda" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sai-sravani-gunda-295940294" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="App dark-bg">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer className="footer">&copy; {new Date().getFullYear()} Sai Sravani Gunda</footer>
    </div>
  );
}

export default App;
