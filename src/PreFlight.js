import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import "./PreFlight.css";
import "./Animations.css";

class PreFlight extends React.Component {

    render() {
        return (
            <div className="pre-flight-container">
                <div className="progress-bar-container">
                    <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
                    <br/>
                    <span className="flight-text">Your flight <b>SQ38</b> departs in 5 hrs 15 mins</span>
                    <br/>

                    <div className="actual-bar">
                        <div className="full-bar"></div>
                        <div className="elapsed-bar  bar-grow"></div>
                        
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
                        
                        <div className="time-left-text init-invisible" style={
                            {"left": "25px",
                            "top": "129px"}}>
                            <span style={{"color": "white"}}>15</span>m
                        </div>

                        <div className="time-left-text init-invisible" style={
                            {"left": "150px",
                            "top": "129px"}}>
                            3h
                        </div>

                        <div className="time-left-text init-invisible" style={
                            {"left": "270px",
                            "top": "129px"}}>
                            2h
                        </div>
                    </div>

                    <hr/>
                </div>
                
                <div className="sia-intro-message init-left">
                    <img className="sia-face" src={require("./imgs/sia_bubble.png")}/>
                    <img className="message-box" src={require("./imgs/BG.png")}/>
                    <p className="message-box-text-preflight">Welcome! My name is <span style={
                        {"color": "#FF9B21", "font-weight": "bold"}}
                    >Sia</span> and I will be your personal assistant for this journey!</p>
                </div>

                <div className="checklist-container init-right">
                    <p className="make-sure-text">Make sure you have checked all this before leaving:</p>
                    <div className="checklist-item-container">
                        <img src={require("./imgs/passport.png")}/>
                        <span>Passport</span>
                        <input type="checkbox"></input>
                    </div>
                    <div className="checklist-item-container">
                        <img src={require("./imgs/visa.png")}/>
                        <span>Travel Visa</span>
                        <input type="checkbox"></input>
                    </div>
                    <div className="checklist-item-container">
                    <   img src={require("./imgs/ticket.png")}/>
                        <span>Flight Ticket</span>
                        <input type="checkbox"></input>
                    </div>
                    <div className="checklist-item-container">
                        <img src={require("./imgs/luggage.png")}/>
                        <span>Luggage</span>
                        <input type="checkbox"></input>
                    </div>
                    <div className="checklist-item-container">
                        <img src={require("./imgs/bulb.png")}/>
                        <span>Turned off all appliances</span>
                        <input type="checkbox"></input>
                    </div>
                </div>

                <br/>

                <div className="traveller-icons init-left">
                    <img src={require("./imgs/traveller_white.png")}/>
                    <img src={require("./imgs/traveller_white.png")}/>
                    <img src={require("./imgs/traveller_white.png")}/>
                    <img src={require("./imgs/traveller_white.png")}/>
                </div>

                <p className="info-text init-left">There are currently <span style={{"color": "#FF9B21", "font-weight": "bold"}}>0 </span>people at your check-in
                Expected waiting time: <span style={{"color": "#FF9B21", "font-weight": "bold"}}>15 mins</span></p>
                    
                <p className="info-text init-left">Once you arrive at <span style={{"color": "#FF9B21", "font-weight": "bold"}}>Changi Airport T2</span>,
                please drop off at <span style={{"color": "#FF9B21", "font-weight": "bold"}}>Gate 4 </span> and proceed to
                <span style={{"color": "#FF9B21", "font-weight": "bold"}}> counter 6 </span></p>

                <div className="gate-details-container init-left">
                    <div className="detail">
                        <span className="detail-title">Gate</span>
                        <span className="detail-num">4</span>
                    </div>
                    <div className="detail">
                        <span className="detail-title">Counter</span>
                        <span className="detail-num">6</span>
                    </div>
                </div>

                <p className="info-text init-left" style={{"width": "90%"}}>It will take 20 mins for you to reach Changi Terminal 2. Do remember
                 to arrange transport!</p>

                <img className="preflight-map init-left" src={require("./imgs/preflight-map.png")}/>
                <br/><br/>
            </div>
        );
    }
}

export default withRouter(PreFlight);