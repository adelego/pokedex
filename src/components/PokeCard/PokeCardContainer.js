import { connect } from 'react-redux';
import PokeCard from './PokeCard';

const mapStateToProps = state => ({
    pokemon: state.pokemon
  })


export default connect(
    mapStateToProps
)(PokeCard);
