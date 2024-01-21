import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import Todos from "./Todos"
import ClearTodos from "./ClearTodos"

export default function TodosApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'learn react',
      isDeleted: false,
      isDone: false
    },
    {
      id: 2,
      title: 'read clean code book',
      isDeleted: false,
      isDone: false
    },
    {
      id: 3,
      title: 'watch a movie',
      isDeleted: false,
      isDone: false
    }
  ])

 return <div>
  <h1>Todo App</h1>
  <AddTodoForm setTodos={setTodos} />
  <Todos todos={todos} setTodos={setTodos} />
  {todos.length !== 0 && <ClearTodos todos={todos} setTodos={setTodos} />}
 </div>
}