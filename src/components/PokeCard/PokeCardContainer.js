import { connect } from 'react-redux';
import PokeCard from './PokeCard';
import { fetchPokemon } from '../../redux/pokemon/actions'

const mapStateToProps = (state, ownprops) => {
  const pokemonId = ownprops.pokemonId;
  let props = state.pokemons[pokemonId] === undefined ?
    {
      name: '',
      imgUrl: '',
    } : {
      name: state.pokemons[pokemonId].name,
      imgUrl: state.pokemons[pokemonId].imgUrl,
    };
    props.pokemonId = pokemonId;
  return(props)
}

const mapDispatchToProps = dispatch =>({
  fetchPokemon: (id) => dispatch(fetchPokemon(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeCard);
