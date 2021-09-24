import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";
import styled, { css } from "styled-components";
import { Sun, Moon } from "styled-icons/feather";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import "./Header.css";

export default function Header() {
  const icon = css`
    color: ${(props) => props.theme.text};
    cursor: pointer;
  `;

  const StyledSun = styled(Sun)`
    ${icon}
  `;

  const StyledMoon = styled(Moon)`
    ${icon}
  `;

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const themeStyles = {
          backgroundColor: theme === "light" ? "#082938" : "#20B3B4",
          color: theme === "light" ? "white" : "white",
        };

        const themeStyles2 = {
          color: theme === "light" ? "white" : "white",
        };

        return (
          <>
            <Navbar collapseOnSelect expand="lg" style={themeStyles}>
              <Container>
                <Navbar.Brand href="./" style={themeStyles}>
                  Rita Mak
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="responsive-navbar-nav"
                  style={themeStyles2}
                >
                  <Menu style={themeStyles2} />
                </Navbar.Toggle>
                <Navbar.Collapse
                  id="responsive-navbar-nav"
                  style={themeStyles2}
                >
                  <Nav className="me-auto" style={themeStyles2}>
                    <Nav.Link
                      href="./personal"
                      style={themeStyles2}
                      className="links"
                    >
                      About Me
                    </Nav.Link>
                    <Nav.Link
                      href="./projects"
                      style={themeStyles2}
                      className="links"
                    >
                      My Projects
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    {theme === "dark" ? (
                      <StyledSun
                        size={32}
                        onClick={() => toggleTheme("light")}
                      />
                    ) : (
                      <StyledMoon
                        size={32}
                        onClick={() => toggleTheme("dark")}
                      />
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}
