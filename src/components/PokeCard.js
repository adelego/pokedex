import React, { Component } from 'react';

class PokeCard extends Component {
    render() {
        return <div>
            a wild {this.props.pokemon} appears !
        </div>
    }
}

export default PokeCard;