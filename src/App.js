import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "So far react is very confusing",
      day: "May 20",
      reminder: true,
    },
    { 
      id: 2,
      text: "Meeting with Dr. Borum",
      day: "May 19",
      reminder: true,
    },
    {
      id: 3,
      text: "Headshots at Okanagan College",
      day: "June 3",
      reminder: false,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  }

  return (
  <div className="container">
   <Header />
   {tasks.length > 0 ? (
   <Tasks tasks={tasks} onDelete={deleteTask} />
   ): ( 'No tasks to Show')}  </div>
  )
}
// class App extends React.Component{
//   render(){
//     return <h1>Hey Dudes</h1>
//   }
// }

export default App;
