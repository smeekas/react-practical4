import styled from "styled-components";
function Date() {
  const DateDiv = styled.div`
    display: flex;
    align-items: center;
    // border: 1px solid red;
    & div {
      padding: 0px 2px;
    }
  `;
  const DayDiv = styled.div`
    height: 100%;
    // border: 1px solid green;
    font-size: 2.5rem;
    font-weight:400;
  `;
  return (
    <DateDiv>
      <DayDiv>12</DayDiv>
      <div>
        <div>JAN</div>
        <div>2016</div>
      </div>
    </DateDiv>
  );
}
export default Date;
