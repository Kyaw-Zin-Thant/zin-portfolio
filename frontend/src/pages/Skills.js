// File: src/pages/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="skills">
    <h2>Technical Skills</h2>
    <p className="skills-intro">
      I build full-stack applications, automate infrastructure, and integrate cloud-native AI solutions.
    </p>

    <div className="skills-grid">
      <div className="skill-card fade-in-up">
        <h3>Frontend</h3>
        <ul>
          <li>React.js, Redux, TypeScript</li>
          <li>HTML5, CSS3, SASS</li>
        </ul>
      </div>

      <div className="skill-card fade-in-up">
        <h3>Backend</h3>
        <ul>
          <li>Node.js, Express</li>
          <li>Java, Spring Boot</li>
          <li>REST APIs, GraphQL</li>
        </ul>
      </div>

      <div className="skill-card fade-in-up">
        <h3>Cloud & DevOps</h3>
        <ul>
          <li>AWS EC2, Lambda, EKS, S3</li>
          <li>Docker, Kubernetes, Terraform</li>
          <li>GitHub Actions, Jenkins</li>
        </ul>
      </div>

      <div className="skill-card fade-in-up">
        <h3>Databases</h3>
        <ul>
          <li>PostgreSQL, MySQL</li>
          <li>MongoDB, DynamoDB</li>
        </ul>
      </div>

      <div className="skill-card fade-in-up">
        <h3>Tools & Testing</h3>
        <ul>
          <li>Postman, Jest, Firebase, Git</li>
          <li>New Relic, Datadog, Android Studio</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
