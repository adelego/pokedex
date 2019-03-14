import React, { Component } from 'react';


class PokeCard extends Component{
    componentDidMount(){
        this.props.fetchPokemon()
    }

    render() {
        return (
            <div>
                a wild {this.props.pokemon} appears !
                <img src={this.props.img_url} alt={this.props.pokemon}/>
            </div>
        )
    }
}

export default PokeCard;
