import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom'

import "./Splash.css";
import "./Animations.css";

function Splash() {
    return (
        <div className="splash-background">
            <div className="ellipse2 init-left"/>
            <div className="ellipse3 init-bottom"/>
            <div className="ellipse4 init-right"/>
            <div className="ellipse5 init-left"/>
            <div className="ellipse6 init-left"/>
            <div className="ellipse7 init-top"/>
            <div className="ellipse8 init-right"/>

            <img src={require("./imgs/sia_logo.png")} className="sia-logo init-invisible"></img>

            <div className="button-container init-invisible">
                <Link to="/signin" className="checkin-button">
                    <span className="checkin-text">Check In</span>
                </Link>
            </div>
        </div>
    );
}

export default withRouter(Splash);