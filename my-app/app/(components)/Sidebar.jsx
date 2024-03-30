"use client"

import React from "react";
import Modal from "./Modal";

const Sidebar = ({setIsOpen}) => {

const handleModal=(x)=>{
    setIsOpen(true)
}

  return (
    <sidebar className="w-[30%] text-center bg-black h-svh text-white">
      <h1 className="m-5 text-[30px] font-bold ">BLOCKS</h1>
      <div className="flex-col    h-[200px] px-10">
        <div className="w-full mt-4 h-[40px] rounded-lg p-2 bg-white text-black">
          <button onClick={()=>handleModal('label')}>Label</button>
        </div>
        <div className="w-full mt-4 h-[40px] rounded-lg p-2 bg-white text-black">
          <button onClick={()=>handleModal('input')}>Input</button>
        </div>
        <div className="w-full mt-4 h-[40px] rounded-lg p-2 bg-white text-black">
          <button onClick={()=>handleModal('button')}>Button</button>
        </div>
      </div>
    </sidebar>
  );
};

export default Sidebar;
