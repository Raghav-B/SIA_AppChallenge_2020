import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import "./CheckIn.css";

class CheckIn extends React.Component {
    render() {
        return (
            <div className="checkin-container">
                <div className="progress-bar-container">
                    <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
                    <br/>
                    <span className="flight-text">Your flight <b>SQ38</b> departs in 5 hrs 15 mins</span>
                    <br/>

                    <div className="actual-bar">
                        <div className="full-bar"></div>
                        <div className="elapsed-bar-checkin  bar-grow"></div>
                        
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
                            {"left": "140px",
                            "top": "129px"}}>
                            2h 50m
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
                    <img className="sia-face" src={require("./imgs/sia_bubble.png")}/>
                    <img className="message-box" src={require("./imgs/BG.png")}/>
                    <p className="message-box-text-checkin">Check-In is now open. You may use the QR code below to self check-in and 
                    print out your boarding pass.</p>
                </div>

                <img src={require("./imgs/boarding_qr_code.png")} style={
                    {"width": "110%"}
                }/>

                <div className="traveller-icons">
                    <img src={require("./imgs/traveller_white.png")}/>
                    <img src={require("./imgs/traveller_white.png")}/>
                    <img src={require("./imgs/traveller_white.png")}/>
                    <img src={require("./imgs/traveller_white.png")}/>
                </div>

                <p className="info-text">There are currently <span style={{"color": "#FF9B21", "font-weight": "bold"}}>0 </span>people at your check-in
                Expected waiting time: <span style={{"color": "#FF9B21", "font-weight": "bold"}}>15 mins</span></p>
                    
                <p className="info-text">Once you arrive at <span style={{"color": "#FF9B21", "font-weight": "bold"}}>Changi Airport T2</span>,
                please drop off at <span style={{"color": "#FF9B21", "font-weight": "bold"}}>Gate 4 </span> and proceed to
                <span style={{"color": "#FF9B21", "font-weight": "bold"}}> counter 6 </span></p>

                <div className="gate-details-container">
                    <div className="detail">
                        <span className="detail-title">Gate</span>
                        <span className="detail-num">4</span>
                    </div>
                    <div className="detail">
                        <span className="detail-title">Counter</span>
                        <span className="detail-num">6</span>
                    </div>
                </div>

                <br/><br/>
            </div>
        );
    }
}
export default withRouter(CheckIn);