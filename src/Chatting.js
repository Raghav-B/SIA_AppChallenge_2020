import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import "./Chatting.css";

class Chatting extends React.Component {

    render() {
        return (
            <div className="chatting-container">
                <div className="progress-bar-container">
                    <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
                    <br/>
                    <span className="flight-text">Your flight <b>SQ38</b> departs in 5 hrs 15 mins</span>
                    <br/>

                    <div className="actual-bar">
                        <div className="full-bar"></div>
                        <div className="elapsed-bar"></div>
                        
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
                            {"left": "25px",
                            "top": "129px"}}>
                            <span style={{"color": "white"}}>15</span>m
                        </div>

                        <div className="time-left-text" style={
                            {"left": "150px",
                            "top": "129px"}}>
                            3h
                        </div>

                        <div className="time-left-text" style={
                            {"left": "270px",
                            "top": "129px"}}>
                            2h
                        </div>
                    </div>

                    <hr/>
                </div>

                <div className="sia-intro-message">
                    <img className="sia-face-sia" src={require("./imgs/sia_bubble.png")}/>
                    <img className="message-box-sia" src={require("./imgs/BG.png")}/>
                    <p className="message-box-text-sia" style={
                        {"left": "140px", "top": "300px"}
                    }>Hi! What would you like to talk about?</p>
                </div>

                <div className="sia-intro-message">
                    <img className="message-box-sia" src={require("./imgs/Vector.png")}/>
                    <div className="user-icon">
                        <span>OS</span>
                    </div>
                    <p className="message-box-text-sia" style={
                        {"left": "35px", "top": "393px", "color": "white", "width": "60%"}
                    }>How much luggage I am allowed to carry on to the flight?</p>
                </div>

                <div className="sia-intro-message">
                    <img className="sia-face-sia" src={require("./imgs/sia_bubble.png")}/>
                    <img className="message-box-sia" src={require("./imgs/BG.png")}/>
                    <p className="message-box-text-sia" style={
                        {"left": "140px", "top": "490px"}
                    }>You are allowed 7 kg of carry-on luggage!</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Chatting);

