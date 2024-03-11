import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hello } from './Hello'
import { Navbar } from './Navbar'


function App() {
    const[count, setCount] = useState(0)
  return (
    <>
    <div className='card'>
      <div style={{margin:"30px"}}>{count}</div>
      <Hello count={count} handleChange={((changeDcount)=>{
        setCount(changeDcount)
      })}/>
    </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
       {/* <Navbar /> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
