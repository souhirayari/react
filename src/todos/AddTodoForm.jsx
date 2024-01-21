import { useState } from "react";

export default function AddTodoForm({ setTodos }) {
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (title.trim() != "") {
      setTodos((prev) => {
        return [
          ...prev,
          { title, id: prev.length + 1, isDeleted: false, isDone: false },
        ];
      });

      setTitle("");
    }
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Add your new todo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="button" onClick={handleAddTodo}>
        add todo
      </button>
    </form>
  );
}
