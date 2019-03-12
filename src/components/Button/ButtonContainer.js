import { connect } from 'react-redux'
import { togglePokemon } from '../../redux/pokemon/actions'
import Button from './Button'

const mapStateToProps = state => ({
  toggleId: typeof state.toggleId === 'undefined' ? 0 : state.toggleId
})

const mapDispatchToProps = dispatch => ({
    togglePokemon: (toggleId) => dispatch(togglePokemon(
      toggleId % 2 === 0 ? 'Bulbasaur' : 'Charmander',
      toggleId+1
      ))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Button)
