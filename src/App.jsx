import { useEffect, useState } from 'react'
import './App.scss'
import Popup from './components/timer/Popup';

function App() {
    // comment
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [isRunning, setIsRunning] = useState(false);

    const [selectedHours, setSelectedHours] = useState("");
    const [selectedMinutes, setSelectedMinutes] = useState("");
    const [selectedSeconds, setSelectedSeconds] = useState("");

    const [popupOn, setPopupOn] = useState(false);

    useEffect(_ => {
        let interval;
        if(isRunning) {
            interval = setInterval(_ => {
                if (seconds > 0) {
                    setSeconds(seconds => seconds - 1);
                } else if (minutes > 0) {
                    setMinutes(minutes => minutes - 1);
                    setSeconds(59);
                } else if (hours > 0) {
                    setHours(hours => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                }
            }, 1000);
        }
        if(hours === 0 && minutes === 0 && seconds === 1) {
            setIsRunning(false);
            showPopup()
        }
        return () => clearInterval(interval);
    }, [seconds, minutes, hours, isRunning])



    const handleHourChange = e => {
        setSelectedHours(e.target.value);
    }

    const handleMinuteChange = e => {
        setSelectedMinutes(e.target.value);
    }

    const handleSecondChange = e => {
        setSelectedSeconds(e.target.value);
    }

    const setTimer = _ => {
        if(selectedMinutes < 60 && selectedSeconds < 60) {
            selectedHours === "" ? setHours(0) : setHours(selectedHours);
            selectedMinutes === "" ? setMinutes(0) : setMinutes(selectedMinutes);
            selectedSeconds === "" ? setSeconds(0) : setSeconds(selectedSeconds);
            setSelectedHours(0);
            setSelectedMinutes(0);
            setSelectedSeconds(0); 
        }

    }

    const startTimer = _ => setIsRunning(true);

    const pauseTimer = _ => setIsRunning(false);

    const stopTimer = _ => {
        setIsRunning(false);
        setHours("00");
        setMinutes("00");
        setSeconds("00");
    }


    const showPopup = _ => {
        setPopupOn(true);
    }


    return (
      <>
          <div className='container'>
            <h1>Darbo laikmatis</h1>
            <div className='display-timer'>{hours}:{minutes}:{seconds}</div>
            <div className='buttons'>
                <button className='start-btn' onClick={startTimer}>START</button>
                <button className='pause-btn' onClick={pauseTimer} >PAUSE</button>
                <button className='stop-btn' onClick={stopTimer}>STOP</button>
            </div>
            <div className='input-container'>
                <h2>Kiek laiko dirbsite?</h2>
                <div className='input'>
                    <div className='input-hours'>
                        <input type="text" name="hours" placeholder='0' value={selectedHours} onChange={handleHourChange}/>
                        <span>val.</span>
                    </div>
                    <div className='input-minutes'>
                        <input type="text" name="minutes" placeholder='0' value={selectedMinutes} onChange={handleMinuteChange}/>
                        <span>min.</span>
                    </div>
                    <div className='input-seconds'>
                        <input type="text" name="seconds" placeholder='0' value={selectedSeconds} onChange={handleSecondChange}/>
                        <span>sek.</span>
                    </div>
                </div>
                <button className='set-btn' onClick={setTimer}>NUSTATYTI</button>
            </div>
            <Popup popupOn={popupOn} setPopupOn={setPopupOn}/>
          </div>
          
      </>
    )

}
  
  export default App