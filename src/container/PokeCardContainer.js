import { connect } from 'react-redux';
import PokeCard from '../components/PokeCard';

const mapStateToProps = state => ({
    pokemon: typeof state.pokemon === 'undefined' ? 'Squirtle' : state.pokemon
  })


export default connect(
    mapStateToProps
)(PokeCard);