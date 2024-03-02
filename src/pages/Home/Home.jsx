import { TypeAnimation } from "react-type-animation";
import "./Home.scss";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -(80 * 1.2);
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  let displayDuration = 1000;

  return (
    <div className="home-container">
      <div className="elements">
        <div className="text">
          Hi, I'm Kuba <br />
          <TypeAnimation
            sequence={[
              "a Fullstack developer",
              displayDuration,
              "an Embedded developer",
              displayDuration,
              "an Electrical engineer",
              displayDuration,
              "a Passionate programer",
              displayDuration,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
        <div className="subtext">
          based in Copenhagen, Denmark <br />
          and this website is about me...
        </div>
      </div>
      <HashLink to="/#aboutme" scroll={(el) => scrollWithOffset(el)}>
        <div className="mouse_scroll">
          <div>
            <span className="m_scroll_arrows st"></span>
            <span className="m_scroll_arrows nd"></span>
            <span className="m_scroll_arrows rd"></span>
          </div>
        </div>
      </HashLink>
    </div>
  );
};

export default Home;
