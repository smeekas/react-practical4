import { FiPlus } from "react-icons/fi";
import AddButtonDiv from "../../styled/addButton";
function AddButton(props) {

  return (
    <AddButtonDiv  onClick={props.onClick} >
      <FiPlus />
    </AddButtonDiv>
  );
}
export default AddButton;
