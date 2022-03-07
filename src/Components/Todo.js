import TodoList from "./TodoList/TodoList";
import TodoDate from "./TodoDate/TodoDate";
import AddButton from "./AddButton/AddButton.js";
import styled from "styled-components";
function Todo() {
  const TodoDiv = styled.div`
    background-color: white;
    width: 15rem;
    margin: 4rem auto;
    padding: 3rem 2rem;
    position: relative;
    border-radius: 2px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  `;
  return (
    <TodoDiv>
      <TodoDate />
      <TodoList />
      <AddButton />
    </TodoDiv>
  );
}
export default Todo;
