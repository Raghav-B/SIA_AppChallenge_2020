import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom'

import "./SignIn.css";
import "./Animations.css";


class SignIn extends React.Component {
    componentDidMount() {
        document.getElementById("name").value = "Ojus Sharma"
        document.getElementById("bookingref").value = "TEST123";
        document.getElementById("ticketnum").value = "TST1234567";
    }
    
    render() {
        return (
            <div className="signin-background">
                <div className="ellipse init-top"/>

                <div className="content-box">
                    <span className="signin-title init-invisble">Sign In</span>

                    <div className="entry-container init-left">
                        <p>Name</p>
                        <input id="name"></input>
                        <br/><br/>

                        <p>Booking Reference</p>
                        <input id="bookingref"></input>
                        <br/><br/>

                        <p>Ticket Number</p>
                        <input id="ticketnum"></input>
                        <br/><br/>

                        <Link to="/main/preflight" style={
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
}

export default withRouter(SignIn);