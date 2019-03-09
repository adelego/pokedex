export default (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_POKEMON':
        return {
            pokemon: action.pokemon,
            toggleId: action.toggleId
        }
        default:
            return state
    }
}