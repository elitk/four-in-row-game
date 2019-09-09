import React, { useState } from 'react';
import Hole from '../hole/Hole';
import '../../App.css'


export default function Slat(props){
    return <div className="Slat" onClick={() => props.handleClick()}>
        {/* {[...Array()]} */}
      {[...Array(props.holes.length)].map((x, j) => 
        <Hole key={j} value={props.holes[j]}></Hole>)}
      </div>
 }
