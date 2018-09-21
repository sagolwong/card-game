import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import { Time } from './Time';
const word = "HELLO";

class App extends Component {
  render() {
    return (
      <div>
        <WordCard value={word}/>    
        <Time/>
      </div>
    );
  }
}

export default App;
