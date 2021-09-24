import React from "react";
import PhotoRita from "../components/PhotoRita";
import Bubble from "../components/Bubble";
import BubbleLink from "../components/BubbleLink";
import ContentContainer from "../components/ContentContainer";
import { ThemeContext } from "../ThemeContext";
import "./Personal.css";

export default function Personal() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const themeStyles = {
          backgroundColor: theme === "light" ? "#082938" : "#20B3B4",
          color: theme === "light" ? "#082938" : "#082938",
        };
        return (
          <>
            <ContentContainer style={themeStyles}>
              <PhotoRita />
              <div className="boxBubble">
                <Bubble
                  text={`I'm a 28 years old animal and nature lover, cooking enthusiast and in my free time I like to
        spend time with the people I love.`}
                />
                <Bubble
                  text={`I have a background in Event Production.
        I used to be an event producer until the covid-19 appeared, and suddenly
        I found myself at home, with no job and no clue what to do.`}
                />
                <Bubble
                  text={`That was when I discovered the wonderful world of web development! I started learning
        JavaScript, by myself and throught that I found a passion I
        didn't know I had! Later, I applied, enroled and completed ironhack's Web Development
        bootcamp.`}
                />
                <Bubble
                  text={`I can't wait to embrace new coding adventures and challenges,
        meeting new people and improve myself as a proud Front-End Web
        Developer!
        `}
                />
                <BubbleLink
                  text={"Let me show you some of my projects"}
                  link={"./projects"}
                />
              </div>
              <div className="randomDiv"></div>
            </ContentContainer>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}
