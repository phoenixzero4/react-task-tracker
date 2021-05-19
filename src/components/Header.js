
import PropTypes from 'prop-types'
import Button from './Button'



const Header = ( {title} ) => {
  const onClick = () => {
    return console.log("Clicked me");
  }
  return (
   <header className = 'header'>
     <h1> {title} </h1>
     <Button color="steelblue" text="Add" onClick={onClick}/>

   
   </header>
  )
}



Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: "Task Tracker"
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'blue'
// }
export default Header
