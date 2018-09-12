import React, {Component} from 'react'
import PlayerRanking from './player_ranking.jsx'


const GeneratePlayerRankingsList = (props) => {
  const generatePlayerRankings =
    props.players.map((player) => {
      return <PlayerRanking username={player.username} rank={player.rank} wins={player.wins} />
    })

  return(
    <div>
      <h3>List of Player Rankings</h3>
      <table>
        <tr>
          <th>Name</th>
          <th>Rank</th>
          <th>Wins</th>
        </tr>
        {generatePlayerRankings}
      </table>
    </div>
  )
}

export default GeneratePlayerRankingsList;