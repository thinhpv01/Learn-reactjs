import React, { useState } from 'react';



function ColorBox(props) {
    const [color, setColor] = useState('white')
    console.log(color)
    return (
        <div>
            {color}
            <button onClick={() => setColor('black')}>Black</button>
            <button onClick={() => setColor('white')}>White</button>
        </div>
    );
}

export default ColorBox;