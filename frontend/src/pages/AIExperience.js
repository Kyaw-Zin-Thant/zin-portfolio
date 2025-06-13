// File: src/pages/AIExperience.js
import React from 'react';
import './AIExperience.css';

const AIExperience = () => (
  <section className="ai-section">
    <h2>AI Experience</h2>

    <div className="ai-grid">
      <div className="ai-box">
        <h4>Hotel Booking Chatbot</h4>
        <p>Used Rasa + Node.js with MongoDB for slot-based booking, fallback handling, and real-time interactions.</p>
      </div>

      <div className="ai-box">
        <h4>PTE Speech Transcription</h4>
        <p>Integrated AWS Transcribe into exam system to assess English fluency via voice input.</p>
      </div>

      <div className="ai-box">
        <h4>OpenAI Response Engine</h4>
        <p>Built smart reply system for messaging app using OpenAI's GPT API.</p>
      </div>
    </div>
  </section>
);

export default AIExperience;
