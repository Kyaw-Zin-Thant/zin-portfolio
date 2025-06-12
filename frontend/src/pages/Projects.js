// File: src/pages/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects">
    <h2>Highlighted Projects</h2>

    <div className="project-grid">
      <div className="project-card">
        <h3>Workbench Platform</h3>
        <p>React + Spring Boot + AWS. Internal system used by 1,000+ automotive dealers.</p>
        <ul>
          <li>Role-based access</li>
          <li>CI/CD pipeline with GitHub Actions</li>
          <li>Deployed with Terraform + EC2</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>PTE Exam Practice</h3>
        <p>Node.js backend with AWS Transcribe for voice-based English tests.</p>
        <ul>
          <li>Realtime voice transcription</li>
          <li>MongoDB storage for scores</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>PageWerkz Writer API</h3>
        <p>PDF publishing tool integrated with Firebase and AWS Lambda.</p>
        <ul>
          <li>Teacher content upload</li>
          <li>Cloud function rendering</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
