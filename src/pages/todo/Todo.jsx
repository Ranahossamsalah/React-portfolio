import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
import "./Todo.css";
import { addtodoaction, delatetodoaction } from "../../redux";
function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  // const reduxstore = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTodo = (task) => {
    dispatch(addtodoaction(task));
  };
  const deleteTodo = (index) => {
    dispatch(delatetodoaction(index));
  };

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
