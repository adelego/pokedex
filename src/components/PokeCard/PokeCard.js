import React, { Component } from 'react';


class PokeCard extends Component{
    componentDidMount(){
        this.props.fetchPokemon(this.props.pokemonId)
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <img src={this.props.imgUrl} alt={this.props.pokemon}/>
            </div>
        )
    }
}

export default PokeCard;
