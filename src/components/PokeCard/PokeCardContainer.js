import { connect } from 'react-redux';
import PokeCard from './PokeCard';
import { fetchPokemon } from '../../redux/pokemon/actions'

const mapStateToProps = (state, ownprops) => {
  const pokemonId = ownprops.pokemonId;
  let props = state.pokemons[pokemonId] === undefined ?
    {
      name: '',
      img_url: '',
    } : {
      name: state.pokemons[ownprops.pokemonId].name,
      img_url: state.pokemons[ownprops.pokemonId].img_url,
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
