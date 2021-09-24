import React from "react";
import LottieControl from "../components/LottieControl";
import "./NotFound.css";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import newspaper from "../newspaper.json";

export default function NotFound() {
  const history = useHistory();

  return (
    <Grid container className="notFoundWrapper">
      <Grid className="notFound">
        <h1>the page you're trying to access does not exist</h1>
        <LottieControl width={200} height={300} animation={newspaper} />
        <Button variant="contained" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </Grid>
    </Grid>
  );
}
