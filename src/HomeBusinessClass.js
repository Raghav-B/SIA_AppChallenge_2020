import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import "./HomeBusinessClass.css";

class HomeBusinessClass extends React.Component {
    render() {
        return (
            <div className="home-business-class-container">
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
            
                <div className="sia-intro-message">
                    <img className="sia-face" src={require("./imgs/sia_bubble.png")}/>
                    <img className="message-box" src={require("./imgs/BG.png")}/>
                    <p className="message-box-text">Your seat lets you enter the <span style={
                        {"color": "#2834A5"}
                    }>SilverKris Lounge</span>! Here is some info about the lounge.</p>
                </div>

                <img src={require("./imgs/silverkris_logo.png")} style={
                    {"width": "110%"}
                }></img>

                <p className="info-text" style={{"width": "90%"}}>Thank you for choosing to fly Business Class with us, please proceed
                 to book seating for the SilverKris Lounge.</p>

                <img src={require("./imgs/silverkris_map.png")} style={
                    {"width": "120%"}
                }></img>

                <br/>
                <span style={
                    {"font-weight": "bold",
                        "font-size": "36px",
                        "line-height": "42px",
                        "text-align": "center"
                    }
                }>Easy Book</span>
                <br/>

                <div className="booking-container">
                    <img src={require("./imgs/buggy.png")}/>
                    <span style={{
                        "font-size": "24px",
                        "line-height": "28px",
                        "text-align": "center"
                    }}>Buggy Service</span>
                    <div className="book-button">
                        Book
                    </div>
                </div>

                <div className="booking-container">
                    <img src={require("./imgs/shower.png")}/>
                    <span style={{
                        "font-size": "24px",
                        "line-height": "28px",
                        "text-align": "center"
                    }}>Shower</span>
                    <div className="book-button">
                        Book
                    </div>
                </div>

                <br/>
                <span style={
                    {"font-weight": "bold",
                        "font-size": "36px",
                        "line-height": "42px",
                        "text-align": "center"
                    }
                }>Kris Entertainment Hub</span>
                <br/>

                <div className="entertainment-hub-container">
                    <img src={require("./imgs/tv_icon.png")}/>
                    <img src={require("./imgs/music_icon.png")}/>
                    <img src={require("./imgs/book_icon.png")}/>
                </div>

                <br/><br/>
            </div>
        );
    }
}

export default withRouter(HomeBusinessClass);