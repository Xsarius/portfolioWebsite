import { Typography } from "@mui/material";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <Typography className='text'>
                Kuba Jaloszynski
            </Typography> */}
      <Typography className="text-2">Copyright © 2024</Typography>
      <Typography className="text-2">All right reserved</Typography>
    </div>
  );
};

export default Footer;
