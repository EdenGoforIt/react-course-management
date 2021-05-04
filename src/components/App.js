import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "../components/courses/CoursesPage";
import ManageCoursesPage from "../components/courses/ManageCoursesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course" component={ManageCoursesPage} />
        <Route path="/course/:slug" component={ManageCoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
