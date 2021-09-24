// Ironhack's projects component for the page "ABOUT"

import React from "react";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import { ThemeContext } from "../ThemeContext";
import "./IronhackProjects.css";
import "bootstrap/dist/css/bootstrap.css";

export default function IronhackProjects() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const themeStyles2 = {
          backgroundColor: theme === "light" ? "#20B3B4" : "#428EB6",
        };

        return (
          <>
            <Grid container xs={12} sm={6} md={4} lg={3} className="cardItem">
              <Cards
                projectTitle={"STRESS|BALL"}
                projectDescription={`stress|ball is a game created using HTML Canvas, CSS and
          JavaScript. In stress|ball, a white ball appears in the
          screen and moves to random places. The user has to click
          inside the ball or else the user looses the games. The game has
          three levels (easy, medium and hard) and the velocity of the
          moving ball increases with each level. When the user looses the
          game, a score board appears in the screen with the time of the
          game, the number of clicks inside of the white ball, and, if the
          user plays more than once, there's also the previous game
          scores.`}
                projectTime={"2021-06-18"}
                link1={"https://ritamak.github.io/stress-ball/"}
                link1title={"website"}
                link2={"https://github.com/ritamak/stress-ball"}
                link2title={"repo"}
                style={themeStyles2}
              />
            </Grid>
            <Grid container xs={12} sm={6} md={4} lg={3} className="cardItem">
              <Cards
                projectTitle={"FUNNYFY"}
                projectDescription={`Funnyfy is a project developed by me and my colleague
          (Enrique), using back-end skills. We used
          Node.Js, Express.Js, MongoDB and JavaScript. Funnyfy is a
          website where you can create your account, and using an external
          API of jokes, we provide the user a collection of jokes
          separated by categories. The user can add more jokes to our
          database, share the jokes in other social media platforms like
          Facebook, get random jokes everyday and add jokes to their
          favourites to never miss a good laugh!`}
                projectTime={"2021-07-09"}
                link1={"https://funnyfy.herokuapp.com/"}
                link1title={"website"}
                link2={"https://github.com/ritamak/funnyfy"}
                link2title={"repo"}
                style={themeStyles2}
              />
            </Grid>
            <Grid container xs={12} sm={6} md={4} lg={3} className="cardItem">
              <Cards
                projectTitle={"HR TIMES"}
                projectDescription={`HR TIMES is a project developed by me and my colleague
          (Halil), using our full-stack skills. To develop the website, we used React,
          Node.Js, Express.Js and MongoDB. HR TIMES is a website
          where the user can create an account and based on the user's
          interests, we provide a curated selection of news and articles
          from the New York Times API. The user can add new articles to
          our database, see articles created by other users, follow other
          authors on our platform, review and "like" other articles.`}
                projectTime={"2021-07-30"}
                link1={"https://hrtimes.herokuapp.com/"}
                link1title={"website"}
                link2={"https://github.com/ritamak/hrtimes-client"}
                link2title={"client repo"}
                link3={"https://github.com/ritamak/hrtimes-server"}
                link3title={"server repo"}
                style={themeStyles2}
              />
            </Grid>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}
