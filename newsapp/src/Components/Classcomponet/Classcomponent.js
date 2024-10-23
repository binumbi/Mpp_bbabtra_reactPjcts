import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default class Classcomponent extends Component {
    constructor(props){
         super(props) //call features of react component  
         this.state={
            name:'',
            email:''
         }  

          }

Counter= ()=>{
    const dispatch=useDispatch();
    const {count}=useSelector((state)=>state)
    return(
        <>
           <p mt='4'>Count:{count}</p>
            <button className='btn btn-danger' value="PLus" onClick={()=> dispatch({type:'INCREMENT',value:1})}>+plus</button>
            <button className='btn btn-success' value="Minus" onClick={()=>dispatch({type:'DECREMENT',value:1})}>-minus</button>
        </>
    )
}

        //   add =(e) =>{
        //     this.setState({
        //         name:e.target.value,
        //     });
        //     console.log(this.state.name);
        //   };
  render() {
    return (
      <div>
        <this.Counter></this.Counter>
       
{/* <input type='text'  onChange={this.add}/>
            <button>+</button>
            <button>-</button> */}

        <h1>This is Classcomponent</h1>
      </div>
    )
  }
}

