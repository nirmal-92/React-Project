import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Hello} from './Hello'
import{Navbar} from "./Navbar"

function App() {
  let a=2
  const [initialValue,setInitialValue]=useState(2);
  const[name,setName]=useState("name");

  const handleClick =(value,setname)=>{
    setInitialValue(value);
    setName(setname);
    console.log(a,"updated a value")
  }
  return (
    <> 
      <div>{a}</div>
      <Navbar name={name} num={initialValue} handleClick={handleClick}/>
    </>
  )
}
export default App