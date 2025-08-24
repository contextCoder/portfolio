import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Personal from "./components/Personal";
import Projects from "./components/Projects";
import Placeholder from "./components/Placeholder";
import WalkingMan from "./components/WalkingMan";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/projects" element={<Projects />} />
        <Route path="/works" element={<Placeholder title="Personal Works" />} />
        <Route path="/connections" element={<Placeholder title="Connections" />} />
        <Route path="/collab" element={<Placeholder title="Collaborations" />} />
        <Route path="/ideas" element={<Placeholder title="Send Your Ideas" />} />
      </Routes>
    </Router>
    </>
  );
}
