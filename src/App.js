import "./App.css";
import Home from "./Components/Home.js";
import InfoSection from "./Components/InfoSection.js";
import ContactMe from "./Components/ContactMe.js";
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

  return (
    <div className="Body">
      <div
        id="HomeButton"
        className="HomeIconPosition"
        onClick={() => {
          topFunction();
        }}
      >
        <div className="HomeButton">
          <HomeIcon fontSize="large" className="HomeIcon" />
        </div>
      </div>
      <Home />
      <InfoSection />
      <ContactMe />
    </div>
  );
}

export default App;
