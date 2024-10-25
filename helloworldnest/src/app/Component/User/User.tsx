



import React from 'react'
import Button from '../Atoms/Button/Button';
import Label from '../Atoms/Label/Label';


interface User{
    id:number;
    name:string;
    email:string;
}

const User=async()=> {



const loaduserData=async()=>{
        console.log("Button clicked");
         
}   

const res=await fetch("https://jsonplaceholder.typicode.com/users");

         const users:User[]=await res.json();
  return (
    <div>
      <h1 className='m-4'>This is a Sample user page</h1>
      <Button  title='hello' message='abcd'></Button>
      <Label title='m' message='binu'></Label>
      <ul>
   {
      users.map(item=>{
            return <li key={item.id}>{item.name}</li>
      })
   }
   </ul>


    </div>
  )
}

export default User
