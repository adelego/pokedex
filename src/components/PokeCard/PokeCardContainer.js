import { connect } from 'react-redux';
import PokeCard from './PokeCard';
import { fetchPokemon } from '../../redux/pokemon/actions'

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    img_url: state.img_url
  })

const mapDispatchToProps = dispatch =>({
  fetchPokemon: () => dispatch(fetchPokemon())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeCard);
