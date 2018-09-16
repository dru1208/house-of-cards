import React, {Component} from 'react'

const Session = (props) => {
  return(
    <div>
      <tr>
        <td>{props.session_id}</td>
        <td>{props.opp}</td>
        <td>{props.is_host}</td>
        <td><button>Join Game</button></td>
      </tr>
    </div>
  )
}

export default Session