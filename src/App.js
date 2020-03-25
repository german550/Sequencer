import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player.js';
import Board from './Board.js';

function App() {
  const falses = new Array(16).fill(false)
  const [drums, setDrums] = useState(falses.slice())
  const [sticks, setSticks]= useState(falses.slice())
  const [kick, setKick]= useState(falses.slice())
  const [tom, setTom]= useState(falses.slice())
  const [cymbal, setCymbal]= useState(falses.slice())
  const [snare, setSnare]= useState(falses.slice())
  const [ride, setRide]= useState(falses.slice())
  const [hihat, setHihat]= useState(falses.slice())
  const [tombase, setTombase]= useState(falses.slice())
  const [tom2, setTom2]= useState(falses.slice())
  const instruments = [drums, sticks, kick, tom, cymbal, snare, ride, hihat, tombase, tom2]

  // const []




  const [playing, setPlaying] = useState(false)
  const [mysound, setMysound] = useState(false)
  const isPlaying = useRef(playing)
  isPlaying.current = playing
  const instrumentsRef = useRef(instruments)
  instrumentsRef.current = instruments


  function changeDrum(num){
    let newDrums = drums.slice()
    newDrums[num] = !newDrums[num]
    setDrums(newDrums)
  }

  function changeSticks(num){
    let newSticks = sticks.slice()
    newSticks[num] = !newSticks[num]
    setSticks(newSticks)
  }

  function changeKick(num){
    let newKick = kick.slice()
    newKick[num] = !newKick[num]
    setKick(newKick)
  }

  function changeTom(num){
    let newTom = tom.slice()
    newTom[num] = !newTom[num]
    setTom(newTom)
  }

  function changeCymbal(num){
    let newCymbal = cymbal.slice()
    newCymbal[num] = !newCymbal[num]
    setCymbal(newCymbal)
  }
  function changeSnare(num){
    let newSnare = snare.slice()
    newSnare[num] = !newSnare[num]
    setSnare(newSnare)
  }

  function changeRide(num){
    let newRide = ride.slice()
    newRide[num] = !newRide[num]
    setRide(newRide)
  }

  function changeHihat(num){
    let newHihat = hihat.slice()
    newHihat[num] = !newHihat[num]
    setHihat(newHihat)
  }

  function changeTombase(num){
    let newTombase = tombase.slice()
    newTombase[num] = !newTombase[num]
    setTombase(newTombase)
  }

  function changeTom2(num){
    let newTom2 = tom2.slice()
    newTom2[num] = !newTom2[num]
    setTom2(newTom2)
  }




//   kick.forEach(mySound);
//   function mySound(value){
// if (value === true){
//   play()
//   }
// }
function playNext (){

const arrSound =["https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"]

  let instruments = instrumentsRef.current

  arrSound.forEach((url, index) =>{
  if(instruments[index][counter]){
    var audio = new Audio(url);
    audio.play();
  }
})


 if(counter === drums.length - 1){
   counter = 0
 }else{
   counter++
 }

  timer = setTimeout(playNext, 500);


}

let timer;
let counter = 0

function play(url){

    if(!playing){

      //if(drums === true){
      //  play()
      timer = setTimeout(playNext, 500);
    }else {
      clearTimeout(timer)
    }
    setPlaying(!playing)

    //  function myStopFunction() {
//  clearTimeout(myVar);


}


  return(

    <>
      <h1>{playing ? "yes" : "no"}</h1>
      <button class="on" onClick={() => play()}>play</button>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"/>
      <Player url="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"/>


      <button class="tempo">3/4</button>
      <button class="tempo">4/4</button>
      <button class="tempo">5/4</button>
      <button class="tempo">6/8</button>
    <Board instruments={drums} click={(num) => changeDrum(num)} />
    <Board instruments={sticks} click={(num) => changeSticks(num)} />
    <Board instruments={kick} click={(num) => changeKick(num)}/>
    <Board instruments={tom} click={(num) => changeTom(num)} />
    <Board instruments={cymbal} click={(num) => changeCymbal(num)}/>
    <Board instruments={snare} click={(num) => changeSnare(num)}/>
    <Board instruments={ride} click={(num) => changeRide(num)}/>
    <Board instruments={hihat} click={(num) => changeHihat(num)}/>
    <Board instruments={tombase} click={(num) => changeTombase(num)}/>
    <Board instruments={tom2} click={(num) => changeTom2(num)}/>
  </>
  );
}

export default App;
