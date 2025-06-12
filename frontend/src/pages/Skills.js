// File: src/pages/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="skills">
    <h2>Tech Stack & Expertise</h2>
    <p className="skills-intro">
      I build complete, scalable systems — from front-end UI to cloud infrastructure.
    </p>

    <div className="skills-grid">
      <div className="skill-card">
        <h4>Frontend</h4>
        <ul>
          <li>React.js, Redux</li>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>HTML5, CSS3, SASS, Responsive Design</li>
        </ul>
      </div>
      <div className="skill-card">
        <h4>Backend</h4>
        <ul>
          <li>Node.js, Express.js</li>
          <li>Java, Spring Boot</li>
          <li>RESTful APIs, Microservices</li>
        </ul>
      </div>
      <div className="skill-card">
        <h4>Cloud & DevOps</h4>
        <ul>
          <li>AWS EC2, Lambda, S3, RDS, EKS</li>
          <li>Terraform, Docker, Kubernetes</li>
          <li>GitHub Actions, Jenkins, CI/CD</li>
        </ul>
      </div>
      <div className="skill-card">
        <h4>Databases</h4>
        <ul>
          <li>MySQL, PostgreSQL</li>
          <li>MongoDB, DynamoDB</li>
        </ul>
      </div>
      <div className="skill-card">
        <h4>Monitoring & Tools</h4>
        <ul>
          <li>New Relic, Datadog, Firebase</li>
          <li>Postman, Git, Android (Java)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
