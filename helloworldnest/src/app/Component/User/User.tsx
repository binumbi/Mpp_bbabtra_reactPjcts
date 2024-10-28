



import React, { Children } from 'react'
import Button from '../Atoms/Button/Button';
import Label from '../Atoms/Label/Label';
import Heading from '../Atoms/Heading/Heading';
import NewsContent from '../Atoms/NewsContent/NewsContent';
import Link from 'next/link';
import Article from '../../News/Article';


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
      <Heading title='heading' message='news master head'></Heading>
      <NewsContent title="the" message='man'></NewsContent>

      

      {/* <Image name='firstimage' src='yihkj'></Image> */}
      {/* <Link href={Children} children='linkedin' title='first'></Link> */}
      <ul>
   {
      // users.map(item=>{
      //       return <li key={item.id}>{item.name}</li>
      // })
   }
   </ul>


    </div>
  )
}

export default User
