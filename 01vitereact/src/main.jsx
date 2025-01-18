import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function Myapp(){
  return(
    <h1>Hello World</h1>
  )
}

/*const reactElement = {
  type: "a",
  props: {
      href: "https://www.google.com",
      target: "_blank"
  },
  children: "Click me to visit Google"
}*/

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Click me to visit Google</a>
)

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  "Click me to visit Google"
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

 // reactElement
)

