import { useState } from 'react'
import { Stage, Text, useTick } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js';
import RotatingTest from './RotatingTest';

function Sample3() {
    return (
        <Stage width={300} height={300} options={{
            backgroundAlpha: 0.8
        }}>
            <RotatingTest />
        </Stage>
    )
}


export default Sample3;