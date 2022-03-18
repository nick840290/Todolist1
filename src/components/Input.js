import React, { useState } from "react";
import { v4 } from "uuid";

//輸入欄位
function Input(props) {
  const [input, setInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsDisabled(true);

    document.getElementById("complete").classList.add("loader");
    document.getElementById("complete").innerHTML = "";
    document.getElementById("todo").disabled = true;

    await new Promise(() =>
      setTimeout(() => {
        setIsDisabled(false);

        document.getElementById("complete").classList.remove("loader");
        document.getElementById("complete").innerHTML = "完成";
        document.getElementById("todo").disabled = false;

        props.onSubmit({
          id: v4(),
          do: input,
        });
      }, 1300)
    );
  };

  return (
    <>
      <form className="formTodo" onSubmit={handleSubmit}>
        <input
          id="todo"
          type="text"
          placeholder="請輸入代辦事項"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          // disabled="disabled"
          required
        />
        <button className="todo-button" disabled={isDisabled}>
          <div className="" id="complete">
            完成
          </div>
        </button>
      </form>
    </>
  );
}

export default Input;
