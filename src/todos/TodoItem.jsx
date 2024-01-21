export default function TodoItem({ todo, setTodos }) {
  const handleDone = () => {
    setTodos((prev) => {
      return prev.map((current) => {
        if (current.id != todo.id) return current;
        return { ...current, isDone: !current.isDone };
      });
    });
  };

  const handleDeleteTodo = () => {
    setTodos((prev) => {
      return prev.map((current) => {
        if (current.id != todo.id) return current;
        return { ...current, isDeleted: !current.isDeleted };
      });
    });
  };

  return (
    <li className="todo-item">
      <p className={todo.isDeleted ? "dashed-line" : "normal-line"}>
        {todo.title}
      </p>
      <input type="checkbox" value={todo.isDone} onClick={handleDone} />
      <button type="button" onClick={handleDeleteTodo}>
        delete
      </button>
    </li>
  );
}
