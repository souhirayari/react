import TodoItem from "./TodoItem";

export default function Todos({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} setTodos={setTodos} />
      ))}
    </ul>
  );
}
