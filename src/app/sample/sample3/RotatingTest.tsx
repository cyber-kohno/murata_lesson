import { useState, VFC } from 'react'
import { Stage, Text, useTick } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js';

const RotatingTest: VFC = () => {
    const [rotation, setRotation] = useState(0);

    useTick(delta => {
        if(delta != undefined) {
            setRotation(rotation + 0.01 * delta);
        }
    })
    return (
        <Text text="Hello World"
            x={100}
            y={100}
            rotation={rotation}
            anchor={0.5}
            style={new TextStyle({ fill: 'white' })}
        />
    )
}


export default RotatingTest;