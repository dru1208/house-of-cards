import React, {Component} from 'react'
import Session from './session.jsx'

const GenerateSessionList = (props) => {
  const generateSessionList =
    props.sessions.map((session) => {
      return <Session session_id={session.session_id} opp={session.opponent} host={session.is_host} />
    })

  return (
    <div>
      <h2>List of Sessions</h2>
      <h3>Goofspiel</h3>
      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Opponent</th>
            <th>P1 is Host</th>
            <th>Enter</th>
          </tr>
        </thead>
        <tbody>
          {generateSessionList}
        </tbody>
      </table>
    </div>
  )
}


export default GenerateSessionList