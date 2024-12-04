import React, { useState, useEffect } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0); // Time in milliseconds
    const [isRunning, setIsRunning] = useState(false);

    // Effect to handle the stopwatch timer
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10); // Update every 10 milliseconds
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer); // Cleanup timer on component unmount or isRunning change
    }, [isRunning]);

    // Handle Start/Stop button
    const handleStart = () => {
        setIsRunning(!isRunning);
    };

    // Handle Reset button
    const handleRestart = () => {
        setIsRunning(false);
        setTime(0);
    };

    // Format time into MM:SS:MS format
    const formatTime = () => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Stopwatch Timer</h1>
            <h1>{formatTime()}</h1>
            <br />
            <button onClick={handleStart}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleRestart} style={{ marginLeft: '10px' }}>
                Reset
            </button>
        </div>
    );
}

export default Stopwatch;
