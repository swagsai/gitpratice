import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';


function App() {
  const [count, setCount] = useState(0)
  console.log("test pr");
  useEffect(()=>{
   console.log("syntax check");
   
  },[])
  return (
    <>
      <div className="bg-blue-500 text-white text-3xl font-bold p-10">
      Tailwind is Working! 🎉
    </div>
    </>
  )
}

export default App
