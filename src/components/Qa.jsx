// For the About page

import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import { ThemeContext } from "../ThemeContext";

import "./Qa.css";

export default function Qa() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const themeStyles2 = {
          backgroundColor: theme === "light" ? "#20B3B4" : "#428EB6",
        };
        return (
          <Container fixed className="accordionWrapper">
            <div className="accordion">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className="accordionDetail"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className="accordionDetail"
                  style={themeStyles2}
                >
                  <Typography className="headings">Top Soft Skills?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="secundaries">
                    Problem-solver, resilient, creative, hard-worker, team
                    player
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                className="accordionDetail"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                  className="accordionDetail"
                  style={themeStyles2}
                >
                  <Typography className="headings">
                    What do I want in a company culture?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="secundaries">
                    Good ethics, sense of community, teamwork, flexibility,
                    creative environment
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                className="accordionDetail"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                  className="accordionDetail"
                  style={themeStyles2}
                >
                  <Typography className="headings">Superpowers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="secundaries">
                    Thinking and reacting on the spot (under pressure), solving
                    problems, motivating others, organizing projects and
                    activities
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Container>
        );
      }}
    </ThemeContext.Consumer>
  );
}
