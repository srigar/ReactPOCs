import React from 'react';
import "../banner/banner.css";

export default props => {
    const { message, style, showCloseIcon } = props;

    return <div className="banner" style={style}>
        {message}
        {showCloseIcon && <span className="close-icon">X</span>}
    </div>
}