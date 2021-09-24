import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Personal from "./pages/Personal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <div className="App">
          <ThemeProvider>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    <Header />
                    <HomePage />
                    <Footer />
                  </>
                );
              }}
            />
            <Route
              exact
              path="/projects"
              render={() => {
                return (
                  <>
                    <Header />
                    <About />
                    <Footer />
                  </>
                );
              }}
            />
            <Route
              exact
              path="/personal"
              render={() => {
                return (
                  <>
                    <Header />
                    <Personal />
                    <Footer />
                  </>
                );
              }}
            />
          </ThemeProvider>
        </div>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
