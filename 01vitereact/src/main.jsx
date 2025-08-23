// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    id:"tk"
    
  },
  children: "Click me to visit google",
};
// const anotherelemnt = " chai or newton";
 const link = React.createElement('a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google');
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)
ReactDom.createRoot(document.getElementById('root')).render(
 
link
  
)
