import "./Hero.css";
import { useRef } from "react"
import GoogleFontLoader from "react-google-font-loader";
import About from "../about/About";
import Skills from "../skills/Skills";
import Education from "../education/Education";
import Experience from "../experience/Experiance";
import Projects from "../projects/Projects";
import Achievements from "../achievements/Achievements";
import Contact from "../contacts/Contact";

export default function Hero() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const scrollToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <GoogleFontLoader
        fonts={[
          { font: "Roboto", weights: [400, 700] },
          { font: "Dancing Script", weights: [800] },
        ]}
      />
      <section
        ref={sectionRefs[0]}
        className="hero"
      >
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
        <div className="ball ball4"></div>

        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>

        <div className="content">
          <h1 className="welcome">Welcome</h1>
          <h2 className="subtitle">I'm</h2>
          <p className="name">Tukaram Todkari</p>
          <p className="role">MERN Stack Developer</p>
        </div>
        <div className="know-more-container" onClick={() => scrollToSection(1)}>
          <p className="know-more-text">Know More</p>
          <div className="triangle"></div>
        </div>


      </section>
      {/* About me page */}
      <section
        ref={sectionRefs[1]}
        className="hero"
      >
        <div>
          <About></About>
        </div>
      </section>

      {/* Skills and Resume */}
      <section
        className="hero"
      >
        <div>
          <Skills></Skills>
        </div>
      </section>

      {/* Education */}
      <section
        className="hero"
      >
        <div>
          <Education></Education>
        </div>
      </section>

      {/* Experience */}
      <section
        className="hero"
      >
        <div>
          <Experience></Experience>
        </div>
      </section>

      {/* projects */}
      <section
        className="hero"
      >
        <div>
          <Projects></Projects>
        </div>
      </section>

      {/* Achievements */}
      <section
        className="hero"
      >
        <div>
          <Achievements></Achievements>
        </div>
      </section>

      {/* contacts */}
      <section
        className="hero"
      >
        <div>
          <Contact></Contact>
        </div>
      </section>
    </>
  );
}
