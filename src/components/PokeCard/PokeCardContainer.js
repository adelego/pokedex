import { connect } from 'react-redux';
import PokeCard from './PokeCard';
import { fetchPokemon } from '../../redux/pokemon/actions'

const mapStateToProps = (state, ownprops) => ({
    pokemon: state.pokemon,
    img_url: state.img_url,
    pokemonId: ownprops.pokemonId
  })

const mapDispatchToProps = dispatch =>({
  fetchPokemon: (id) => dispatch(fetchPokemon(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeCard);
