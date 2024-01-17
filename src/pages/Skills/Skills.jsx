import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Grid } from "@mui/material";
import EducationCard from "../../components/EducationCards/EducationCard";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import "./Skills.scss";

const Skills = () => {
  const skillsData = {
    skill1: {
      title: "C",
      img: "/img/Skills/C.png",
      hours: 200,
    },
    skill2: {
      title: "Python",
      img: "/img/Skills/python.png",
      hours: 200,
    },
    skill3: {
      title: "Rust",
      img: "/img/Skills/rust.png",
      hours: 200,
    },
    skill4: {
      title: "Docker",
      img: "/img/Skills/docker.png",
      hours: 200,
    },
    skill5: {
      title: "Django",
      img: "/img/Skills/django.png",
      hours: 200,
    },
    skill6: {
      title: "Electronics design",
      img: "/img/Skills/electronics_design.png",
      hours: 200,
    },
    skill7: {
      title: "React",
      img: "/img/Skills/react.png",
      hours: 200,
    },
    skill8: {
      title: "STM32 (M0+/M7)",
      img: "/img/Skills/stm32.png",
      hours: 200,
    },
    skill9: {
      title: "Modbus RTU",
      img: "/img/Skills/modbus.png",
      hours: 200,
    },
    skill10: {
      title: "Linux (Ubuntu)",
      img: "/img/Skills/ubuntu.png",
      hours: 200,
    },
  };

  const jobsData = {
    job1: {
      title: "Embedded software / Electrical Engineer",
      subtitle: "DTU Energy",
      date_from: "Oct 2023",
      date_to: "Present",
      link_to: "https://www.energy.dtu.dk/",
      img: "/img/Employers/DTU_energy.jpg",
    },
    job2: {
      title: "Embedded software / Electrical Engineer",
      subtitle: "Anemorobotics ApS",
      date_from: "Oct 2023",
      date_to: "Present",
      link_to: "https://anemorobotics.com/",
      img: "/img/Employers/anemorobotics.jpeg",
    },
    job3: {
      title: "Embedded Software Engineer",
      subtitle: "UXEON sp. z o.o.",
      date_from: "Jan 2023",
      date_to: "Jun 2023",
      link_to: "https://www.uxeon.com/en/index",
      img: "/img/Employers/uxeon.jpeg",
    },
    job4: {
      title: "Fullstack Software Engineer",
      subtitle: "Impicode sp. z o.o.",
      date_from: "Apr 2022",
      date_to: "Dec 2022",
      link_to: "https://impicode.com/",
      img: "/img/Employers/impicode.jpeg",
    },
  };

  const educationData = {
    education1: {
      title: "MSc in Electrical Engineering",
      subtitle: "Technical University of Denmark",
      date_from: "Aug 2023",
      date_to: "Present",
      link_to: "https://www.dtu.dk/english/",
      img: "/img/Employers/DTU-logo.png",
      grade: "",
    },
    education2: {
      title: "BSc in Power Engineering",
      subtitle: "Warsaw University of Technology",
      date_from: "Oct 2019",
      date_to: "Mar 2023",
      link_to: "https://eng.pw.edu.pl/",
      img: "/img/Employers/pw-logo.jpg",
      grade: "4.5/5 (ECTS Grade: B)",
    },
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <div className="skills-container" id="experience">
      <div className="header">
        <div className="title">My Resume</div>
      </div>
      <div className="contents-container">
        <Tabs>
          <TabList>
            <Tab>Skills</Tab>
            <Tab>Experience</Tab>
            <Tab>Education</Tab>
          </TabList>

          <TabPanel className="skills-tabpanel">
            <Grid container spacing={4} sx={containerStyle}>
              {Object.keys(skillsData).map((key) => (
                <Grid item key={key} className="skills-item">
                  <SkillsCard {...skillsData[key]} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel className="experience-tabpanel">
            <Grid container direction="column" sx={containerStyle}>
              {Object.keys(jobsData).map((key) => (
                <Grid item className="card-grid-item" key={key}>
                  <EducationCard {...jobsData[key]} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel className="education-tabpanel">
            <Grid container direction="column" sx={containerStyle}>
              {Object.keys(educationData).map((key) => (
                <Grid item className="card-grid-item" key={key}>
                  <EducationCard {...educationData[key]} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
