import styled from 'styled-components'
import SelectNumber from './SelectNumber'
import TotalScore from './TotalScore'
import DiceRoller from './DiceRoller';

function GamePlay() {
  return (
    <Container>
      <MainContainer>
        <TotalScore />
        <SelectNumber />
      </MainContainer>
      <DiceRoller/>
    </Container>
  );
}

export default GamePlay

const MainContainer=styled.main`
    display: flex;
    justify-content: space-between;
`
const Container=styled.div`
    
`