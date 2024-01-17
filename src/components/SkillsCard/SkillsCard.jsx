import { Card, CardContent, Typography } from "@mui/material";
import "./SkillsCard.scss";

const SkillsCard = (props) => {
  return (
    <div className="skill-card-container">
      <Card className="card">
        <CardContent className="contents">
          <div className="img-container">
            <img src={props.img} alt="img" loading="lazy" />
          </div>
          <div className="text-container">
            <Typography className="title">
              {props.title ? props.title : <br />}
            </Typography>
            <Typography className="hours">
              Est. {props.hours ? props.hours : "N/A"} hours
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsCard;
