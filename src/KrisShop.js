import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import "./KrisShop.css";

class KrisShop extends React.Component {
    render() {
        return(
            <div className="krisshop-container">
                <div className="progress-bar-container">
                    <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
                    <br/>
                    <span className="flight-text">Your flight <b>SQ83</b> departs in 3 hrs 15 mins</span>
                    <br/>

                    <div className="actual-bar">
                        <div className="full-bar"></div>
                        <div className="elapsed-bar-home  bar-grow"></div>
                        
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
                            {"left": "205px",
                            "top": "129px"}}>
                            1h 15m
                        </div>

                        <div className="time-left-text init-invisible" style={
                            {"left": "270px",
                            "top": "129px"}}>
                            2h
                        </div>
                    </div>
                    <hr/>
                </div>

                <span className="info-text init-left" style={
                    {"width": "90%"}
                }>Here are some specially curated deals just for <span style={{"color": "#FF9B21", "font-weight": "bold"}}>you</span>:</span>
                <br/>

                <img src={require("./imgs/krisshop_mockup.png")} className="init-right" style={{"width": "140%"}}/>
                <br/><br/>
            </div>
        );
    }
}

export default withRouter(KrisShop);