import React, { useState, useEffect } from "react";
import Display from './Display';

const Dashboard = () => {

    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);


    const handleBall = () => {
        if (ball < 3) {
            setBall(ball + 1);
        } else {
            setBall(0)
            setStrike(0)
        }
    }

    const handleStrikes = () => {
        if (strike < 2) {
            setStrike(strike + 1);
        }
        else {
            setStrike(0);
            setBall(0);
        }
    }

    const handleFoul = () => {
        if (strike < 2) {
            setStrike(strike + 1)
        }
    }

    const handleHit = () => {
        setStrike(0);
        setBall(0);
    }

    return (
        <div>
            <Display balls={ball} strikes={strike}>

            </Display>
            <div className="btns">
                <button onClick={() => handleBall()} id="balls" className='ball-btn'>Ball</button>
                <button onClick={() => handleStrikes()} className='strike-btn'>Strike</button>
                <button onClick={() => handleHit()} className='hit-btn'>Hit</button>
                <button onClick={() => handleFoul()} className='foul-btn'>Foul</button>
            </div>
        </div>
    );
}
export default Dashboard;