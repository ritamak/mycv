import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import { Navbar } from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";
import "./Footer.css";

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const themeStyles = {
          backgroundColor: theme === "light" ? "#082938" : "#20B3B4",
          color: theme === "light" ? "#FFF8" : "#082938",
        };

        return (
          <>
            <div className="randomDiv"></div>
            <Navbar fixed="bottom" className="footer" style={themeStyles}>
              <div className="footerLinks">
                <a href="https://www.github.com/ritamak/">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/rita-mak/">
                  <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/ritapmak/">
                  <InstagramIcon />
                </a>
                <a href="mailto:ritapmak@gmail.com">
                  <MailIcon />
                </a>

                <a href="tel:00351916182454">
                  PT
                  <PhoneIcon />
                </a>

                <a href="tel:004407907009418">
                  EN
                  <PhoneIcon />
                </a>
              </div>
            </Navbar>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Footer;
