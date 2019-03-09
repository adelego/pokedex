import { connect } from 'react-redux'
import { togglePokemon } from '../actions'
import Button from '../components/Button'

const mapStateToProps = state => ({
  toggleId: typeof state.toggleId === 'undefined' ? 0 : state.toggleId
})

const mapDispatchToProps = dispatch => ({
    togglePokemon: (toggleId) => dispatch(togglePokemon(toggleId))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Button)