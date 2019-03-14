import { call, put, takeEvery } from "redux-saga/effects"


const api_get = (id) => (fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                        .then((response) => (response.json())))

function* getPokemon(action){
    try {
        const response = yield call(api_get, action.pokemonId)
        yield put ({type: 'FETCHED_POKEMON', response})
    } catch(e){
        console.log(e)
    }
};

export function* pokemonSaga(){
    yield takeEvery('FETCH_POKEMON', getPokemon)
}
