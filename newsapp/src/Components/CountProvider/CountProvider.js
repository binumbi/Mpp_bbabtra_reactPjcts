import { createContext, useState } from "react";
import React from "react";


const countContext = createContext()

export function CountProvider({children}) {
  

    const [value,setValue]=useState(0);
    const add=()=>{
        setValue(value+1)
    }
    const minus=()=>{
        setValue(value-1)
    }
  return (
    <div>
      <countContext.Provider value={{value,add,minus}}>
        {children}
      </countContext.Provider>
    </div>
  )
}

export default countContext

