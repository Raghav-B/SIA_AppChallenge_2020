import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import "./InFlightScreen.css";
import "./Animations.css";

class InFlightScreen extends React.Component {
    render() {
        return (
            <div className="inflight-container">
                <div className="progress-bar-container">
                    <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
                    <br/>
                    <span className="flight-text">Flight SQ38 is now en route to <b>LAX Terminal B</b></span>

                    <div className="actual-bar">
                        <div className="full-bar"></div>
                        <div className="elapsed-bar-inflight bar-grow"></div>
                        
                        <div className="indicator-line" style={
                                {"left": "310px",
                                "top": "140px"}}>
                        </div>
                        <div className="indicator-text" style={
                            {"left": "273px",
                            "top": "170px"}}>
                            Arrived at LAX
                        </div>

                        <img src={require("./imgs/plane_icon.png")} className="flight-icon init-left"/>
                    </div>
                    <hr/>
                </div>

                <div className="sia-intro-message init-left">
                    <img className="sia-face" src={require("./imgs/sia_bubble.png")}/>
                    <img className="message-box" src={require("./imgs/BG.png")}/>
                    <p className="message-box-text-inflight">Would you like to continue where you left off?</p>
                </div>

                <br/>
                <img src={require("./imgs/inception_sync.png")} className="sync-image init-right"/>

                <p className="info-text init-right">Quick access buttons</p>

                <div className="access-buttons init-right">
                    <img src={require("./imgs/attendant.png")}/>
                    <img src={require("./imgs/light.png")}/>
                    <img src={require("./imgs/cancel.png")}/>
                </div>
            </div>
        );
    }
}

export default withRouter(InFlightScreen);