import logo from './logo.svg';
import './App.css';
import Test from './omponents/Test/Test';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function App() {
  const [preferdColor1,setColor]= useState('red');
  const globalColor = useSelector((data)=>{
   // console.log(data);
    return data});
  
useEffect(()=>{
  setColor(globalColor);
},[globalColor]);

//console.log(globalColor);

  const getChildvalue =(data)=>{
    setColor(data);
  }
  return (
    <>
    <h1 className={preferdColor1 }>Mathrubhumi.com</h1>
    
    <Test color="green" f1={getChildvalue}></Test>
   
    </>
  );
}

export default App;
