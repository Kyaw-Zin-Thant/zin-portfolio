// File: src/pages/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => (
  <section className="experience">
    <h2>Work Experience</h2>

    <div className="job">
      <h3>FPT Software – Senior Full Stack Developer</h3>
      <p className="duration">Apr 2023 – Present | Vietnam</p>
      <ul>
        <li>Led development of the Workbench platform using React, Spring Boot, and AWS.</li>
        <li>Integrated OKTA, Terraform, GitHub Actions, and EC2 for CI/CD.</li>
        <li>Collaborated with global teams, contributed to cloud architecture decisions.</li>
      </ul>
    </div>

    <div className="job">
      <h3>Canal+ Myanmar – Senior Full Stack Developer</h3>
      <p className="duration">Jun 2022 – Dec 2022 | Myanmar</p>
      <ul>
        <li>Built internal tools with Angular, .NET Core, PostgreSQL, and Node.js.</li>
        <li>Automated deployments and improved DevOps practices with AWS.</li>
      </ul>
    </div>

    <div className="job">
      <h3>Alchemist Academy – Senior Backend Developer</h3>
      <p className="duration">Dec 2021 – May 2022 | Remote</p>
      <ul>
        <li>Created backend for a PTE English test app using AWS Transcribe.</li>
        <li>Built scalable APIs and integrated MongoDB and AWS services.</li>
      </ul>
    </div>

    <div className="job">
      <h3>Amdon Consulting – Senior Backend Developer</h3>
      <p className="duration">Oct 2018 – Nov 2021 | Singapore / Remote</p>
      <ul>
        <li>Developed core features for ClassWerkz, PageWerkz using Node.js & Firebase.</li>
        <li>Managed deployment pipelines and implemented Stripe payment system.</li>
      </ul>
    </div>

    <div className="job">
      <h3>ICT Star Group – Full Stack Developer</h3>
      <p className="duration">Oct 2017 – Sep 2018 | Myanmar</p>
      <ul>
        <li>Developed Copper Line and GPS-based Vehicle Tracking system in Java.</li>
        <li>Built responsive Android apps and managed backend MySQL services.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
