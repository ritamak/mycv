// Bubble for the "texts messages" with links

import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ThemeContext } from "../ThemeContext";
import "./BubbleLink.css";

export default function BubbleLink(props) {
  const { text, link } = props;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const themeStyles2 = {
          backgroundColor: theme === "light" ? "#20B3B4" : "#428EB6",
        };

        return (
          <>
            <Grid
              container
              item
              xs={8}
              sm={8}
              md={5}
              lg={5}
              className="bubbleLink"
            >
              <Button
                variant="contained"
                style={themeStyles2}
                className="buttonLanding"
              >
                <Link to={link} className="buttonLandingLink">
                  {text}
                </Link>
              </Button>
            </Grid>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}
