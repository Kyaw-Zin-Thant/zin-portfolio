// File: src/pages/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects">
    <h2>My Projects</h2>
    <p className="projects-intro">Here are some of the impactful apps, APIs, and systems I’ve built and deployed.</p>

    <div className="projects-grid">
      <div className="project-card fade-in-up">
        <h3>Workbench Platform</h3>
        <p>Dealer platform for Cox Automotive. Managed CI/CD, microservices, AWS infrastructure.</p>
        <span className="tags">React • Java • AWS • Terraform</span>
        <a href="https://github.com/kyawzinucsm89/workbench-demo" target="_blank" rel="noreferrer">GitHub →</a>
      </div>

      <div className="project-card fade-in-up">
        <h3>PTE Exam Practice</h3>
        <p>AI-powered English test backend with AWS Transcribe voice scoring and MongoDB.</p>
        <span className="tags">Node.js • MongoDB • Express • AWS</span>
      </div>

      <div className="project-card fade-in-up">
        <h3>PageWerkz API</h3>
        <p>Cloud function API for publishing education content and processing Stripe payments.</p>
        <span className="tags">Node.js • Firebase • Stripe • Serverless</span>
      </div>

      <div className="project-card fade-in-up">
        <h3>Simple Trading Bot</h3>
        <p>Crypto bot built with CCXT library that executes futures trades with leverage.</p>
        <span className="tags">Node.js • Binance API • Express</span>
      </div>
    </div>
  </section>
);

export default Projects;
