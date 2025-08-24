import React from "react";

export default function Personal() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <img
        src="https://via.placeholder.com/150"
        alt="profile"
        className="w-40 h-40 rounded-full mb-6 border-4 border-purple-500 shadow-xl"
      />
      <h1 className="text-3xl font-bold">Tukaram Todkari</h1>
      <p className="text-lg text-gray-300">Fullstack MERN Developer</p>
      <p className="mt-4 max-w-xl text-center text-gray-400">
        Passionate developer with experience in building scalable web apps,
        APIs, and modern UI/UX solutions.
      </p>
    </div>
  );
}
