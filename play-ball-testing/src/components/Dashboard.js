import React, { useState, useEffect } from "react";

const PlayBall = () => {


    const handleStrike = () => {
        if (props.strikes < 2) {
            props.setStrikes(props.strikes + 1);
        }
        else if (props.strikes === 2) {
            props.setStrikes(0);
            // props.setFouls(0);
            props.setBalls(0);
        }
    }


}
export default PlayBall;