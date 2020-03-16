import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player.js';
import Board from './Board.js';

function App() {
  const [drums, setDrums] = useState([false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
  const [sticks, setSticks]= useState([true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false])
  return(

    <>
      <Player url="https://freesound.org/data/previews/344/344266_5121236-lq.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
    <Board instruments={drums}/>
    <Board instruments={sticks}/>
    <Board instruments={drums}/>
    <Board instruments={drums}/>
    <Board instruments={drums}/>
    <Board instruments={drums}/>
    <Board instruments={drums}/>
    <Board instruments={drums}/>
    <Board instruments={drums}/>
    <Board instruments={drums}/>
    </>
  );
}

export default App;
