import styled from "styled-components";
import "../App.css";

function StartGmae({ toggle }) {
  return (
    <Container>
      <div>
        <img src="images/dices 1.png" alt="dices" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGmae;

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin: 0 auto;

  .content h1 {
    font-size: 80px;
    font-weight: 700;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px 18px;
  text-align: left;

  transition: 0.4s background ease-in;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid;
    transition: 0.3s background ease-in;
  }
`;
