// File: src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => (
  <section className="home">
    <img className="profile" src="/assets/profile.jpg" alt="Kyaw Zin Thant" />
    <h1>Kyaw Zin Thant</h1>
    <h2>Senior Full Stack Developer</h2>
    <blockquote>“Driven to deliver scalable, reliable, and elegant solutions.”</blockquote>

    <p>I’m a Full Stack Developer with over 6 years of experience in Java, Node.js, React, and AWS. Based in Can Tho, Vietnam, I’ve worked on enterprise-grade systems across Myanmar, Singapore, and Vietnam.</p>

    <ul className="contact">
      <li>📍 Can Tho, Vietnam</li>
      <li>📧 <a href="mailto:kyawzinucsm89@gmail.com">kyawzinucsm89@gmail.com</a></li>
      <li>🔗 <a href="https://github.com/kyawzinucsm89" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://linkedin.com/in/kyawzinthant" target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li>📄 <a href="/assets/KyawZinThant_Resume.pdf" download>Download Resume</a></li>
    </ul>

    <section className="featured">
      <h3>Featured Skills</h3>
      <ul>
        <li>React, Node.js, Spring Boot, REST API</li>
        <li>AWS: EC2, Lambda, EKS, S3, RDS</li>
        <li>CI/CD: GitHub Actions, Jenkins, Terraform</li>
        <li>Clean Code, Agile, Pair Programming</li>
      </ul>
    </section>

    <section className="certifications">
      <h3>Certifications</h3>
      <ul>
        <li>AWS Certified Developer – Associate</li>
        <li>AWS Certified Data Engineer – Associate</li>
        <li>B.Sc. in Computer Science, UCSM</li>
      </ul>
    </section>

    <section className="values">
      <h3>Core Values</h3>
      <ul>
        <li><strong>Craftsmanship:</strong> Clean, maintainable code</li>
        <li><strong>Communication:</strong> Fluent in English, Burmese, and Vietnamese context</li>
        <li><strong>Consistency:</strong> Delivering reliable solutions across platforms</li>
        <li><strong>Curiosity:</strong> Always learning, from AI to DevOps</li>
      </ul>
    </section>
  </section>
);

export default Home;
