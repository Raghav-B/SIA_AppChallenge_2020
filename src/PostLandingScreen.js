import React, { useContext } from 'react';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom';

class PostLandingScreen extends React.Component {
    render() {
        return (
            <div>
                <img src={require("./imgs/post_landing_screen.png")} style={{"width": "100%"}}/>
            </div>
        );
    }
}

export default PostLandingScreen;