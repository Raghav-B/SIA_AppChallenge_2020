import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom'

import "./KrisworldEntertainment.css";

class KrisworldEntertainment extends React.Component {
    render() {
        return (
            <div className="krisworld-entertainment-container">
                <div className="progress-bar-container">
                    <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
                    <br/>
                    <span className="flight-text">Your flight <b>SQ38</b> departs in 1 hrs 15 mins</span>
                    <br/>

                    <div className="actual-bar">
                        <div className="full-bar"></div>
                        <div className="elapsed-bar-krisworld-entertainment  bar-grow"></div>
                        
                        <div className="indicator-line" style={
                                {"left": "50px",
                                "top": "135px"}}>
                        </div>
                        <div className="indicator-text" style={
                            {"left": "10px",
                            "top": "165px"}}>
                            Check-In opens<br/>
                            1200
                        </div>

                        <div className="indicator-line" style={
                                {"left": "250px",
                                "top": "135px"}}>
                        </div>
                        <div className="indicator-text" style={
                            {"left": "220px",
                            "top": "165px"}}>
                            Gate opens<br/>
                            1500
                        </div>
                        
                        <div className="indicator-line" style={
                                {"left": "300px",
                                "top": "115px"}}>
                        </div>
                        <div className="indicator-text" style={
                            {"left": "273px",
                            "top": "86px"}}>
                            Departs at<br/>
                            1700
                        </div>
                        
                        <div className="time-left-text" style={
                            {"left": "280px",
                            "top": "129px"}}>
                            1h 15m
                        </div>
                    </div>

                    <hr/>
                </div>
                
                <div className="sia-intro-message">
                    <img className="sia-face" src={require("./imgs/sia_bubble.png")}/>
                    <img className="message-box" src={require("./imgs/BG.png")}/>
                    <p className="message-box-text" style={{"top": "305px"}}>You have enough time to catch a movie!</p>
                </div>

                <p className="info-text">
                    Here are some of our top picks from the 
                    <span style={{"color": "#FF9B21", "width": "90%"}}> KrisWorld</span> catalogue.
                </p>
            </div>
        );
    }
}

export default withRouter(KrisworldEntertainment);