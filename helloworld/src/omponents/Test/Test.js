import React from 'react';
import  { useState } from 'react';
import "./Test.css";
import Test1 from '../Test1/Test1';


function Test(p) {

    const [preferdColor,setColor]=useState("red");
    const greenClickhandler=()=>{
        //setColor('green');
        p.f1('green');
    }

        
  return (
    <div>
      
      
      <input type='button' value="Green" onClick={greenClickhandler}/>
      <Test1 f2={p.f1}></Test1>
    </div>
  )
}

export default Test
