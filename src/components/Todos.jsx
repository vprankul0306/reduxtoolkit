/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-center v-screen">Todos</div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded "
        >
          <div className="text-white">{todo.text}</div>
          <button
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Del
          </button>
        </li>
      ))}
    </>
  );
}

export default Todos;
