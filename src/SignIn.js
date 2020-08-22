import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom'

import "./SignIn.css";
import "./Animations.css";

function SignIn() {
    return (
        <div className="signin-background">
            <div className="ellipse"/>

            <div className="content-box">
                <span className="signin-title">Sign In</span>

                <div className="entry-container">
                    <p>Name</p>
                    <input></input>
                    <br/><br/>

                    <p>Booking Reference</p>
                    <input></input>
                    <br/><br/>

                    <p>Ticket Number</p>
                    <input></input>
                    <br/><br/>

                    <Link to="/home" style={
                            {"text-decoration": "none",
                            "font-size": "18px"}}>
                        <div className="login-button">
                            Log In
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SignIn);