"use client"

import React, { useState,useEffect } from 'react'

import { useQuery,gql } from '@apollo/client';
import Productcard from '../Productcard/Productcard';

 function Sidebar() {


    const GET_CAT =gql`{
  categories{
  id
    name
  }
}`;
       const{data,loading,error}= useQuery(GET_CAT);
   
    const [categoryList, setCategory]=useState([]);

    useEffect(()=>{
   
        if(data){
            setCategory(data.categories);
        }
    });
  return (
    <div>
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <h3>News Category</h3>
      {/* Sidebar content here */}
      {
        categoryList.map((item)=>{
            return <li key={item.id}><a>{item.name}</a></li>
        })
      }
    </ul>
  </div>
</div>
    </div>
  )
}

export default Sidebar
