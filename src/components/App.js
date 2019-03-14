import React, { Component } from 'react';
import '../stylesheets/App.css';
import PokeCardContainer from "./PokeCard/PokeCardContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokeCardContainer pokemonId={1}/>
      </div>
    );
  }
}

export default App;
