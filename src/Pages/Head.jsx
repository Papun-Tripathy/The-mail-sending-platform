import React from 'react'
import Logo from "../WebizyLogoTransparent.png";
import "../CSS/Head.css";

import ProfilePic from "../WebizyLogo.png";

function Head(props) {
    console.log(props)
    
    const { stickyHead, ...rest } = props;

    const goToProfile = () => {
        console.log("Go to profile Command");
    };

    return (
        <div id="Head" className={stickyHead ? "HomePageHead" :  "" } >
            {/* Logo */}
                <div id="HeadLogo">
                    <img src={Logo} alt="Webizy" id="HeadLogoImg" />
                </div>

            {/* Profile */}
            <div id="HeadProfile">
                <button id="HeadProfileButton" onClick={goToProfile}>
                    <img src={ProfilePic} alt="" id="HeadProfileImage" />
                    <h6 id="HeadProfileName">Prratyush Tripathy</h6>
                </button>
            </div>
        </div>
    )
}

export default Head
