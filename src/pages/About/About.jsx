import "./About.scss";

const aboutData = {
  firstPar: `My name is Kuba Jaloszynski, and I’m an electrical engineer with
  bachelor’s degrees in power engineering.`,
  secondPar: `I am infatuated with all things electronic and in my free time I
  like designing interesting gadgets. My true passion lies in
  designing embedded systems hardware/firmware.`,
  thirdPar: `My main skillset includes mixed-signal circuit design, printed
  circuit board layout, low-level firmware in embedded C, and
  electronics manufacturing. I’m generally happy with a nice mix of
  hardware and software.`,
};

const About = () => {
  return (
    <div className="about-container" id="aboutme">
      <div className="header">About me</div>
      <div className="contents-container">
        <div className="desc-container">
          <div className="text">{aboutData.firstPar}</div>
          <br />
          <div className="text">{aboutData.secondPar}</div>
          <br />
          <div className="text">{aboutData.thirdPar}</div>
        </div>
        <div className="photo-container">
          <div className="photo">
            <img src="/img/prof.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
