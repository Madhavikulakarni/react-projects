import styled from "styled-components"
import { useState } from "react"
function SelectNumber() {
    const arr=[1,2,3,4,5,6]
    let [selectedNumber,setSelectedNumber] = useState()

    console.log(selectedNumber)
  return (
    <Container>
      <div className="boxes">
        {arr.map((val, i) => (
          <Box
            isSelected={val === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(val)}
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
}

export default SelectNumber

const Box = styled.div`
 
    border: 1px solid;
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    font-size: 18px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
  
`;
const Container = styled.div`

margin: 70px;
  .boxes {
    display: flex;
    gap: 24px;
  }
  p{
    text-align: end;
    font: 18px;
    font-weight: 700;
  }
`;