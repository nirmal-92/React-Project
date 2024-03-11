import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Hello} from './Hello'
import{Navbar} from "./Navbar"
import { UserList } from './UserList'

function App() {
  let a=2
  const [initialValue,setInitialValue]=useState(2);
  const[name,setName]=useState("name");

  const data=[
    {
      Name:"Nirmal",
      Class:"CSE-B",
      Course:"React"
    },
    {
      Name:"Dhanush",
      Class:"CSE-B",
      Course:"React"
    }
  ]

  const handleClick =(value,setname)=>{
    setInitialValue(value);
    setName(setname);
    console.log(a,"updated a value")
  }

  return (
    <> 
      <div>{a}</div>
      <Navbar name={name} num={initialValue} handleClick={handleClick}/>
      {data.map((detail,index)=>{
        return <div key={index} onClick={()=>handleClick(detail)} className='list'>
          <div>{detail.Name}</div>
          <div>{detail.Class}</div>
          <div>{detail.Course}</div>
        </div>
      })}
    </>
  )
}
export default App