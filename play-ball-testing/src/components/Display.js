import React, { useState, useEffect } from "react";

const Display = (props) => {
    console.log('this is display', props);




    return (
        <div className="display-board">


            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
            <p></p>
            <p></p>

        </div>
    );


};
export default Display;