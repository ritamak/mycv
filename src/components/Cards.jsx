// The cards for "Ironhack Projects"

import React from "react";
import { Card } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { ThemeContext } from "../ThemeContext";
import Timer from "../components/Timer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./Cards.css";

export default function Cards(props) {
  const {
    projectTitle,
    projectDescription,
    projectTime,
    link1,
    link1title,
    link2,
    link2title,
    link3,
    link3title,
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const themeStyles2 = {
          backgroundColor: theme === "light" ? "#428EB6" : "#FFF",
          color: theme === "light" ? "black" : "black",
        };

        const themeStyles1 = {
          backgroundColor: theme === "light" ? "rgb(32, 179, 180)" : "#428EB6",
        };

        return (
          <Grid className="cardItemWrapper">
            <Card style={themeStyles2}>
              <Card.Body>
                <div className="projectHeader">
                  <Card.Title className="cardTitle">{projectTitle}</Card.Title>
                  <Card.Subtitle className="cardSubtitle">
                    <Timer date={projectTime} />
                  </Card.Subtitle>
                </div>
                <Card.Text className="cardText">{projectDescription}</Card.Text>
                <div className="cardButonWrapper">
                  <Button
                    variant="contained"
                    style={themeStyles1}
                    className="cardButton"
                  >
                    <a href={link1} className="buttonLandingLink">
                      {link1title}
                    </a>
                  </Button>
                  <Button
                    variant="contained"
                    style={themeStyles1}
                    className="cardButton"
                  >
                    <a href={link2} className="buttonLandingLink">
                      {link2title}
                    </a>
                  </Button>
                  {link3 && (
                    <Button
                      variant="contained"
                      style={themeStyles1}
                      className="cardButton"
                    >
                      <a href={link3} className="buttonLandingLink">
                        {link3title}
                      </a>
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Grid>
        );
      }}
    </ThemeContext.Consumer>
  );
}
