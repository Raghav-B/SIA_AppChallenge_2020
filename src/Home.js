import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import "./Home.css";

function Home() {
    return (
        <div className="krisshop-container">
            <div className="progress-bar-container">
                <span className="welcome-text">Welcome Mr Ojus Sharma,</span>
                <br/>
                <span className="flight-text">Your flight <b>SQ213</b> departs in 3 hrs 15 mins</span>
                <br/>

                <div className="actual-bar">
                    <div className="full-bar"></div>
                    <div className="elapsed-bar-home"></div>
                    
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
                        {"left": "205px",
                        "top": "129px"}}>
                        1h 15m
                    </div>

                    <div className="time-left-text" style={
                        {"left": "270px",
                        "top": "129px"}}>
                        2h
                    </div>
                </div>

                <hr/>
            </div>
            
            <p className="krisshop-invite">
                Since you still have some time, why not do some shopping?
            </p>

            <div className="krisshop-panel"  style={{"padding-left": "5%", "padding-right": "5%"}}>
                <img src={require("./imgs/krisshop.png")}/>
            </div>

            <div className="krisshop-panel">
                <p>
                    Get 10% off all makeup needs!
                </p>
                <img src={require("./imgs/makeupbrush.jpg")}/>
            </div>

            <div className="traveller-icons">
                <img src={require("./imgs/traveller_black.png")}/>
                <img src={require("./imgs/traveller_black.png")}/>
                <img src={require("./imgs/traveller_white.png")}/>
                <img src={require("./imgs/traveller_white.png")}/>
            </div>

            <p className="krisshop-invite">
                There are currently <span style={{"color": "#FF9B21", "font-weight": "bold"}}>5</span> people at your gate
                Expected waiting time: <span style={{"color": "#FF9B21", "font-weight": "bold"}}>10 mins</span>
            </p>

            <p className="krisshop-invite">
                Your gate will open soon and you are the first batch to be seated, please proceed to  
                <span style={{"color": "#FF9B21", "font-weight": "bold"}}> Gate D30</span> to avoid delays.
            </p>

            <img src={require("./imgs/shop_to_gate_map.png")} className="shop-to-gate-map"></img>

            <br/><br/>
        </div>
    );
}

export default withRouter(Home);