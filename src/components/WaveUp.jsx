import React from 'react';
import Wave from 'react-wavify';

const WaveUp = () => {
  return (
    <Wave fill="url(#gradient)" 
        className='-mb-2 -mt-44 h-52 relative'
        style={{ 'zIndex': '-1' }}
        paused={false}
        options={{
        height: 50,
        amplitude: 100,
        speed: 0.10,
        points: 3
        }}>
        <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%"  stopColor="#00397A" />
            <stop offset="90%" stopColor="#00244C" />
        </linearGradient>
        </defs>
    </Wave>
  )
}

export default WaveUp