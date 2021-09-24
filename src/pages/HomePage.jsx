import React from "react";
import PhotoRita from "../components/PhotoRita";
import Bubble from "../components/Bubble";
import BubbleLink from "../components/BubbleLink";
import ContentContainer from "../components/ContentContainer";
import { ThemeContext } from "../ThemeContext";
import "./HomePage.css";

function HomePage() {
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
              <PhotoRita />
              <div className="homepageBubbles">
                <Bubble
                  text={`My name is Rita Mak and I'm a portuguese Full-Stack Web Develper.`}
                  id="bubbleOne"
                />
                <BubbleLink text={"Want to know more?"} link={"./personal"} />
              </div>
            </ContentContainer>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default HomePage;
