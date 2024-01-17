import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import ProjectCardModal from "./ProjectModal";
import "./ProjectCard.scss";

const ProjCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("1");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("2");
    setOpen(false);
  };

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
    <div>
      <Card className="project-card" onClick={handleOpen}>
          <CardContent className="contents">
            <div className="icon-container">
              <img
                className="icon"
                src={props.coverImg}
                alt="logo"
                loading="lazy"
              />
            </div>
            <Typography className="title">{props.title}</Typography>
          </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div>
          <ProjectCardModal enablePictures onClose={handleClose} {...props.modal} />
        </div>
      </Modal>
    </div>
  );
};

export default ProjCard;
