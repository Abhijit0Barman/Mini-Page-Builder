import { useState } from "react";
import './App.css'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'
import Modal from './Components/Modal'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [render, setRender] = useState(false);
  const existingObjects = JSON.parse(localStorage.getItem("objects")) || [];
  // console.log(render);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} setRender={setRender} render={render}/>}
      <div className="flex">
        <Main setIsOpen={setIsOpen} existingObjects={existingObjects} render={render}/>
        <Sidebar setIsOpen={setIsOpen}/>
      </div>
    </>
  )
}

export default App
