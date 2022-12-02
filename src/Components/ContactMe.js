import React from "react";
import "../App.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactMe = () => {
  return (
    <>
      <div id="ContactSection">
        <div className="Contact-Row">
          <div className="Left-Side">
            <span className="Contact-Block">
              <span className="IconBubble">
                <div className="Circle">
                  <PhoneIcon fontSize="large" className="BiggerIcon" />
                </div>
              </span>
              <div>
                <h3>PHONE</h3>
                <h4>+1 (936) 635-3826</h4>
              </div>
            </span>
            <span className="Contact-Block">
              <a
                className="ContactBubbleLink"
                href="mailto:smilinjake@gmail.com"
              >
                <span className="IconBubble">
                  <EmailOutlinedIcon fontSize="large" className="ButtonLink" />
                </span>
              </a>
              <div className="ContactColumn">
                <h3>EMAIL</h3>
                <a
                  className="ContactBubbleLink"
                  href="mailto:smilinjake@gmail.com"
                >
                  SMILINJAKE@GMAIL.COM
                </a>
              </div>
            </span>
            <span className="Contact-Block">
              <a
                className="ContactBubbleLink"
                href="https://www.linkedin.com/in/jacobward96/"
              >
                <span className="LinkedinBlock">
                  <LinkedInIcon fontSize="large" className="LinkedIn" />
                </span>
              </a>
              <div className="ContactColumn">
                <h3>LINKEDIN</h3>
                <a href="https://www.linkedin.com/in/jacobward96/">
                  JACOB WARD
                </a>
              </div>
            </span>
            <span className="Contact-Block">
              <a href="https://github.com/smilinjake">
                <span className="IconBubble">
                  <GitHubIcon fontSize="large" className="ButtonLink" />
                </span>
              </a>
              <div className="ContactColumn">
                <h3>GITHUB</h3>
                <a href="https://github.com/smilinjake">SMILINJAKE</a>
              </div>
            </span>
          </div>
          <div className="Right-Side">
            <div className="Right-Row">
              <div className="LittleRow">
                <div className="BlueBoxContact">
                  <h1 className="TypographyH1">
                    <strong className="StrongTitle">GET IN</strong>
                  </h1>
                </div>
              </div>
              <div className="LittleRow">
                <h1 className="TypographyBolder">TOUCH</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
