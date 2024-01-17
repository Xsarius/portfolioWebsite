import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Grid } from "@mui/material";
import EducationCard from "../../components/EducationCards/EducationCard";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import "./Skills.scss";

const Skills = () => {

  let data = require("./skillsData.json");
  let skillsData = data["skillsData"];
  let jobsData = data["jobsData"];
  let educationData = data["educationData"];

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
