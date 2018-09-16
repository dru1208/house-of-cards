import React, {Component} from 'react'

const GenerateRegistrationPage = () => {
  return(
    <div>
      <h2>Register now to start playing!</h2>
      <span>Please fill out the forms below, all areas are required</span>
      <form method="POST" action="/register">
        <div>
          <label for='fullName'>Name: </label>
          <input type="text" name="fullName" placeholder="Enter your name"></input>
        </div>
        <div>
          <label for="birthDate">Date of Birth: </label>
          <input type="date" name="birthDate" placeholder="Enter your date of birth"></input>
        </div>
        <div>
          <label for="email">Email: </label>
          <input type="email" name="email" placeholder="Enter your email here"></input>
        </div>
        <div>
          <label for="username">Username: </label>
          <input type="text" name="username" placeholder="Choose Username"></input>
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="password" name="password" placeholder="Choose Password"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default GenerateRegistrationPage