import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import './styles.css';

import MenuDesktop from "./ui/MenuDesktop";
import MenuMobile from "./ui/MenuMobile";
import Home from "./routes/Home";
import TimeManagemet from "./routes/TimeManagemet";
import IndexCopmonent from "./routes/IndexCopmonent";
import Calendar from "./routes/Calendar";
import Analytics from "./routes/Analytics";
import Settings from "./routes/Settings";


const App = () => {
  return (
    <Router>
      <div className="app">
       <div className="app__menu">
         <MenuDesktop/>

         <MenuMobile/>
       </div>

        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/time">
            <TimeManagemet/>
          </Route>
          <Route path="/index">
            <IndexCopmonent/>
          </Route>
          <Route path="/calendar">
            <Calendar/>
          </Route>
          <Route path="/analytics">
            <Analytics/>
          </Route>
          <Route path="/settings">
            <Settings/>
          </Route>
          <Route path="*">
            <Redirect to="/home"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
