// import "./TodoDate.css";
import Date from "../Date/Date";
import styled from "styled-components";
function TodoDate() {
  const TodoDateDiv = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
  // border:1px solid black;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <TodoDateDiv>
      <Date />
      <div>FRIDAY</div>
    </TodoDateDiv>
  );
}
export default TodoDate;
