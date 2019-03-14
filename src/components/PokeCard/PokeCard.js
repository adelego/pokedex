import React, { Component } from 'react';


class PokeCard extends Component{
    componentDidMount(){
        this.props.fetchPokemon(this.props.pokemonId)
    }

    render() {
        return (
            <div>
                <p>a wild {this.props.pokemon} appears !</p>
                <img src={this.props.img_url} alt={this.props.pokemon}/>
            </div>
        )
    }
}

export default PokeCard;
