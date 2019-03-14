import React, { Component } from 'react';
import '../stylesheets/App.css';
import PokeCardContainer from "./PokeCard/PokeCardContainer";

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
class App extends Component {
  render() {
    return (
      <div className="App">
        {ids.map((pokemonId, key) => <PokeCardContainer pokemonId={pokemonId} key={key}/>)}
      </div>
    );
  }
}

export default App;
