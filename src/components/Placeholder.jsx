import React from "react";

export default function Placeholder({ title }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">{title} Page Coming Soon 🚀</h1>
    </div>
  );
}
