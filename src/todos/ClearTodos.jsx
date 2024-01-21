export default function ClearTodos({ todos, setTodos }) {
  const pendingTasksCount = todos.filter((todo) => !todo.isDone).length;
  return (
    <div className="clear-box">
      <p>
        you have <span>{pendingTasksCount}</span> pending task
        {pendingTasksCount !== 1 && "s"}
      </p>
      <button onClick={() => setTodos([])}>clear all</button>
    </div>
  );
}
