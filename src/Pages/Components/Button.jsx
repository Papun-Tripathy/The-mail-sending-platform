import React from 'react';
import "./Button.css";

function Button({title, backColor="brown", fontColor="", margin="10px 0px", ...props }) {

    return (
        <button id="ButtonHaiYeh" style={{ "backgroundColor": backColor, color: fontColor,margin: margin }} >
            {title}
        </button>
    )
}

export default Button
