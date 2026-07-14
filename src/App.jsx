import { useState } from 'react';
import './App.css';
import tablockImage1 from './assets/tablock/Screenshot 2025-11-27 at 11.52.16 PM.png';
import tablockImage2 from './assets/tablock/Screenshot 2025-11-27 at 11.53.00 PM.png'
import tablockImage3 from './assets/tablock/Screenshot 2025-11-27 at 11.53.11 PM.png'
import tablockImage4 from './assets/tablock/Screenshot 2025-11-27 at 11.53.37 PM.png'
import tablockImage5 from './assets/tablock/Screenshot 2025-11-27 at 11.54.15 PM.png'
import tablockImage6 from './assets/tablock/Screenshot 2025-11-27 at 11.58.21 PM.png'

// for notes app
import note1 from './assets/notes app/Screenshot 2025-11-28 at 12.47.18 AM.png'
import note2 from './assets/notes app/WhatsApp Image 2025-11-28 at 12.45.33 AM (1).jpeg'
import note3 from './assets/notes app/WhatsApp Image 2025-11-28 at 12.45.33 AM (2).jpeg'
import note4 from './assets/notes app/WhatsApp Image 2025-11-28 at 12.45.33 AM.jpeg'

// for unihub
import unihub1 from './assets/unihub/frontpage.png'
import unihub2 from './assets/unihub/abtme.png'
import unihub3 from './assets/unihub/events.png'
import unihub4 from './assets/unihub/newshome.png'
import unihub5 from './assets/unihub/clubs.png'
import unihub6 from './assets/unihub/news.png'
import unihub7 from './assets/unihub/bt.png'


// ir
import ir1 from './assets/ir/Screenshot 2025-11-28 at 2.37.27 AM.png'

//red
import red1 from './assets/red/home.jpeg'
import red2 from './assets/red/nav.jpeg'
import red3 from './assets/red/reader.jpeg'
import red4 from './assets/red/theme.jpeg'


//gdg
import gdg1 from './assets/gdg/1.png'
import gdg2 from './assets/gdg/2.png'
import gdg3 from './assets/gdg/3.png'
import gdg4 from './assets/gdg/4.png'
import gdg5 from './assets/gdg/5.png'
import gdg6 from './assets/gdg/6.png'
import gdg7 from './assets/gdg/7.png'
import gdg8 from './assets/gdg/8.png'
import gdg9 from './assets/gdg/9.png'
import gdg10 from './assets/gdg/10.png'
import gdg11 from './assets/gdg/11.png'
import gdg12 from './assets/gdg/12.png'

// frame
import frame1 from './assets/frame/frame.png'

// viniles
import viniles1 from './assets/viniles/viniles.png'



