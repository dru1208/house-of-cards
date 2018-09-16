import React, {Component} from 'react'
import GenerateSessionList from './session_list.jsx'

const sessions = [
  {session_id: 1, opponent: "andrew", is_host: true},
  {session_id: 2, opponent: "chris", is_host: true},
  {session_id: 3, opponent: "lexy", is_host: false},
  {session_id: 4, opponent: "sean", is_host: true},
]

const GenerateSessionPage = () => {
  return (
    <div>
      <h1>Your Games</h1>
      <button>Create New Game</button>
      <GenerateSessionList sessions={sessions}/>
    </div>
  )
}

export default GenerateSessionPage