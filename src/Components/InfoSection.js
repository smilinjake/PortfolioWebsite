import React from "react";
import "../App.css";

const InfoSection = () => {
  return (
    <>
      <div id="AboutMe">
        <div className="Info">
          <div className="InfoRow">
            <div className="LeftSide">
              <img src="ProfilePick.png" alt="Avatar" />
            </div>
            <div className="RightSide">
              <p className="Typography">
                I'm a passionate full stack web developer with a unique journey
                that led me to where I am today. Though my background might
                surprise you—I spent a decade working in a meat market alongside
                my father in Texas—my love for crafting and building has been a
                constant throughout my life.
              </p>
              <p className="Typography">
                Driven by a desire to explore new horizons, I decided to
                transition into the tech world. After saving up and sharpening
                my skills, I started a new journey and studied at Hack Reactor,
                one of the best full stack bootcamp in the country.
              </p>
            </div>
          </div>
          <p className="Typography">
            After my graduation, I secured a position at Cynopsis Solutions as a
            Front End Software Engineer, and I’m now working on several projects
            for DataAnnotation.tech.
          </p>
          <p className="Typography">
            Fueled by a passion for coding and a thirst for new challenges, I am
            on the lookout for exciting remote opportunities to further expand
            my skills and make meaningful contributions to innovative projects.
          </p>
          <p className="Typography">
            Let's collaborate and create something remarkable together!
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
