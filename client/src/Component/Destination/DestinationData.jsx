import React from "react";
import "./Destination.css";
const DestinationData = (props) => {
    return (
        <div className={props.className}>
            <div className='des-text'>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            
            <div className='image'>
                <img alt='img' src={props.n1} />
                <img alt='img' src={props.n2} />
            </div>
         </div>
      
    );
}

export default DestinationData;
