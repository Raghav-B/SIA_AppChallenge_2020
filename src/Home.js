import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom'

import "./Home.css";

import ProgressBar from "./ProgressBar.js";

function Home() {
    return (
        <div className="home-background">
            <img src={require("./imgs/sia_full_logo.png")} className="sia-full-logo"/>
            <div className="home-ellipse"/>

            <ProgressBar></ProgressBar>


        </div>
    );
}

export default withRouter(Home);