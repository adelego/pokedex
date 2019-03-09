
export const togglePokemon = (toggleId) => {
  return ({
    type: "TOGGLE_POKEMON",
    pokemon: toggleId % 2 === 0 ? 'Bulbasaur' : 'Charmander',
    toggleId: toggleId + 1
})};