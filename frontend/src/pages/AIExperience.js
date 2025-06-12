import React from 'react';
import './AIExperience.css';

const AIExperience = () => (
  <section className="ai-section">
    <h2>AI Experience</h2>

    <div className="ai-grid">
      <div className="ai-card">
        <h3>Hotel Booking Chatbot</h3>
        <p className="ai-tech">Rasa, Node.js, MongoDB</p>
        <p>Built a conversational chatbot to handle bookings and FAQs using Rasa NLU + custom actions in Node.js.</p>
      </div>

      <div className="ai-card">
        <h3>Speech Recognition Test</h3>
        <p className="ai-tech">AWS Transcribe</p>
        <p>Integrated real-time transcription for language practice exams.</p>
      </div>

      <div className="ai-card">
        <h3>AI Response Automation</h3>
        <p className="ai-tech">OpenAI API, Express</p>
        <p>Smart reply generator for customer support integrated with ChatGPT APIs and RESTful backend.</p>
      </div>
    </div>
  </section>
);

export default AIExperience;
