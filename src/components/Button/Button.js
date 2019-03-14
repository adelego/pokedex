import React from 'react'

const Button = (props) => (
        <button 
            onClick={()=>(props.togglePokemon(props.toggleId))}
        >
            Click me
        </button>
    )


export default Button
