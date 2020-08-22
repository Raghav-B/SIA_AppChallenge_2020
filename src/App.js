import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Splash from "./Splash.js";
import SignIn from "./SignIn.js";
import Home from "./Home.js";

function App() {
  return (
    <BrowserRouter>
      <div className="window">
        <div className="screenContainer">
          <div className="screen">
            
            <Switch>
              <Route path="/" exact component={() => (<Splash/>)}/>
              <Route path="/signin" exact component={() => (<SignIn/>)}/>
              <Route path="/home" exact component={() => (<Home/>)}/>
            </Switch>
          
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
