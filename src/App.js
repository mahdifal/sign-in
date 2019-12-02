import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Signin} />
      <Route path="/sign-up" component={Signup} />
    </Router>
  );
}

export default App;
