import React, {Component} from 'react'

const GenerateGamesList = () => {
  return (
    <div>
      <h3>List of Games</h3>
      <section>
        <ul>
          <li>
            <button>Goofspiel</button>
            <a href="https://en.wikipedia.org/wiki/Goofspiel">Instructions</a>
          </li>
          <li>
            <button>Three Card Poker</button>
            <a href="https://en.wikipedia.org/wiki/Three_Card_Poker">Instructions</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default GenerateGamesList;