import React, {Component} from 'react'
import GenerateGamesList from './games_list.jsx'
import GeneratePlayerRankingsList from './player_rankings_list.jsx'


const players = [
  {username: "andrew", rank: 1, wins: 10},
  {username: "vincent", rank: 2, wins: 9},
  {username: "chris", rank: 3, wins: 8},
  {username: "sean", rank: 4, wins: 7},
  {username: "jordan", rank: 5, wins: 6},
  {username: "lexy", rank: 6, wins: 5},
  {username: "maggie", rank: 7, wins: 4},
  {username: "kyla", rank: 8, wins: 3},
  {username: "neenus", rank: 9, wins: 2}
]

const GenerateMainPage = () => {
  return(
    <div>
      <GenerateGamesList />
      <GeneratePlayerRankingsList players={players} />
    </div>
  )
}

export default GenerateMainPage




// const MainPage extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }
// }