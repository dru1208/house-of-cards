import React, {Component} from 'react'
import GenerateLoggedIn from './loggedIn.jsx'
import GenerateNotLoggedIn from './notLoggedIn.jsx'
import GenerateLogin from './login.jsx'

const GenerateHeader = () => {

  return (
    <header>
      <h2>image here</h2>
      <h1>House of Cards</h1>
      <GenerateLoggedIn />
      <GenerateNotLoggedIn />
      <GenerateLogin />
    </header>
  )
}

export default GenerateHeader