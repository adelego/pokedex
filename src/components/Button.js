import React, { Component } from 'react'

class Button extends Component{

    render(){
        return <button onClick={()=>(this.props.togglePokemon(this.props.toggleId))}>Click me</button>
    }
}

export default Button