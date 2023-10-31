import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home.js";
import InfoSection from "./Components/InfoSection.js";
import ContactMe from "./Components/ContactMe.js";
import SkillsSection from "./Components/Skills.js";
import ChessPuzzle from "./Components/ChessPuzzle.js";
import HomeIcon from "@mui/icons-material/Home";

function App() {
  let topFunction = () => {
    if (
      document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0
    ) {
      window.scrollBy(0, -80);
      requestAnimationFrame(topFunction);
    }
  };

  let scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [conditional, setConditional] = useState(false);
  window.onscroll = () => {
    if (window.pageYOffset >= 700 && !conditional) {
      setConditional(true);
    }
    if (window.pageYOffset < 700 && conditional) {
      setConditional(false);
    }
  };
  return (
    <div className="Body">
      <div id="HomeButton" className="HomeIconPosition">
        <div className="Nav">
          <div
            className="HomeButton"
            onClick={() => {
              topFunction();
            }}
          >
            <HomeIcon fontSize="large" className="HomeIcon" />
          </div>
          {conditional ? (
            <>
              <div
                className="NavButton"
                onClick={() => {
                  scrollToSection("AboutMe");
                }}
              >
                <h5 className="NavButtonText">INFO</h5>
              </div>
              <div
                className="NavButton"
                onClick={() => {
                  scrollToSection("ContactSection");
                }}
              >
                <h5 className="NavButtonText">CONTACT</h5>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <Home id="HomePage" />
      <InfoSection id="InfoPage" />
      <SkillsSection id="SkillsPage" />
      <ChessPuzzle id="ChessPage" />
      <ContactMe id="ContactPage" />
    </div>
  );
}

export default App;
