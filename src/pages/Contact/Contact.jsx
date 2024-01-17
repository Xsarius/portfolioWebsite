import ContactForm from "./ContactForm";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import "./Contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleDownloadClick = () => {
    const filePath = process.env.PUBLIC_URL + '/CV_Kuba_Jaloszynski.pdf';
    
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CV_Kuba_Jaloszynski.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="header">
        <div className="title">Let's get in touch!</div>
      </div>
      <div className="details-container">
        <div className="info-container">
          <div className="title">
            <h4 className="title">Kuba Jaloszynski</h4>
          </div>
          <div className="description">
            <span className="phone">
              Phone:
              <a className="link" href="tel:+48690243477">+48 690 243 477</a>
            </span>
            <span className="mail">
              Email:
              <a className="link" href="mailto:kuba.jaloszynski@gmail.com">
                kuba.jaloszynski@gmail.com
              </a>
            </span>
            <span className="cv">
              Download my CV:
                <div className="link" onClick={handleDownloadClick}>
                  <ContactPageIcon />
                </div>
            </span>
          </div>
          <div className="socials">
            <Link className="link" target="_blank" to="https://www.linkedin.com/in/kubajaloszynski/">
              <LinkedInIcon className="icon" />
            </Link>
            <Link className="link" target="_blank" to="https://github.com/Xsarius">
              <GitHubIcon className="icon"/>
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
