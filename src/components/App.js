import React, { Component } from 'react';
import '../stylesheets/App.css';
import PokeCardContainer from "../container/PokeCardContainer";
import ButtonContainer from "../container/ButtonContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokeCardContainer/>
        <ButtonContainer/>
      </div>
    );
  }
}

export default App;
