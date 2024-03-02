import { Grid } from "@mui/material";
import ProjCard from "../../components/ProjectCard/ProjectCard";
import projectsData from './projectsData.json';
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="header">
        <span className="title">Projects I worked on:</span>
      </div>
      <Grid container className="cards-container">
        {Object.keys(projectsData).map((key) => (
          <Grid item key={key} className="card-grid-item">
            <ProjCard {...projectsData[key]} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
