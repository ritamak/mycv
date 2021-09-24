// Bubble component for the "texts messages"

import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Bubble.css";

export default function Bubble(props) {
  const { text } = props;

  return (
    <>
      <Grid container item xs={8} sm={8} md={5} lg={5} className="bubble">
        {text}
      </Grid>
    </>
  );
}
