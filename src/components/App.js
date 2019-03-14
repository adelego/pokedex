import React, { Component } from 'react';
import '../stylesheets/App.css';
import PokeCardContainer from "./PokeCard/PokeCardContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokeCardContainer/>
      </div>
    );
  }
}

export default App;
