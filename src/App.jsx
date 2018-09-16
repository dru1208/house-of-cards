import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GenerateMainPage from './components/main_page/main_page.jsx'
import GenerateHeader from "./components/header/header.jsx"
import GenerateRegistrationPage from "./components/registration_page/registration_page.jsx"
import GenerateSessionPage from "./components/session_page/session_page.jsx"


class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GenerateHeader />
        <GenerateMainPage />
        <GenerateRegistrationPage />
        <GenerateSessionPage />
      </div>
    );
  }
}

export default App;
