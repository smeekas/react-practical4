import TodoItem from "../TodoItem/TodoItem";
import TodoListDiv from "../../styled/todoList";
function TodoList(props) {
  return (
    <TodoListDiv >
      {props.list.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.key}
            value={todoItem.value}
            isCompleted={todoItem.complete}
          />
        );
      })}
    </TodoListDiv>
  );
}
export default TodoList;
