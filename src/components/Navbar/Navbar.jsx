import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.scss";
import { useState } from "react";
import { IconButton } from "@mui/material";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    updateMenuClass();
  };

  const updateMenuClass = () => {
    let doc_classList = document.querySelector(".menu").classList;

    if (menuOpen) {
      doc_classList.add("opened");
      doc_classList.remove("closed");
    }
    else {
      doc_classList.add("closed");
      doc_classList.remove("opened");
    };
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -(80 * 1.2);
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const scrollWithOffsetMobile = (el) => {
    scrollWithOffset(el);
    handleMenuClick();
  };

  return (
    <div className="navbar-container">
      <HashLink
        className="logo"
        smooth
        to="/#top"
      >
        <h2>K.Jaloszynski</h2>
      </HashLink>
      <div className="desktop-navbar">
        <div className="items">
          <HashLink
            className="item"
            smooth
            to="/#aboutme"
            scroll={(el) => scrollWithOffset(el)}
          >
            About me
          </HashLink>
          <HashLink
            className="item"
            smooth
            to="/#projects"
            scroll={(el) => scrollWithOffset(el)}
          >
            Projects
          </HashLink>
          <HashLink
            className="item"
            smooth
            to="/#experience"
            scroll={(el) => scrollWithOffset(el)}
          >
            Resume
          </HashLink>
          <HashLink
            className="item"
            smooth
            to="/#contact"
            scroll={(el) => scrollWithOffset(el)}
          >
            Contact
          </HashLink>
        </div>
      </div>

      <div className="mobile-navbar">
        <IconButton className="foldable-menu" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
          <div className={`menu`}>
            <div className="items">
              <HashLink
                className="item"
                smooth
                to="#aboutme"
                scroll={(el) => scrollWithOffsetMobile(el)}
              >
                About me
              </HashLink>
              <HashLink
                className="item"
                smooth
                to="#projects"
                scroll={(el) => scrollWithOffsetMobile(el)}
              >
                Projects
              </HashLink>
              <HashLink
                className="item"
                smooth
                to="#experience"
                scroll={(el) => scrollWithOffsetMobile(el)}
              >
                Resume
              </HashLink>
              <HashLink
                className="item"
                smooth
                to="#contact"
                scroll={(el) => scrollWithOffsetMobile(el)}
              >
                Contact
              </HashLink>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
