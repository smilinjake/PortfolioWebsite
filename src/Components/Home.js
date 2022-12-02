import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.js";

const Home = () => {
  let scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="Home">
      <div className="HomePage">
        <div className="IntroLine">
          <h1 className="Typography">HI! I'M</h1>
          <div className="BlueBox">
            <h1 className="TypographyH1">
              <strong className="StrongTitle">JAKE</strong>
            </h1>
          </div>
        </div>
        <h2 className="Typography">A FULL STACK WEB DEVELOPER</h2>
      </div>

      <div id="Nav">
        {/* <a className="Link" href="/contact"> */}
        <ColorButton
          variant="outlined"
          onClick={() => {
            scrollToSection("AboutMe");
          }}
        >
          Info
        </ColorButton>
        {/* </a> */}
        {/* <a className="Link" href="/info"> */}
        <ColorButton
          variant="outlined"
          onClick={() => {
            scrollToSection("ContactSection");
          }}
        >
          Skills
        </ColorButton>
        {/* </a> */}
        {/* <a className="Link" href="/resume"> */}
        <ColorButton
          variant="outlined"
          onClick={() => {
            scrollToSection("ContactSection");
          }}
        >
          Contact
        </ColorButton>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Home;
