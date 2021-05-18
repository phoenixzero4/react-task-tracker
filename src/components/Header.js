
import PropTypes from 'prop-types'

const Header = (props ) => {
  return (
    <div>
      <h1>Task Tracker</h1><h1>{props.title}</h1>
    </div>
  )
}



Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
