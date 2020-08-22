import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom'

import "./ProgressBar.css";

function ProgressBar(props) {
    return (
        <div className="progress-bar-container">
            <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
            <br/>
            <span className="flight-text">Your flight <b>{props.flightNumber}</b> departs in {props.timeLeft}</span>
            <br/>

            <div className="actual-bar">
                <div className="full-bar"></div>
                <div className="elapsed-bar"></div>
                
                <div className="indicator-line" style={
                        {"left": "50px",
                        "top": "170px"}}>
                </div>
                <div className="indicator-text" style={
                    {"left": "10px",
                    "top": "198px"}}>
                    Check-In opens<br/>
                    1000
                </div>

                <div className="indicator-line" style={
                        {"left": "270px",
                        "top": "170px"}}>
                </div>
                <div className="indicator-text" style={
                    {"left": "240px",
                    "top": "198px"}}>
                    Gate opens<br/>
                    1400
                </div>
                
                <div className="indicator-line" style={
                        {"left": "340px",
                        "top": "150px"}}>
                </div>
                <div className="indicator-text" style={
                    {"left": "313px",
                    "top": "119px"}}>
                    Departs at<br/>
                    1600
                </div>
                
                <div className="time-left-text" style={
                    {"left": "215px",
                    "top": "167px"}}>
                    1h 15m
                </div>

                <div className="time-left-text" style={
                    {"left": "310px",
                    "top": "167px"}}>
                    2h
                </div>
                
            </div>

            <hr/>
        </div>
    );
}

export default withRouter(ProgressBar);