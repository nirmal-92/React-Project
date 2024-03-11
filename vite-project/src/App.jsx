import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Hello} from './Hello'
import{AppBar} from "./AppBar"

//returning functional component that is returning jsx
function App() {
  // const [count, setCount] = useState("kaviya_raja")
  let a=2
  const [initialValue,setInitialValue]=useState(2);
  const[name,setName]=useState("name");
  const data=[
    {
      name:"Nirmal",
      course:"Reactjs",
      class:"cse"
    },
    {
      name:"Kishore",
      course:"nodejs",
      class:"cse"
    },
    {
      name:"Anto",
      course:"Reactjs",
      class:"cse"
    },
    {
      name:"Mithun",
      course:"Reactjs",
      class:"cse"
    },
    {
      name:"Lingesh",
      course:"nodejs",
      class:"cse"
    },
    {
      name:"Safik",
      course:"Reactjs",
      class:"cse"
    },
    {
      name:"Ragul",
      course:"nodejs",
      class:"cse"
    },
  ]

  const handleClick =(value,setname)=>{
    setInitialValue(value);
    setName(setname);
    console.log(a,"updated a value")
  }
  return (
    <>
      {/* <div className = "card">
      <div style = {{margin:"30px"}}>{count}</div>
      <button style = {{display:"block"}} onClick={()=>
       {setCount(count+1)}}>
       </button>
       <Hello count={count}
       handleChange={(
        (changeDcount)=>{
          setCount(changeDcount)
        }
  )}/>

      </div> */}
      
      <div>{a}</div>
       
      <AppBar name={name} num={initialValue} handleClick={handleClick}/>
      {
        data.map((detail,index)=>{
          return <div key={index} onClick={()=>handleClick(detail)}className='list'>
          <div>{detail.name}</div>
          <div>{detail.class}</div>
          <div>{detail.course}</div>
        </div> 
        })
      }
      {/* <div className='list'>
        <div>"name"</div>
        <div>"class"</div>
        <div>"course"</div>
      </div> */}
      
    </>
  )
}
export default App