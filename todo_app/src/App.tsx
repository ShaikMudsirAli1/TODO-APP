import AddToDo from "./components/addtodos";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1>TODO APP REACT + TYPESCRIPT </h1>
      <br /> <br />
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
