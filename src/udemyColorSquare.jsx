import { useState } from 'react';
import './App.scss'
import ColorSquare from './components/colorSquare';


function App() {
        
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const allSquares = [];

    for(let i = 0; i < 25; i++) {
        allSquares.push('');
    } 


    return (
        <>
            
        <div className='main'>
            <div className='container'>
                {allSquares.map((sq, i) => ColorSquare(i))}
            </div>
        </div>
        </>
    )
}

export default App
