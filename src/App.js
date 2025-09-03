import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/homePage/Hero";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
}
