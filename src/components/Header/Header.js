import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
// import {Home,Telegram} from '@mui/icons-material'
import HomeIcon from "@mui/icons-material/Home";
import TelegramIcon from "@mui/icons-material/Telegram";
import { NavLink, useLocation } from "react-router-dom";
import resumeData from "../../utils/ResumeData";
import CustomButtom from "../Button/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"
import "./Header.css";

function Header(props) {
  const [collapse, setCollaspse] = useState(false);
  const { pathname } = useLocation();

  const handleEmail = () => {
    window.open("mailto:asif56175@gmail.com");
  };

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="header_navLink">
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle onClick={() => setCollaspse(!collapse)}>
        {collapse ? <CloseIcon /> : <MenuIcon />}
      </Navbar.Toggle>

      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            key="Resume"
            to="/"
            className={pathname === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            key="Portfolio"
            to="/Portfolio"
            className={
              pathname === "/Portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a rel="noreferrer" href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <div onClick={handleEmail}>
            <CustomButtom text={"Email"} icon={<TelegramIcon />} />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
