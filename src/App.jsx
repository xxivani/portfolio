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
import unihub1 from './assets/unihub/Screenshot 2025-11-27 at 10.46.15 PM.png'

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
      description: "A comprehensive platform designed to revolutionize how students and committee members engage with university clubs and events. Students can browse and register for events, follow clubs, receive real-time notifications, and explore committee positions. Features a dedicated committee dashboard for tracking event engagement, managing job openings, and overseeing club finances with a built-in budget tracker.",
      technologies: ["React", "PostgreSQL", "Nginx", "Node.js"],
      github: "https://github.com/yourusername/unihub",
      demo: "https://unihub.example.com",
      images: [unihub1],
      status: "COMPLETED"
    },
    {
      id: 2,
      title: "TABLOCK - FOCUS CHROME EXTENSION",
      year: "2024",
      description: "A productivity-focused Chrome extension designed to eliminate distractions and track focus sessions. Users can create tasks with daily time goals, select specific tabs to focus on during sessions, and get locked out of other tabs. Features progress visualization through graphs and bar charts to help users monitor their productivity patterns and maintain consistent focus habits.",
      technologies: ["JavaScript", "Chrome API", "Chart.js", "Local Storage"],
      github: "https://github.com/yourusername/tablock",
      demo: "https://chrome.google.com/webstore/tablock",
      images: [tablockImage1,tablockImage2,tablockImage3, tablockImage4, tablockImage5, tablockImage6],
      status: "COMPLETED"
    },
    {
      id: 3,
      title: "IR HOSPITAL - INTERVENTION RADIOLOGY",
      year: "2025",
      description: "Working on a comprehensive hospital management system for IR hospital's Intervention Radiology department, streamlining patient workflow and procedural tracking. Enables doctors and staff to track patient records, verify pre-procedural requirements, manage sign-in/sign-out processes, and ensure all checklist items are completed. Designed to improve staff efficiency and maintain procedural compliance through an intuitive dashboard interface.",
      technologies: ["React", "Flask", "PostgreSQL", "REST API"],
      github: "https://github.com/yourusername/ir-hospital",
      demo: "#",
      images: [ir1],
      status: "IN PROGRESS"
    },
    {
      id: 4,
      title: "NOTES - MINIMALIST MOBILE APP",
      year: "2025",
      description: "A distraction-free, minimalist note-taking application built for mobile platforms. Users can create organized folder structures and make quick notes within them. Focuses on simplicity and effectiveness, providing a clean interface for capturing thoughts and ideas without unnecessary features or visual clutter. Perfect for users who value speed and clarity in their note-taking workflow.",
      technologies: ["React Native", "Expo", "Supabase", "AsyncStorage"],
      github: "https://github.com/yourusername/minimalist-notes",
      demo: "#",
      images: [note1,note2,note3,note4],
      status: "COMPLETED"
    },
    {
      id: 5,
      title: "RED - PDF READER MOBILE APP",
      year: "2025",
      description: "A lightweight and efficient PDF reader application for mobile devices. Built with React Native and Expo to provide seamless PDF viewing experience with smooth scrolling, zoom capabilities, and optimized rendering. Designed to handle various PDF sizes while maintaining performance and user experience.",
      technologies: ["React Native", "Expo", "PDF.js", "File System"],
      github: "https://github.com/yourusername/pdf-reader",
      demo: "#",
      images: [red1, red2],
      status: "IN PROGRESS"
    }
  ];

  const skills = ["REACT", "REACT NATIVE", "FLASK", "POSTGRESQL", "SUPABASE", "NGINX", "EXPO"];

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
            <p>FULL-STACK DEVELOPER</p>
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
                    {project.demo !== '#' && (
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
            <p className="footer-tagline">BUILDING DIGITAL EXPERIENCES</p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="https://github.com/xxivaani" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
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