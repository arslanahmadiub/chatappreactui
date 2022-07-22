import React from 'react'
import ChatArea from './Components/ChatArea'
import Conversation from './Components/Conversation'
import Header from './Components/Header'

const App = () => {

  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <Conversation />
        <ChatArea />
      </div>
    </div>
  )
}

export default App