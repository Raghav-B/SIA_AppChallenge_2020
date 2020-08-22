import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom'

import "./Home.css";

import ProgressBar from "./ProgressBar.js";
import KrisShop from "./KrisShop.js";

function Home() {
    return (
        <div className="home-background">
            <img src={require("./imgs/sia_full_logo.png")} className="sia-full-logo"/>
            <div className="home-ellipse"/>

            <div className="home-content">
                <ProgressBar flightNumber={"SQ213"} timeLeft={"3 hrs 15 mins"}></ProgressBar>

                <Switch>
                    <Route path="/home" exact component={() => (<KrisShop/>)}/>
                    <Route path="/home/lounge" exact component={() => (<div></div>)}/>
                    <Route path="/home/checklist" exact component={() => (<div></div>)}/>
                    <Route path="/home/chatbot" exact component={() => (<div></div>)}/>
                    <Route path="/home/chatbot" exact component={() => (<div></div>)}/>
                </Switch>
            </div>
            
            


        </div>
    );
}

export default withRouter(Home);