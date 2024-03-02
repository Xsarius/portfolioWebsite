import "./About.scss";

const aboutData = {
  firstPar: `My name is Kuba Jaloszynski, and I’m an electrical engineer with
  bachelor’s degrees in power engineering.`,
  secondPar: `For over 3 years now I've been involved into embedded projects,
  as a begginer into simple arduino/esp32 based with little C knowledge, 
  as a proffesional when I was resposible for complete firmware for 
  production devices.`,
  thirdPar: `Throughout the projects I've gained quite a lot of knowledge 
  and hands on experience on various of embedded systems and it's components.
  I'm comfortable with using common serial iterfaces: USART, SPI, I2C, RS485, etc.
  I know how to work with FreeRTOS as well as bare metal, master loop firmware.`,
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
