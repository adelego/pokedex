export default (
        state = {
            pokemons: {}
        }, 
        action
    ) => {
    switch (action.type) {

        case 'FETCHED_POKEMON':
            let updatedPokemon = {};
            updatedPokemon.name = action.response.name;
            updatedPokemon.img_url = action.response.sprites.front_default;
            return {
                ...state,
                pokemons: {
                    ...state.pokemons, [action.response.id]:updatedPokemon
                }
            }
        default:
            return state
    }
}
