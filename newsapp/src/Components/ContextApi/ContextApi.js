import React, { useContext } from 'react'
import { createContext } from 'react'
import countContext from '../CountProvider/CountProvider';

function ContextApi() {
const {add,minus,value} = useContext(countContext);

  return (
    <div>
      <h1>ContextApi : {value}</h1>
      
        <button className='btn btn-primary' onClick={add}>+</button>
        <button className='btn btn-danger' onClick={minus}>-</button>
    </div>
  )
}

export default ContextApi
