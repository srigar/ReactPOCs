import React from 'react';
import "../textField/inputField.css";

export default props => {
    const { placeholder, className, style } = props;
    return <input placeholder={placeholder} className={className} style={style} />
}