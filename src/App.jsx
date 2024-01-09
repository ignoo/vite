import { useEffect, useState } from 'react'
import './App.scss'
import Popup from './components/timer/Popup';

function App() {
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [isRunning, setIsRunning] = useState(false);

    const [selectedHours, setSelectedHours] = useState("");
    const [selectedMinutes, setSelectedMinutes] = useState("");
    const [selectedSeconds, setSelectedSeconds] = useState("");

    const [popupOn, setPopupOn] = useState(false);

    const [destytojoClass, setDestytojoClass] = useState('hideD');
    const [mentoriausClass, setMentoriausClass] = useState('hideM');

    const laikasAudio = new Audio('../audio/laikasNesikeicia.mp3');
    const katinukaiAudio = new Audio('../audio/katinukai.mp3');
    const kaipSekasiAudio = new Audio('../audio/kaipSekasi.mp3');
    const viskasAudio = new Audio('../audio/viskas.mp3');
    
    const hideDestytoja = _ => {
        setTimeout(() => {
        setDestytojoClass('hideD');
        }, 4000);
    }

    const hideMentoriu = _ => {
        setTimeout(() => {
            setMentoriausClass('hideM');
        }, 4000);
    }

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
            setHours("00");
            setMinutes("00");
            setSeconds("00");
            showPopup();
            viskasAudio.play();
        }
        return () => clearInterval(interval);
    }, [seconds, minutes, hours, isRunning])

    useEffect(_ => {
        let playKatinukai;
        if(isRunning) {
            setTimeout(() => {            
            playKatinukai = setInterval(_ => {
                katinukaiAudio.play();
                setDestytojoClass('showD');
                hideDestytoja();                
            }, 10000);
            }, 5000);
        }
        return () => clearInterval(playKatinukai); 
    }, [isRunning])


    useEffect(_ => {
        let playSekasi;
        if(isRunning) {
            playSekasi = setInterval(_ => {
                kaipSekasiAudio.play();
                setMentoriausClass('showM');
                hideMentoriu();                
            }, 10000);
        }
        return () => clearInterval(playSekasi);
    }, [isRunning])


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

    const startTimer = _ => {
        setIsRunning(true);
    }

    const pauseTimer = _ => {
        setIsRunning(false);
        laikasAudio.play();
    }

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
                <div className='juosta'>
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
                </div>
                <button className='set-btn' onClick={setTimer}>NUSTATYTI</button>
            </div>
            <Popup popupOn={popupOn} setPopupOn={setPopupOn}/>
            <div className='pics-container'>
                <div className={`destytojas ${destytojoClass}`}>
                    <img src="../pics/destytojastransparent.png" alt="destytojas" />
                </div>
                <div className={`mentorius ${mentoriausClass}`}>
                    <img src="../pics/mentortransparent.png" alt="mentorius" />
                </div>
            </div>
          </div>
          
      </>
    )

}
  
  export default App