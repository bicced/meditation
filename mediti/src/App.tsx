import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'antd-mobile/dist/antd-mobile.css'
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppNav from "./AppNav";
import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <AppNav />
      </Router>
    </div>
  );
}

export default App;
