import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import styled from "styled-components";
function TodoList() {
  const TodoListDiv = styled.div`
    height: 17rem;
    overflow-y: scroll;
    margin-top: 0.5rem;
    overflow-x: hidden;
  `;
  return (
    <TodoListDiv className="todoList">
      <TodoItem />
      <TodoItem />

      <input placeholder="your task.." className="todoInput" type="text" />
    </TodoListDiv>
  );
}
export default TodoList;