function App() {
  const [expandedProjects, setExpandedProjects] = useState([1, 3, 4, 5, 6, 7, 8]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({}); 

  const projects = [
    {
      id: 8,
      title: "VINILES - DESKTOP MUSIC PLAYER",
      year: "2026",
      description: "A cross-platform desktop music player for Mac and Windows, sold as a one-time purchase on Gumroad. Import single songs or entire playlists straight from YouTube, get synced karaoke-style lyrics, and manage a real local library — no subscription, no algorithm. Built with Electron and React, with a SQLite-backed library, yt-dlp and ffmpeg powering imports, five hand-tuned visual themes, native macOS Now Playing integration, and a fully code-signed, cross-platform auto-update pipeline.",
      keyFeatures: [
        "Local music library with full metadata and album art",
        "Import single songs or entire playlists straight from YouTube",
        "Synced, karaoke-style lyrics powered by LRCLIB",
        "Five hand-tuned visual themes, from Espresso to Phosphor",
        "Native macOS Now Playing & Control Center integration",
        "Signed, cross-platform auto-updates for Mac and Windows"
      ],
      technologies: ["Electron", "React", "SQLite", "yt-dlp", "ffmpeg", "electron-updater"],
      demo: "https://viniles.netlify.app",
      images: [viniles1],
      status: "COMPLETED"
    },
    {
      id: 5,
      title: "Bookmarked - E-Book Reader",
      year: "2025",
      description: "A feature-rich Android e-book reader built with Kotlin and Jetpack Compose, supporting both PDF and EPUB formats with extensive customization options. Features an elegant dark theme with sophisticated typography and professional aesthetics for a premium reading experience.",
      technologies: ["Kotlin", "Jetpack Compose", "Room Database", "Readium SDK", "PDFBox", "Firebase Analytics"],
      keyFeatures: [
        "EPUB & PDF support with optimized lazy loading",
        "Six reading themes with customizable fonts and sizes",
        "Chapter-based navigation with gesture controls",
        "Full-text search with highlighted results",
        "Bookmarking system and progress tracking",
        "Auto-scroll with adjustable speed settings",
        "Organized shelf system (Want to Read, Reading, Done)",
        "Automatic metadata and cover extraction"
      ],
      demo:"https://bookmarked-reader.vercel.app",
      images: [red1, red2, red3, red4],
      status: "IN PROGRESS"
    },
    {
      id: 7,
      title: "FRAME - E-COMMERCE CLOTHING STORE",
      year: "2025",
      description: "A full e-commerce storefront for a clothing brand, built end to end: a browsable product catalog, persistent cart, and a checkout flow designed to minimize drop-off. Built with React on the frontend and Supabase for data, auth, and storage, with Stripe handling payments. Deployed on Vercel.",
      technologies: ["React", "Supabase", "Stripe", "Vercel"],
      demo: "https://frame-one-orcin.vercel.app",
      images: [frame1],
      status: "IN PROGRESS"
    },
    {
      id: 1,
      title: "UNIHUB - UNIVERSITY PLATFORM",
      year: "2024",
      description: "A comprehensive university management platform enabling students to browse and register for events, follow clubs, receive real-time notifications, and explore committee positions. Committee members access dedicated dashboards for tracking event engagement, managing job openings, and monitoring club finances through an integrated budget tracker. Built with React and PostgreSQL, deployed on Azure VM with Nginx reverse proxy, and maintained through automated CI/CD pipeline using GitHub Actions for continuous testing and deployment.",
      technologies: ["React", "PostgreSQL", "Nginx", "Node.js"],
      github: "https://github.com/xxivani/unihub",
      demo: "https://unihub.example.com",
      images: [unihub1,unihub2,unihub3,unihub4, unihub5, unihub6, unihub7],
      status: "COMPLETED"
    },
    // {
    //   id: 2,
    //   title: "TABLOCK - FOCUS CHROME EXTENSION",
    //   year: "2024",
    //   description: "A productivity-focused Chrome extension designed to eliminate distractions and track focus sessions. Users can create tasks with daily time goals, select specific tabs to focus on during sessions, and get locked out of other tabs. Features progress visualization through graphs and bar charts to help users monitor their productivity patterns and maintain consistent focus habits.",
    //   technologies: ["JavaScript", "Chrome API", "Chart.js", "Local Storage"],
    //   github: "https://github.com/xxivani/tablock",
    //   demo: "https://chrome.google.com/webstore/tablock",
    //   images: [tablockImage1,tablockImage2,tablockImage3, tablockImage4, tablockImage5, tablockImage6],
    //   status: "COMPLETED"
    // },
    {
      id: 3,
      title: "IR HOSPITAL - INTERVENTION RADIOLOGY",
      year: "2025",
      description: "Developing a comprehensive hospital management system for the Interventional Radiology department at IR Hospital to digitize and streamline the complete patient workflow from admission to discharge. The web application enables physicians and administrative staff to efficiently manage patient records, verify pre-procedural clinical requirements (lab results, consent forms, medication protocols), track equipment preparation, and oversee sign-in/sign-out protocols through an intuitive role-based dashboard. Built with React and Flask, the system automates checklist validation and sends scheduled reminders, reducing manual coordination overhead while ensuring procedural compliance and improving patient care coordination. The images above showcase the current development progress of the application.",
      technologies: ["React", "Flask", "PostgreSQL", "REST API"],
      //github: "https://github.com/yourusername/ir-hospital",
      //demo: "#",
      images: [ir1],
      status: "IN PROGRESS"
    },
    {
      id: 4,
      title: "NOTES - MINIMALIST MOBILE APP",
      year: "2025",
      description: "A distraction-free, minimalist note-taking application built for mobile platforms. Users can create organized folder structures and make quick notes within them. Focuses on simplicity and effectiveness, providing a clean interface for capturing thoughts and ideas without unnecessary features or visual clutter. Perfect for users who value speed and clarity in their note-taking workflow.",
      technologies: ["React Native", "Expo", "Supabase", "AsyncStorage"],
      github: "https://github.com/xxivani/notes_rn",
      demo: "#",
      images: [note1,note2,note3,note4],
      status: "COMPLETED"
    },
    {
    id: 6,
    title: "PRODUCTIVE - AI STUDENT PRODUCTIVITY PLATFORM",
    year: "2025",
    description: "A comprehensive AI-powered educational productivity platform developed for the ASUS Copilot Challenge 2026, designed to transform how students manage their academic workload through deep Microsoft ecosystem integration and intelligent automation. Built with React TypeScript and Python Flask, the platform combines assignment management, intelligent study planning, and seamless Microsoft tool integration into a unified interface. Features a modern dark-themed UI with Tailwind CSS using a custom 'Odyssey' color palette, deployed on Vercel (frontend) and Render (backend) with OAuth 2.0 authentication via MSAL for secure Microsoft Graph API access. Positioned as a Microsoft-native educational solution targeting universities and schools with a B2B SaaS business model.",
    keyFeatures: [
      "Assignment Dashboard: Centralized view that automatically syncs deadlines from Microsoft Outlook Calendar with proactive reminders and workload visualization",
      "AI Study Planner: Generates personalized study schedules using Azure OpenAI based on assignment complexity, deadlines, and learning patterns, breaking tasks into manageable daily goals",
      "Spaced Repetition System: Tracks review sessions with interactive GitHub-style heatmap visualization using Recharts to optimize long-term retention and learning consistency",
      "Note Organization: Seamless integration with Microsoft OneNote for creating, syncing, and searching notes across devices with proper categorization",
      "Task Management: Direct connection to Microsoft To Do for synchronizing academic tasks with existing productivity workflows",
      "AI Chatbot: Context-aware study assistance providing academic support, answering questions, and offering motivational guidance throughout study sessions",
      "Professor Dashboard: Course management tools for educators including student engagement tracking, assignment completion monitoring, and AI-powered quiz generation",
      "Microsoft Teams Integration: Facilitates seamless communication between students and instructors directly within the platform",
      "Authentication System: Secure OAuth 2.0 implementation using MSAL with redirect-based flows for reliable Microsoft Graph API access",
      "Modern UI/UX: Clean, distraction-free interface inspired by Obsidian with collapsible sidebar, proper contrast ratios, and responsive design using Radix UI components"
    ],
    technologies: ["React", "TypeScript", "Vite", "Python", "Flask", "SQLite", "Tailwind CSS", "Microsoft Graph API", "Azure OpenAI", "MSAL", "OAuth 2.0", "Zustand", "Recharts", "Radix UI", "Lucide React", "Vercel", "Render", "REST API"],
    github: "https://github.com/slkarhmn/gdg-hackathon",
    // demo: "https://productive.example.com",
    images: [gdg1, gdg2,gdg3,gdg4, gdg5, gdg6, gdg7, gdg8, gdg9, gdg10, gdg11, gdg12], // Add your screenshot images here
    status: "COMPLETED"
  }
  ];

  const skills = ["REACT", "REACT NATIVE", "FLASK", "POSTGRESQL", "SUPABASE", "NGINX", "EXPO", "FIREBASE", "AZURE", "CI/CD", "GITHUB ACTIONS", "TYPESCRIPT", "NODE JS", "EXPRESS", "DART/FLUTTER", "ELECTRON", "SQLITE", "STRIPE"];

  const toggleProject = (id) => {
    setExpandedProjects(prev => 
      prev.includes(id) 
        ? prev.filter(projectId => projectId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="portfolio">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1 className="logo">PORTFOLIO</h1>
          <div className="header-info">
            <span className="status-badge">AVAILABLE FOR WORK</span>
            <span className="date">UPDATED: JUL.15.2025</span>
          </div>
        </header>

        {/* Info Section */}
        <div className="info-section">
          <div className="info-left">
            <h3>DEVELOPER</h3>
            <p>SHIVANI SN</p>
            <p>FULL-STACK & MOBILE DEVELOPER</p>
            <p>DUBAI, UAE</p>
          </div>
          <div className="info-right">
            <h3>CONTACT</h3>
            <p>snshivaani@gmail.com</p>
          </div>
        </div>


        {/* Skills Bar */}
        <div className="skills-bar">
          <span className="skills-label">CORE SKILLS //</span>
          <div className="skills-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section">
          <div className="projects-header">
            <span>PROJECT DESCRIPTION</span>
            <span className="projects-header-right">
              <span className="year-label">YEAR</span>
              <span className="status-label-header">STATUS</span>
              <span className="expand-label">VIEW</span>
            </span>
          </div>

          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div 
                className="project-title-row"
                onClick={() => toggleProject(project.id)}
              >
                <div className="project-title-left">
                  <span className="project-title">{project.title}</span>
                </div>
                <div className="project-title-right">
                  <span className="project-year">{project.year}</span>
                  <span className={`status-tag ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                  <span className="expand-icon">
                    {expandedProjects.includes(project.id) ? '−' : '+'}
                  </span>
                </div>
              </div>
              
              {expandedProjects.includes(project.id) && (
                <div className="project-details">
                  {/* Project Image */}
                  {project.images && project.images.length > 0 && (
                    <div className="project-carousel">
                      <img 
                        src={project.images[currentImageIndexes[project.id] || 0]} 
                        alt={`${project.title} screenshot`}
                        className="project-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      {project.images.length > 1 && (
                        <div className="carousel-controls">
                          <button 
                            className="carousel-btn"
                            onClick={() => {
                              const currentIndex = currentImageIndexes[project.id] || 0;
                              const newIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
                              setCurrentImageIndexes({...currentImageIndexes, [project.id]: newIndex});
                            }}
                          >
                            ←
                          </button>
                          <span className="carousel-indicator">
                            {(currentImageIndexes[project.id] || 0) + 1} / {project.images.length}
                          </span>
                          <button 
                            className="carousel-btn"
                            onClick={() => {
                              const currentIndex = currentImageIndexes[project.id] || 0;
                              const newIndex = currentIndex === project.images.length - 1 ? 0 : currentIndex + 1;
                              setCurrentImageIndexes({...currentImageIndexes, [project.id]: newIndex});
                            }}
                          >
                            →
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="detail-row">
                    <span className="detail-label">DESCRIPTION:</span>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">STACK:</span>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-actions">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        VIEW SOURCE →
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a 
                        href={project.demo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        LIVE DEMO →
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-left">
            <div className="footer-logo">PORTFOLIO</div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="https://github.com/xxivaani" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a href="https://www.linkedin.com/in/shivani-sn-807882391" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href="mailto:snshivaani@gmail.com">EMAIL</a>
              <a href="#">RESUME</a>
            </div>
            <p className="footer-copyright">© 2025 ALL RIGHTS RESERVED</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;