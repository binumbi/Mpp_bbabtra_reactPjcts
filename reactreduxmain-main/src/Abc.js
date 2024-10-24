import React from 'react'

function Abc() {
    const data = [
       { Name:"Akshay"},{phone:"3837837873"}
    ]
    console.log(data);
  return (
    <div>
        {
            data.map((data) => {
                return (
                    <p>
                        {data.Name}
                    </p>
                )
            })
        }
    </div>
  )
}

export default Abc