import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

const Main = ({ setIsOpen, existingObjects }) => {
  const [objects, setObjects] = useState(existingObjects);

  const updateObjectPosition = (index, x, y) => {
    const updatedObjects = [...objects];
    updatedObjects[index] = { ...updatedObjects[index], x, y };
    setObjects(updatedObjects);
    localStorage.setItem('objects', JSON.stringify(updatedObjects));
  };

  const objectSprings = objects.map((obj) =>
    useSpring({ x: obj.x, y: obj.y, fontSize: obj.fontSize, fontWeight: obj.fontWeight })
  );

  const bindLogoPos = objectSprings.map((spring, index) =>
    useDrag((params) => {
      spring.x.set(params.offset[0]);
      spring.y.set(params.offset[1]);
      updateObjectPosition(index, params.offset[0], params.offset[1]);
    })
  );

  return (
    <div className="w-[70%] bg-slate-300 h-svh ">
      {objectSprings.map((spring, index) => (
        <animated.div
          key={index}
          {...bindLogoPos[index]()}
          className="select-none"
          style={{ x: spring.x, y: spring.y }}
        >
          <p
            style={{ fontSize: `${spring.fontSize}px`, fontWeight: `${spring.fontWeight}` }}
          >
            {objects[index].text}
          </p>
        </animated.div>
      ))}
    </div>
  );
};

export default Main;




















// "use client";
// import { useSpring, animated } from "react-spring";
// import { useDrag } from "@use-gesture/react";

// const Main = () => {
//   const logoPos = useSpring({ x: 0, y: 0 });
//   const bindLogoPos = useDrag((params) => {
//     logoPos.x.set(params.offset[0]);
//     logoPos.y.set(params.offset[1]);
//   });

//   return (
//     <div className="w-[70%] bg-slate-300 h-svh ">
//       <animated.div
//         {...bindLogoPos()}
//         className=" select-none"
//         style={{ x: logoPos.x, y: logoPos.y }}
//       >
//         <p>bdfdfb</p>
//       </animated.div>
//     </div>
//   );
// };

// export default Main;


/*
"use client";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

// const existingObjects = JSON.parse(localStorage.getItem("objects")) || [];


const Main = ({ setIsOpen,existingObjects }) => {
  const objectSprings = existingObjects.map(() => useSpring({ x: 0, y: 0 }));

  const bindLogoPos = objectSprings.map((_, index) =>
    useDrag((params) => {
      objectSprings[index].x.set(params.offset[0]);
      objectSprings[index].y.set(params.offset[1]);
    })
  );

  return (
    <div className="w-[70%] bg-slate-300 h-svh ">
      {objectSprings.map((object, index) => (
        <animated.div
          key={index}
          {...bindLogoPos[index]()}
          className="select-none"
          style={{ x: objectSprings[index].x, y: objectSprings[index].y }}
        >
          <p
            style={{ fontSize: `${object.fontSize}px`, fontWeight: `${object.fontWeight}px` }}
          >
            {object.text}
          </p>
        </animated.div>
      ))}
    </div>
  );
};

export default Main;
*/
