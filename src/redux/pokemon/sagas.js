import { takeLatest } from "redux-saga/effects"
import { togglePokemon } from "./actions";

function* mySaga(){
    yield takeLatest("TOGGLE_POKEMON", togglePokemon)
};

export default mySaga;
