/**
 * TYPESCRIPT IS A SUPERSET OF JAVASCRIPT THAT ALLOWS YOU
 * TO DEFINE TYPES OF VARIABLES, FUNCTION, PARAMETERS, AND
 * RETURN VALUES.
 *
 * @return CODE QUALITY AND CATCHING ERRORS DURING DEVELOPMENT.
 */

import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <br />
      <br />
      <label htmlFor="task">You can add task here</label>
      <br />

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="TASK"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddToDo;
