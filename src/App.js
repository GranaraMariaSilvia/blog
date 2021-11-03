import React from "react";
import TopBar from "./components/topBar/TopBar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Footer from "./components/footer/Footer";
import Single from "./components/single/Single";
import Write from "./Pages/write/Write";
import Settings from "./Pages/setting/Settings";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">{user ? <Home /> : <Register />}</Route>

        <Route path="/login">{user ? <Home /> : <Login />}</Route>

        <Route path="/write">{user ? <Write /> : <Register />}</Route>

        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
