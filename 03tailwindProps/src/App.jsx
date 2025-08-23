import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const arr =[1,2,3,4,5,6,7,8,9,0];
  const obj ={
    name:"newton",
    surname:"bepari",
    age:21,
    nationality:"bangladeshi"
  }

  return (
    <>
      <Card  name = "newton" obj ={obj}  arr ={arr}/>
      <Card name="coder" obj ={obj} arr ={arr}/>
      <Card obj = {obj} arr ={arr}/>
      <Card />
    </>
  )
}

export default App
