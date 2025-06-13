// File: src/pages/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => (
  <section className="experience">
    <h2>Professional Experience</h2>

    <div className="timeline">
      <div className="timeline-item fade-in-up">
        <h3>FPT Software – Senior Full Stack Developer</h3>
        <span className="duration">Apr 2023 – Present | Vietnam</span>
        <ul>
          <li>Developed Workbench platform for Cox Automotive using React, Java Spring Boot, AWS.</li>
          <li>Managed infrastructure as code with Terraform and improved CI/CD pipelines via GitHub Actions.</li>
        </ul>
      </div>

      <div className="timeline-item fade-in-up">
        <h3>Canal+ Myanmar – Full Stack Developer</h3>
        <span className="duration">Jun 2022 – Dec 2022 | Myanmar</span>
        <ul>
          <li>Built internal broadcast systems with Angular & .NET Core.</li>
          <li>Optimized deployment and automated workflows on AWS.</li>
        </ul>
      </div>

      <div className="timeline-item fade-in-up">
        <h3>Alchemist Academy – Senior Backend Developer</h3>
        <span className="duration">Dec 2021 – May 2022 | Remote</span>
        <ul>
          <li>Created PTE Exam scoring backend using AWS Transcribe & Node.js.</li>
          <li>Delivered real-time speech grading and MongoDB data integration.</li>
        </ul>
      </div>

      <div className="timeline-item fade-in-up">
        <h3>Amdon Consulting – Backend Developer</h3>
        <span className="duration">2018 – 2021 | Singapore (Remote)</span>
        <ul>
          <li>Built Node.js APIs for PageWerkz educational publishing system.</li>
          <li>Integrated Firebase, Stripe, and serverless workflows.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
