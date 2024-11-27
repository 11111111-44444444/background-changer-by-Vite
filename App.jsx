import React, { useState } from 'react'

function App() {
  const [colour, setColour] = useState("black");
  return (


    <div className="w-full h-screen duration-200" style={{ background: colour }}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap shadow-lg bg bg-white" px-3 py-2 rounded-3x1> </div>
        <button onClick={() => setColour("red")}
          className="outline-none px-4 py-1 rounded full text-white shadow-lg" style={{ background: "red" }}>Red</button>
        <button onClick={() => setColour("yellow")}
          className="outline-none px-4 py-1 rounded full text-white shadow-lg" style={{ background: "yellow" }}>Yellow</button>
        <button onClick={() => setColour("green")}
          className="outline-none px-4 py-1 rounded full text-white shadow-lg" style={{ background: "Green" }}>Green</button>
        <button onClick={() => setColour("blue")}
          className="outline-none px-4 py-1 rounded full text-white shadow-lg" style={{ background: "blue" }}>Blue</button>
        <button onClick={() => setColour("purple")}
          className="outline-none px-4 py-1 rounded full text-white shadow-lg" style={{ background: "purple" }}>Purple</button>
        <button onClick={() => setColour("orange")}
          className="outline-none px-4 py-1 rounded full text-white shadow-lg" style={{ background: "orange" }}>orange</button>


      </div>
    </div>
  )
}

export default App