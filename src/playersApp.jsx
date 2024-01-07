import { useState } from 'react'
import './App.scss'
import Player from './components/udemy/scooreKeeper/player'


function App() {


  return (
    <>
        <ul>
            <Player numPlayers={20} target={5}/>
        </ul>
    </>
  )
}

export default App
