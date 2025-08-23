import {useState } from "react"

export default function BgChanger() {
const [color,changeColor] = useState("pink")

  return (
    <div className="h-screen w-screen " style={{backgroundColor:color}}>
        <div>
    <div className="h-12 w-full bg-emerald-100  flex  ml-3 justify-evenly items-center mt-3">
      <button onClick={()=> changeColor("white")} className=" border-2 border-indigo-900  px-1 rounded-2xl ml-3 cursor-pointer h-10 bg-amber-200">White</button>
      <button onClick={()=> changeColor("red")} className=" border-2 border-indigo-90 px-1 rounded-2xl ml-3 cursor-pointer h-10 bg-amber-200">Red</button>
      <button onClick={()=> changeColor("black")} className=" border-2 border-indigo-900 px-1  rounded-2xl ml-3 cursor-pointer h-10 bg-amber-200">Black</button>
      <button onClick={()=> changeColor("maroon")} className=" border-2 border-indigo-900 px-1  rounded-2xl ml-3 cursor-pointer h-10 bg-amber-200">Maroon</button>
      <button onClick={()=> changeColor("pink")} className=" border-2 border-indigo-900 px-1  rounded-2xl ml-3 cursor-pointer h-10 bg-amber-200">Pink</button>
      <button onClick={()=> changeColor("royalblue")} className=" border-2 border-indigo-900  px-1 rounded-2xl ml-3 cursor-pointer h-10 bg-amber-200">Royal Blue</button>
      <button onClick={()=> changeColor("green")} className=" border-2 border-indigo-900  px-1 rounded-2xl ml-3 cursor-pointer h-10 bg-amber-200">Green </button>
      <button onClick={()=> changeColor("indigo")} className=" border-2 border-indigo-900  px-1  rounded-2xl ml-3 cursor-pointer h-10 bg-amber-200">indigo</button>
    </div>
    </div>
   </div>
  )
}
