import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Input from "./Input";
import Todo from "./Todo";
import TodoOver from "./TodoOver";

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("todos");
    setTodos(localData ? JSON.parse(localData) : []);
  }, []);

  const addTodo = (todo) => {
    const newtodo = [todo, ...todos];

    localStorage.setItem("todos", JSON.stringify(newtodo));
    setTodos(newtodo);
  };

  const removeTodo = (id) => {
    const deletetodo = [...todos].filter((todo) => todo.id !== id);

    localStorage.setItem("todos", JSON.stringify(deletetodo));

    setTodos(deletetodo);
  };

  const completeTodo = (getTodo, id) => {
    removeTodo(id);

    const now = +new Date();

    getTodo.time = now;

    const newtodo = [getTodo, ...complete];

    setComplete(newtodo);
  };

  return (
    <div className="wrap">
      <div className="todo-list">
        <h1 className="content">待辦事項</h1>
        <Input onSubmit={addTodo} />
      </div>
      <div className="container">
        <div className="row">
          <NavLink
            to="Todo"
            className={(inactive) =>
              inactive.isActive ? "col-6 active" : "col-6"
            }
          >
            待完成
          </NavLink>
          <NavLink
            to="TodoOver"
            className={(inactive) =>
              inactive.isActive ? "col-6 active" : "col-6"
            }
          >
            已完成
          </NavLink>
        </div>
      </div>
      {/* <Todo todos={todos} removeTodo={removeTodo} /> */}
      <Routes>
        <Route
          path="Todo"
          element={
            <Todo
              todos={todos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          }
        />
        <Route path="TodoOver" element={<TodoOver complete={complete} />} />
        <Route path="*" element={<Navigate to="Todo" />} />
      </Routes>
    </div>
  );
}

export default Todolist;
