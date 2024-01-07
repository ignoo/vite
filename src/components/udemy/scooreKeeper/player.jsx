import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Player({numPlayers, target}) {

    
    const playersStart = new Array(numPlayers).fill(0);
    const [allPlayers, setAllPlayers] = useState(playersStart);

    const addPoint = index => {
        const updatedPoints = allPlayers.map((item, i) => i === index ? item + 1 : item);
        setAllPlayers(updatedPoints);
    }

    const reset = _ => setAllPlayers(playersStart);
    
    // addPoint(1);
    // console.log(allPlayers)
    


    return <>
        <ul>
            {allPlayers.map((pl, i) => <li key={uuid()}>Player{i+1}: {allPlayers[i]} <button onClick={_=>addPoint(i)}>+1</button> {allPlayers[i] >= target && 'WINNER!!!!'}</li>)}
        </ul>
        <button onClick={reset}>Reset</button>
    </>



}