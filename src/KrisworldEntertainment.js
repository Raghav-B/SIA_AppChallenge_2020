import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom'

import "./KrisworldEntertainment.css";

class KrisworldEntertainment extends React.Component {
    render() {
        return (
            <div className="krisworld-entertaiment-container">
                <div className="progress-bar-container">
                    <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
                    <br/>
                    <span className="flight-text">Your flight <b>SQ38</b> departs in 4 hrs 40 mins</span>
                    <br/>

                    <div className="actual-bar">
                        <div className="full-bar"></div>
                        <div className="elapsed-bar-krisshop"></div>
                        
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
                            2h 40m
                        </div>

                        <div className="time-left-text" style={
                            {"left": "270px",
                            "top": "129px"}}>
                            2h
                        </div>
                    </div>

                    <hr/>
                </div>
            </div>
        );
    }
}

export default withRouter(KrisworldEntertainment);