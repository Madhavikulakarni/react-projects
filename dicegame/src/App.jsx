
import { useState } from "react";
import StartGmae from "./components/StartGmae"
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted,setIsGameStarted]=useState(true)

  const toggleGamePlay=()=>{setIsGameStarted((prev)=> !prev)}

  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGmae toggle={toggleGamePlay}/>}
    </>
  );
}

export default App;

