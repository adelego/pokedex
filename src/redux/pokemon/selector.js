export const selectPokemon = (state, pokemonId) => (
    state.pokemons[pokemonId] === undefined ?
    {
      name: '',
      imgUrl: '',
      pokemonId
    } : {
      name: state.pokemons[pokemonId].name,
      imgUrl: state.pokemons[pokemonId].imgUrl,
      pokemonId
    }
)
