import { Typography } from "@mui/material";
import "./404.scss";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="notfound-container">
      <Typography fontSize="48px">404 - Not Found</Typography>
      <Link className="link" to="/">
        <Typography >
            Go back to the homepage
        </Typography>
      </Link>
    </div>
  );
};

export default NotFound404;
