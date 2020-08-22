import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter, Link } from "react-router-dom";

import Splash from "./Splash.js";
import SignIn from "./SignIn.js";
import Main from "./Main.js";

class App extends React.Component {
  
  componentDidMount() {
    this.props.history.listen(function (location, action) {
      switch (location.pathname) {
        case "/":
        case "/signin":
          var myDiv = document.getElementById("screen");
          myDiv.scrollTop = 0;
          myDiv.style.overflowY = "hidden";
          break;
        default:
          document.getElementById("screen").style.overflowY = "scroll";
          break;
      }
    });
  }

  render() {
    return (
        <div className="window">

          <div className="debug-controls">
            <h3>Debug Menu</h3>
            Please follow the sequence of links below to see the entire user journey from start to finish.<br/><br/>
            <Link to="/">1. User opens app</Link><br/>
            <Link to="/signin">2. User logs into app</Link><br/>
            <Link to="/main/preflight">3. User at home before leaving to airport</Link><br/>
            <Link to="/main/sia">4. User chatting with Sia</Link><br/>
            <Link to="/main/checkin">5. User checking in at counter</Link><br/>
            <Link to="/main/home">6-1. Economy class user at home screen</Link>
            <Link to="/main/home-business-class">6-2. Business class user at home screen</Link><br/>
            <Link to="/main/krisshop">7. Krisshop and other shopping</Link><br/>
            <Link to="/main/krisworld-entertainment">8. Krisworld entertainment</Link><br/>
            <Link to="/main/inflight">9. In-flight screen</Link><br/>
            <Link to="/main/post-landing">10. Post landing screen</Link><br/>
            <Link to="/main/post-langing/luggage">11. Post landing screen - luggage collection</Link>
          </div>

          <div className="screenContainer">
            <div className="screen" id="screen">
              
              <Switch>
                <Route path="/" exact component={() => (<Splash/>)}/>
                <Route path="/signin" exact component={() => (<SignIn/>)}/>

                <Route path="/main/preflight" exact component={() => (<Main/>)}/>
                <Route path="/main/sia" exact component={() => (<Main/>)}/>
                <Route path="/main/checkin" exact component={() => (<Main/>)}/>
                <Route path="/main/home" exact component={() => (<Main/>)}/>
                <Route path="/main/home-business-class" exact component={() => (<Main/>)}/>
                <Route path="/main/krisshop" exact component={() => (<Main/>)}/>
                <Route path="/main/krisworld-entertainment" exact component={() => (<Main/>)}/>

              </Switch>
            
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(App);
