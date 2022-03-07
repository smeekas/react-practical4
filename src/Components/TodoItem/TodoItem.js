import { FiCheck, FiCircle } from "react-icons/fi";
import "./TodoItem.css";
import { IconContext } from "react-icons";
import styled from "styled-components";
function TodoItem() {
  const TodoItemDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 0.5rem;
  `;
  const IconCheckDiv = styled.div`
    border: 2px solid #cbccd0;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover .checks {
      color: #5be5ab;
    }
    &:hover {
      border-color: #5be5ab;
    }
  `;
  return (
    <IconContext.Provider value={{ className: "checks" }}>
      <TodoItemDiv>
        <p>begin QA for product</p>
        <IconCheckDiv>
          <FiCheck />
        </IconCheckDiv>
      </TodoItemDiv>
    </IconContext.Provider>
  );
}
export default TodoItem;
