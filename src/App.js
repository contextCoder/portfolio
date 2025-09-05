import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/homePage/Hero";

export default function App() {
  console.log("Environment:", process.env.REACT_APP_NODE_ENV);
  return (
    <Router>
      <Routes basename={process.env.REACT_APP_NODE_ENV === "production" ? "/portfolio" : "/"}>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
}
