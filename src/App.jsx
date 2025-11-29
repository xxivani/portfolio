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
import red1 from './assets/red/Screenshot 2025-11-28 at 2.39.42 AM.png'
import red2 from './assets/red/Screenshot 2025-11-28 at 2.39.56 AM.png'


function App() {
  const [expandedProjects, setExpandedProjects] = useState([]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({}); 

  const projects = [
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
    {
      id: 2,
      title: "TABLOCK - FOCUS CHROME EXTENSION",
      year: "2024",
      description: "A productivity-focused Chrome extension designed to eliminate distractions and track focus sessions. Users can create tasks with daily time goals, select specific tabs to focus on during sessions, and get locked out of other tabs. Features progress visualization through graphs and bar charts to help users monitor their productivity patterns and maintain consistent focus habits.",
      technologies: ["JavaScript", "Chrome API", "Chart.js", "Local Storage"],
      github: "https://github.com/xxivani/tablock",
      demo: "https://chrome.google.com/webstore/tablock",
      images: [tablockImage1,tablockImage2,tablockImage3, tablockImage4, tablockImage5, tablockImage6],
      status: "COMPLETED"
    },
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
      id: 5,
      title: "RED - PDF READER MOBILE APP",
      year: "2025",
      description: "Currently developing a lightweight and efficient PDF reader application for mobile devices using React Native and Expo. Building core features including seamless PDF rendering with smooth scrolling, pinch-to-zoom navigation, and optimized page loading to handle documents of varying sizes while maintaining responsive performance. Focusing on creating an intuitive user experience with minimal interface design and fast document access. The above images showcase the UI design currently in development.",
      technologies: ["React Native", "Expo", "PDF.js", "File System"],
      //github: "https://github.com/yourusername/pdf-reader",
      //demo: "#",
      images: [red1, red2],
      status: "IN PROGRESS"
    }
  ];

  const skills = ["REACT", "REACT NATIVE", "FLASK", "POSTGRESQL", "SUPABASE", "NGINX", "EXPO", "FIREBASE", "AZURE", "CI/CD", "GITHUB ACTIONS", "TYPESCRIPT", "NODE JS", "EXPRESS", "DART/FLUTTER"];

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
            <span className="date">UPDATED: NOV.27.2025</span>
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
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      VIEW SOURCE →
                    </a>
                    {/* project.demo !== '#' && (
                      <a 
                        href={project.demo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        LIVE DEMO →
                      </a>
                    )*/}
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