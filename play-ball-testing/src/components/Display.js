import React, { useState, useEffect } from "react";

const Display = (props) => {
    console.log('this is display', props);

    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [hit, setHit] = useState(0);
    const [foul, setFoul] = useState(0);

    return (
        <div className="display-board">
            <div className="btns">
                <button onclick={() => setBall(ball + 1)} className='ball-btn'>Ball</button>
                <button onclick={() => setStrike(strike + 1)} className='strike-btn'>Strike</button>
                <button onclick={() => setHit(strike + 1)} className='hit-btn'>Hit</button>
                <button onclick={() => setFoul(strike + 2)} className='foul-btn'>Foul</button>
            </div>

        </div>
    );


};
export default Display;