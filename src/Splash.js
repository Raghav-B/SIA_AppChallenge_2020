import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom'

import "./Splash.css";
import "./Animations.css";

function Splash() {
    return (
        <div className="splash-background">
            <div className="ellipse2"/>
            <div className="ellipse3"/>
            <div className="ellipse4"/>
            <div className="ellipse5"/>
            <div className="ellipse6"/>
            <div className="ellipse7"/>
            <div className="ellipse8"/>

            <img src={require("./imgs/sia_logo.png")} className="sia-logo"></img>

            <Link to="/signin" className="checkin-button">
                <span className="checkin-text">Check In</span>
            </Link>
        </div>
    );
}

export default withRouter(Splash);