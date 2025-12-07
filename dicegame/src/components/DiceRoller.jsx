import { useState } from "react";
import styled from "styled-components";

function DiceRoller() {
    const [currentDice,setCurrentDice]=useState(1)
    const [selectedNumber,setSelectedNumber]=useState()
    const [score,setScore]=useState(0)

    const randomFunction=(min,max)=>{
        return Math.floor(Math.random() * (max - min + 1))+min;
    }

    const diceRoll=()=>{
        const randomNumber = randomFunction(1, 6);

        setCurrentDice(randomNumber)

        if(selectedNumber === randomNumber){
          setScore((prev)=>prev + randomNumber)
        } else{
          setScore((prev) => prev - randomNumber);
        }
        

        
    }

  return (
    <Container>
      <div>
        <img onClick={diceRoll} src={`/images/dices/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </Container>
  );
}

export default DiceRoller

const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-size: 18px;
        font-weight: 500;
        /* text-align: center; */
    }
`