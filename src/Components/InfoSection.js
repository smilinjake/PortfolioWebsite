import React from "react";
import "../App.css";

const InfoSection = () => {
  return (
    <>
      <div id="AboutMe">
        <div className="Info">
          <div className="InfoRow-1">
            <div className="BlueBoxInfo">
              <h1 className="TypographyH1">
                <strong className="StrongTitle">ABOUT</strong>
              </h1>
            </div>
            <h1 className="TypographyH1Info">ME</h1>
          </div>
          <h3 className="Typography">I am a full stack web developer.</h3>
          <p className="Typography">
            I wasn't always a <strong>web developer</strong>. But I've always
            loved <strong>making things</strong> and working with my hands.
            Originally I'm from Texas and spent ten years working for my father
            in a <strong>meat market</strong>. It wasn't my dream to take over
            the family business so I saved and practiced and was accepted into{" "}
            <strong>Hack Reactor</strong>, a fantastic{" "}
            <strong>full stack bootcamp</strong> in Austin, Texas. After
            graduating, I was offered a position at{" "}
            <strong>Cynopsis Solutions</strong>, where I worked for 7 months
            until the completion of our project. Now that is complete and{" "}
            <strong>I am currently looking for remote work</strong>!
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
