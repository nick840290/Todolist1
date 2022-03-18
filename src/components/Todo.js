import React from "react";

//todo列表
function Todo({ todos, completeTodo, removeTodo }) {
  return todos.map((todos, index) => (
    <>
      <div key={index}>
        <div className="todoBox d-flex justify-content-between pt-3">
          <div>{todos.do}</div>
          <div>
            <button
              className="me-2"
              onClick={() => completeTodo(todos, todos.id)}
            >
              完成
            </button>
            <button onClick={() => removeTodo(todos.id)}>刪除</button>
          </div>
        </div>
      </div>
    </>
  ));
}

export default Todo;
