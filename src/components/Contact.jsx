import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <form className="flex flex-col gap-4 max-w-xl mx-auto">
        <input type="text" placeholder="Name" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <input type="email" placeholder="Email" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <textarea placeholder="Message" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
        <button className="bg-indigo-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-indigo-700 transition">Send</button>
      </form>
    </section>
  );
}