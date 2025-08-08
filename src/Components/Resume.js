import React from "react";
import "../App.css";
// import ColorButton from "./ColorButton.js";
import Grid from "@mui/material/Grid";

const Resume = () => {
  return (
    <div className="ResumeSection">
      <Grid className="Home" container item direction="column">
        <img src="Resume.png" alt="My resume" />

        {/* <nav className="links">
          <a className="Link" href="/contact">
            <ColorButton variant="outlined">Contact</ColorButton>
          </a>
          <a className="Link" href="/info">
            <ColorButton variant="outlined">Info</ColorButton>
          </a>
          <a className="Link" href="/">
            <ColorButton variant="outlined">Home</ColorButton>
          </a>
        </nav> */}
      </Grid>
    </div>
  );
};

export default Resume;
