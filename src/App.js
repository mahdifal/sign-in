import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ThemeContext from "./components/Context/ThemeContext";
import SwitchTheme from "./components/SwitchTheme";

import "./App.css";

function App() {
  const getTheme = () => JSON.parse(localStorage.getItem("login-theme")) || "";
  const [theme, setTheme] = useState(getTheme);

  const changeTheme = e => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("login-theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className="text-center">
          <SwitchTheme switchTheme={e => changeTheme(e)} />
        </div>
        <Route path="/" exact component={Signin} />
        <Route path="/sign-up" component={Signup} />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
