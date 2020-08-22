import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom'

import "./Main.css";

import ProgressBar from "./ProgressBar.js";
import PreFlight from "./PreFlight.js";
import Chatting from "./Chatting.js";
import CheckIn from "./CheckIn.js";
import Home from "./Home.js";
import HomeBusinessClass from "./HomeBusinessClass.js";
import KrisShop from "./KrisShop.js";
import KrisworldEntertainment from "./KrisworldEntertainment.js";

class Main extends React.Component {

    componentDidMount() {
        
        var myDiv = document.getElementById("screen");
        myDiv.style.overflowY = "scroll";
      }

    render() {
        return (
            <div className="home-background">
                <img src={require("./imgs/sia_full_logo.png")} className="sia-full-logo"/>
                <div className="home-ellipse"/>
                <div className="home-content">
                    <Switch>
                        <Route path="/main/preflight" exact component={() => (<PreFlight/>)}/>
                        <Route path="/main/sia" exact component={() => (<Chatting/>)}/>
                        <Route path="/main/checkin" exact component={() => (<CheckIn/>)}/>
                        <Route path="/main/home" exact component={() => (<Home/>)}/>
                        <Route path="/main/home-business-class" exact component={() => (<HomeBusinessClass/>)}/>
                        <Route path="/main/krisshop" exact component={() => (<KrisShop/>)}/>
                        <Route path="/main/krisworld-entertainment" exact component={() => (<KrisworldEntertainment/>)}/>
                        
                        
                    </Switch>
                </div>
                
            </div>
        );
    }
}

export default withRouter(Main);