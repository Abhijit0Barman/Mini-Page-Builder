import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";

function Modal({ setIsOpen, setRender,render }) {
  const [text, setText] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [fontWeight, setFontWeight] = useState("");

  const handleClick = () => {
    const newObject = {
      text: text || "Default Text", // Provide default value if text is empty
      x: parseFloat(x) || 0, // Provide default value of 0 if x is empty or not a valid number
      y: parseFloat(y) || 0, // Provide default value of 0 if y is empty or not a valid number
      fontSize: parseFloat(fontSize) || 12, // Provide default value of 12 if fontSize is empty or not a valid number
      fontWeight: parseFloat(fontWeight) || 400, // Provide default value of 400 if fontWeight is empty or not a valid number
    };

    // Retrieve existing objects from local storage or initialize as an empty array
    const existingObjects = JSON.parse(localStorage.getItem("objects")) || [];
    // Add the new object to the existing array
    const updatedObjects = [...existingObjects, newObject];
    // Save the updated array back to local storage
    localStorage.setItem("objects", JSON.stringify(updatedObjects));

    setIsOpen(false);
    setRender(p=>!p);
  };

  return (
    <div className="p-10 absolute mt-[140px] mx-[600px] border bg-white h-[500px] w-[400px] flex-col">
      <div className="font-bold flex">
        <h3>Edit Label</h3>
        <RxCross2
          className="absolute ml-[300px] text-gray-500 text-lg cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <div  className="mt-4 ">
        Text
        <br />
        <input
          type="text"
          placeholder="This is a div"
          className="border w-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div htmlFor="" className="mt-4">
        X
        <br />
        <input
          type="text"
          className="border w-full"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
      </div>
      <div htmlFor="" className="mt-4">
        Y
        <br />
        <input
          type="text"
          className="border w-full"
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
      </div>
      <div htmlFor="" className="mt-4">
        Font Size
        <br />
        <input
          type="text"
          className="border w-full"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>
      <div htmlFor="" className="mt-4">
        Font Weight
        <br />
        <input
          type="text"
          className="border w-full"
          value={fontWeight}
          onChange={(e) => setFontWeight(e.target.value)}
        />
      </div>
      <div className="mt-10 bg-blue-800 p-3 text-white rounded-lg text-center w-40">
        <button onClick={handleClick}>Save Changes</button>
      </div>
    </div>
  );
}

export default Modal;
