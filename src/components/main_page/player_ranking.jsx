import React, {Component} from 'react'

const PlayerRanking = (props) => {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.rank}</td>
      <td>{props.wins}</td>
    </tr>
  )
}

export default PlayerRanking;