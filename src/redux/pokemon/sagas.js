import { call, put, takeLatest } from "redux-saga/effects"


const api_get = () => (fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
                        .then((response) => (response.json())))

function* getPokemon(){
    try {
        const response = yield call(api_get)
        yield put ({type: 'FETCHED_POKEMON', response})
    } catch(e){
        console.log(e)
    }
};

export function* pokemonSaga(){
    yield takeLatest('FETCH_POKEMON', getPokemon)
}
