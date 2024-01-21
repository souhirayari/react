import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosApp from "./todos/TodosApp";
import Profile from "./Profile";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodosApp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
