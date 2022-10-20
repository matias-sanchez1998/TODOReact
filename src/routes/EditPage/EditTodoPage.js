import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
  const location = useLocation();
  const { id } = useParams();
  const { state, stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  const { getTodo, loading } = state;
  let todoText;
  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(parseInt(id));
    todoText = todo.text
  }
  return (
    <TodoForm
      defaultTodoText={todoText}
      submitEvent={(newText) => editTodo(parseInt(id), newText)}
      label={"Edita tu TODO"}
      submitText={"Editar"}
    />
  );
}

export { EditTodoPage };
