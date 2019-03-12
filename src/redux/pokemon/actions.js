export const togglePokemon = (pokemon, toggleId) => {
    return ({
      type: "TOGGLE_POKEMON",
      pokemon: pokemon,
      toggleId: toggleId
  })};
