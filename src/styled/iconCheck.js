import styled from "styled-components";

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
  &.completed {
    border-color: #5be5ab;
  }
`;

export default IconCheckDiv;
