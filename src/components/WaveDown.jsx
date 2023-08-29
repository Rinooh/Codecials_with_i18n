import React from 'react';
import Wave from 'react-wavify';

const WaveDown = () => {
  return (
    <Wave fill="url(#gradientV2)"
        className='sm:h-96 -mb-44 z-10' 
        style={{ transform: 'rotate(180deg)', height: '200px' }}
        paused={false}
        options={{
        height: 50,
        amplitude: 100,
        speed: 0.10,
        points: 4
        }}>
        <defs>
        <linearGradient id="gradientV2" gradientTransform="rotate(90)">
            <stop offset="10%"  stopColor="#00397A" />
            <stop offset="90%" stopColor="#00244C" />
        </linearGradient>
        </defs>
    </Wave>
  )
}

export default WaveDown