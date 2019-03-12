import React, { Component } from 'react';
import '../stylesheets/App.css';
import PokeCardContainer from "./PokeCard/PokeCardContainer";
import ButtonContainer from "./Button/ButtonContainer";

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
