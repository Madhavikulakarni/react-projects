import styled from "styled-components"

function TotalScore({score}) {
  return (
    <div>
        <Container>
            <h1>{score}</h1>
            <p>Total Score</p>
        </Container>
    </div>
  )
}

export default TotalScore

const Container = styled.div`
  h1 {
    font-size: 50px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    font-weight: 500;
  }
`;