import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([]);
  fetch("http://localhost:3000/todos") // This is not a correct way to send the requests to our express server because we using setTodo and control reaches the top again and it will be in infinite loop ,so here we use useEffect hook
  .then(async function(res){
    const json= await res.json();
    setTodos(json.todos)
  });

  return (
    <>
     <CreateTodo></CreateTodo>
     <Todos todos={todos}></Todos>
    </>
  )
}

export default App
