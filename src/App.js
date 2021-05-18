
import Header from './components/Header'

function App() {
  const name = "Phoenix";
  return (
  <div className="container">
   <Header title={'1'}/>
   <p>Hey my name is {name}</p>
   </div>
  )
}
// class App extends React.Component{
//   render(){
//     return <h1>Hey Dudes</h1>
//   }
// }

export default App;
