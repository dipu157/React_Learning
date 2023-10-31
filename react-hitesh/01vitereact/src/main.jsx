import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherUser = "check another user"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
