export default (
        state = {
            pokemon: 'Squirtle',
            img_url: ''
        }, 
        action
    ) => {
    switch (action.type) {

        case 'FETCHED_POKEMON':
            return {
                pokemon: action.response.name,
                img_url: action.response.sprites.front_default
            }
        default:
            return state
    }
}
