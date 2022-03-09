import TodoList from "./TodoList/TodoList";
import TodoDate from "./TodoDate/TodoDate";
import AddButton from "./AddButton/AddButton.js";
import { useState } from "react";
import TodoDiv from "../styled/todo";
function Todo() {
  const DUMMY_DATA = [
    { id: 1, value: "begin QA for the product", complete: false },
    { id: 2, value: "learn React advance", complete: true },
  ];
  const [list, setList] = useState(DUMMY_DATA);

  return (
    <TodoDiv>
      <TodoDate />
      <TodoList list={list} />
      <AddButton />
    </TodoDiv>
  );
}
export default Todo;
