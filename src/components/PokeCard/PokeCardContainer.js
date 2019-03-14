import { connect } from 'react-redux';
import PokeCard from './PokeCard';
import { fetchPokemon } from '../../redux/pokemon/actions'
import { selectPokemon } from '../../redux/pokemon/selector'

const mapStateToProps = (state, ownprops) => (selectPokemon(state, ownprops.pokemonId))

const mapDispatchToProps = dispatch =>({
  fetchPokemon: (id) => dispatch(fetchPokemon(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeCard);
