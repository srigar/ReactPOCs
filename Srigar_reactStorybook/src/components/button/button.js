import React from 'react';
import "../button/button.css"

export default props => {
    const { btnText = "Default Value", className, style, onClick = () => {} } = props;

    return <button className={className} style={style} title={btnText} onClick={onClick} >{btnText}</button>
    
}