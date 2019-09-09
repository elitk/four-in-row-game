import React, { useState } from 'react';
import '../../App.css'

export default function Hole(props){
    return <div className="Hole"><div className={props.value}></div></div>
  }