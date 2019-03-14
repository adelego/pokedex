export default (
        state = {
            pokemons: {}
        }, 
        action
    ) => {
    switch (action.type) {

        case 'FETCHED_POKEMON':
            const name = action.response.name;
            const imgUrl = action.response.sprites.front_default;
            return {
                ...state,
                pokemons: {
                    ...state.pokemons, [action.response.id]: { name, imgUrl }
                }
            }
        default:
            return state
    }
}
