import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
import "./Todo.css";
// import { addtodoaction, delatetodoaction } from "../../redux/config";
import {addtodo,DeleteTodo}  from '../../redux/features/todoslice'

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const onaddTodo = (task) => { 
    dispatch(addtodo(task));
  };
  const ondeleteTodo = (index) => {
    dispatch(DeleteTodo(index));
  };
  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={onaddTodo} />
      <TodoList todos={todos} DeleteTodo={ondeleteTodo} />
    </div>
  );
}
export default Todo;
