import React, {Component} from 'react'

const GenerateLogin = () => {
  const inputTextStyle = {width: "250px"}

  return(
    <form method="POST" action="/login">
      <label>Username</label>
      <input type="text" name="username" style={inputTextStyle} id="usernameText"></input>
      <label>Password</label>
      <input type="password" name="passwordLogin" style={inputTextStyle} id="passwordText"></input>
      <input type="submit" value="login" id="loginSubmit"></input>
    </form>
  )
}

export default GenerateLogin