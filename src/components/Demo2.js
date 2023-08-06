// This page is for learning purpose only. 
import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);

  const i = useRef(null);

 

  useEffect(() => {
      i.current = setInterval(() => {
      console.log("Namaste React" , Math.random());
    }, 1000);
    // return () => clearInterval(i.current);
  }, []);

  return (
    <div className=" m-4 p-2 bg-slate-50 border border-black w-96 h-96 ">
      <div>
        <button
          className=" bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className=" fontbold text-xl"> Let = {x}</span>
      </div>
      <div>
        <button
          className=" bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y+1);
          }}
        >
          Increase Y
        </button>
        <span className=" fontbold text-xl"> State = {y}</span>
      </div>
      <div>
        <button
          className=" bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current = ref.current +1;
            console.log("ref =", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className=" fontbold text-xl"> Ref = {ref.current}</span>
      </div>
      <button className=" bg-red-900 p-4 m-4  text-white font-bold rounded-lg" onClick={() => {
        clearInterval(i.current)
      }}>Stop Printing</button>
    </div>
  );
};

export default Demo2;
