import {useState} from 'react';


export default function ColorSquare(indiex) {

    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randColor = _ => { 
        return `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
    }

    const[sqColor, setSqColor] = useState(randColor());

    const colorChanger = _ => setSqColor(col => col = randColor());


    return <>
        <span key={indiex} className='sq' style={{backgroundColor: sqColor}} onClick={colorChanger}>gggg</span>
    </>

    
}