import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import "./KrisShop.css";

function KrisShop() {
    return (
        <div className="krisshop-container">
            <p className="krisshop-invite">
                Since you still have some time, why not do some shopping?
            </p>

            <div className="krisshop-panel"  style={{"padding-left": "5%", "padding-right": "5%"}}>
                <img src={require("./imgs/krisshop.png")}/>
            </div>

            <div className="krisshop-panel">
                <p>
                    Get 10% off all your makeup needs!
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

export default withRouter(KrisShop);