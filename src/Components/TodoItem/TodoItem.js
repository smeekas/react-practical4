import { FiCheck } from "react-icons/fi";
import { IconContext } from "react-icons";
import TodoItemDiv from "../../styled/todoItem";
import IconCheckDiv from "../../styled/iconCheck";
function TodoItem(props) {
  return (
    <IconContext.Provider
      value={{ className: props.isCompleted ? "completed" : "checks" }}
    >
      <TodoItemDiv>
        <p>{props.value}</p>
        <IconCheckDiv className={props.isCompleted ? "completed" : ""}>
          <FiCheck />
        </IconCheckDiv>
      </TodoItemDiv>
    </IconContext.Provider>
  );
}
export default TodoItem;
