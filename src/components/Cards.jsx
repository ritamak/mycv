// The cards for "Ironhack Projects"

import React from "react";
import { Card } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { ThemeContext } from "../ThemeContext";
import Timer from "../components/Timer";
import Button from "@material-ui/core/Button";

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
                <Card.Title className="cardTitle">{projectTitle}</Card.Title>
                <Card.Subtitle className="cardSubtitle">
                  <Timer date={projectTime} />
                </Card.Subtitle>
                <Card.Text className="cardText">{projectDescription}</Card.Text>
                <div className="cardButonWrapper">
                  <Card.Link href={link1}>
                    <Button className="cardButton" style={themeStyles1}>
                      {link1title}
                    </Button>
                  </Card.Link>
                  <Card.Link href={link2}>
                    <Button className="cardButton" style={themeStyles1}>
                      {link2title}
                    </Button>
                  </Card.Link>
                  {link3 && (
                    <Card.Link href={link3}>
                      <Button className="cardButton" style={themeStyles1}>
                        {link3title}
                      </Button>
                    </Card.Link>
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
