import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Tukaram Todkari</h1>
        <p className="text-xl text-indigo-600 mb-6">
          Full-stack force with a future-proof mindset — turning code into crafted experiences.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">About Me</h2>
          <p className="text-gray-600">
            I’m a full-stack developer with 3.5+ years of experience in building secure, scalable, and user-centric web applications. Skilled in MERN, MEAN, and AI-driven systems, I deliver results through intuitive design, solid backend architecture, and seamless integrations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Specialties</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Full-stack development (React, Angular, Node.js, Express, MongoDB)</li>
            <li>Conversational AI & NLP integration</li>
            <li>JWT authentication & secure license key systems</li>
            <li>3rd-party integrations (Facebook API, WhatsApp via Vonage, etc.)</li>
            <li>Cloud Certifications: AWS Certified Cloud Practitioner, GCP (in progress)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Project Highlights</h2>
          <ul className="space-y-4">
            <li className="text-gray-600">
              <strong>Practice License App:</strong> A secure React-Node platform verifying license keys by device, valid for 7 days even after restarts.
            </li>
            <li className="text-gray-600">
              <strong>AI Spam Classifier:</strong> Built an NLP-powered spam detector with a clean UI and real-time classification.
            </li>
            <li className="text-gray-600">
              <strong>WhatsApp Message Sender:</strong> Integrated Facebook & Vonage APIs to trigger WhatsApp templates dynamically.
            </li>
            <li className="text-gray-600">
              <strong>JWT Auth System:</strong> MERN stack project with login, signup, forgot password, and token validation across protected routes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Let’s Connect</h2>
          <p className="text-gray-600">Email: <a className="text-indigo-600 underline" href="mailto:tukaram@example.com">tukaram@example.com</a></p>
          <p className="text-gray-600">GitHub: <a className="text-indigo-600 underline" href="https://github.com/tukaramtodkari">github.com/tukaramtodkari</a></p>
          <p className="text-gray-600">LinkedIn: <a className="text-indigo-600 underline" href="https://linkedin.com/in/tukaramtodkari">linkedin.com/in/tukaramtodkari</a></p>
        </section>
      </div>
    </div>
  );
}
