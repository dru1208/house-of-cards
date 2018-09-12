import React, {Component} from 'react'

const GenerateLoggedIn = () => {
  return(
    <div>
      <h4>Welcome, Andrew</h4>
      <form method="POST" action="/logout">
        <button type="submit" name="logout" id="logout">Logout</button>
      </form>
    </div>
  )
}

export default GenerateLoggedIn