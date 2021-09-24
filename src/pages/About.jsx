import React from "react";
import IronhackProjects from "../components/IronhackProjects";
import Qa from "../components/Qa";
import ContentContainer from "../components/ContentContainer";
import { ThemeContext } from "../ThemeContext";
import Timer from "../components/Timer";
import "./About.css";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const themeStyles = {
          backgroundColor: theme === "light" ? "#082938" : "#20B3B4",
          color: theme === "light" ? "#082938" : "#082938",
        };
        return (
          <>
            <ContentContainer style={themeStyles}>
              <div className="aboutWrapperOne">
                <Qa />
                <div className="cardsWrapper">
                  <IronhackProjects />
                </div>
              </div>
            </ContentContainer>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}
