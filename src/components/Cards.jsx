// The cards for "Ironhack Projects"

import React from "react";
import { Card } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { ThemeContext } from "../ThemeContext";
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

        return (
          <Grid className="cardItemWrapper">
            <Card style={themeStyles2}>
              <Card.Body>
                <Card.Title>{projectTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {projectTime}
                </Card.Subtitle>
                <Card.Text>{projectDescription}</Card.Text>
                <Card.Link href={link1}>{link1title}</Card.Link>
                <Card.Link href={link2}>{link2title}</Card.Link>
                <Card.Link href={link3}>{link3title}</Card.Link>
              </Card.Body>
            </Card>
          </Grid>
        );
      }}
    </ThemeContext.Consumer>
  );
}
