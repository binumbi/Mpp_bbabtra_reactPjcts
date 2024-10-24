import React from 'react'
import {useSelector} from 'react-redux';
import { selectCounter } from '../Selectors/selectors';

function COunt() {
  const counterValue = useSelector((state) => state.counter)

  return (
    <div>
    <p>Count:{counterValue}</p>

    </div>
  )
}

export default COunt