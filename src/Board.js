import React from 'react';
import "./Board.css"

function Board(props){
  console.log(props)
  let buttons = props.instruments.map( (bol, i) =>
    <div className="col-sm" key={Math.random()}>
        <button className={bol ? "sound1 selected" : "sound1"}>{i}</button>
    </div>
);



  return(

    <div className="row">
      {buttons}
    </div>

  )
}
export default Board;
