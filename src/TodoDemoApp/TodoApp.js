import "./styles/index.css";
import Todo from "./component/Todo";

function TodoApp() {
  return (
    <div className="mainBody">
      <h1>My Todos</h1>
      <Todo title="My New Todo" />
      <Todo />
    </div>
  );
}

export default TodoApp;
