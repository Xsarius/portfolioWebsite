import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import "./EducationCard.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EducationCardModal from "./EducationCardModal";

const EducationCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if(!open) 
    {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const toggleScroll = () => {
      const body = document.body;

      if (open) {
        body.style.overflowY = "hidden";
      } else {
        body.style.overflowY = "scroll";
      }
    };

    toggleScroll();

    return () => {
      toggleScroll();
    };
  }, [open]);

  return (
    <Card className="education-card">
      <CardContent className="card-contents">
        <div className="details-container">
          <Typography className="title">{props.title}</Typography>
          <Typography className="subtitle">
            <Link className="link" target="_blank" to={props.link_to}>
              {props.subtitle}
              <LaunchIcon className="icon" />
            </Link>
          </Typography>
          <Typography className="date">
            {props.date_from} - {props.date_to}
          </Typography>
          {props.grade ? (
            <Typography className="grade">Grade: {props.grade}</Typography>
          ) : (
            <Typography className="grade">
              <br />
            </Typography>
          )}
          <Typography className="content" variant="body1">
            {props.desc}
          </Typography>
          <CardActions>
            <Modal
              open={open}
              onClose={handleClose}
              style={{ backdropFilter: "blur(5px)" }}
            >
              <EducationCardModal {...props}/>
            </Modal>
            <Button className="details-btn" onClick={handleOpen} variant="contained">
              Details
            </Button>
          </CardActions>
        </div>
        <div className="img-container">
          <img src={props.img} alt="logo" loading="lazy" />
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
