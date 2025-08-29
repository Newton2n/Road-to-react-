import { useState } from 'react'
import './App.css'
import currencyConverter from './router/currencyConverter'


function App() {
  
 const currency = currencyConverter("usd");
let key = Object.keys(currency);
console.log(key)
  return (
    <>
    <h1>hello</h1>
    </>
  )

}

export default App
