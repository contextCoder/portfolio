import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "A personal portfolio site.", link: "https://github.com/" },
    { title: "E-commerce App", desc: "Shopping cart with payments.", link: "https://github.com/" },
    { title: "Chat App", desc: "Real-time messaging app.", link: "https://github.com/" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-200">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
