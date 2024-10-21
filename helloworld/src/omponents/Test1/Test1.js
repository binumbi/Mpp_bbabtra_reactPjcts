import React from 'react'

import { useDispatch } from 'react-redux'

function Test1(p2) {
  const disp =useDispatch();
    const redClickhandler = ()=>{
        //setColor('red');
       // p2.f2('red');
        disp({type:'1',value:'red'});
      }
  return (
    <div>
          <input type='button' value="Red" onClick={redClickhandler}/>

      
    </div>
  )
}

export default Test1
