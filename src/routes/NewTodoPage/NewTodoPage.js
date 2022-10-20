import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  return <TodoForm submitEvent={addTodo}
          label={"Escribe tu nuevo TODO"}
          submitText={"Añadir"}
  />;
}

export { NewTodoPage };
