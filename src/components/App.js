import React, { useState } from "react";
import Counter from "./CounterCo";
import ScoreBoard from "./ScoreBoardCo";
import Reward from "./Reward";

export default function App() {
  const [PlayerOWins, setPlayerOWins] = useState(0);
  const [PlayerTWins, setPlayerTWins] = useState(0);
  const [MaXiScore, setMaXiScore] = useState(5);
  const [PlayerOName, setPlayerOName] = useState("");
  const [PlayerTName, setPlayerTName] = useState("");

  function HandleWinCounter(player) {
    if (player === 1) {
      setPlayerOWins((prev) => prev + 1);
    } else if (player === 2) {
      setPlayerTWins((prev) => prev + 1);
    }
  }

  function ResetScores() {
    setPlayerOWins(0);
    setPlayerTWins(0);
    setPlayerOName("");
    setPlayerTName("");
  }

  return (
    <div className="AppContainer">
      <Counter
        maxS={MaXiScore}
        handleW={HandleWinCounter}
        resetScore={ResetScores}
        Player1Wins={PlayerOWins}
        Player2Wins={PlayerTWins}
        Player1Name={PlayerOName}
        Player2Name={PlayerTName}
      />
      <ScoreBoard
        Player1RS={PlayerOWins}
        Player2RS={PlayerTWins}
        MaxiScore={MaXiScore}
        setMaxiScore={setMaXiScore}
        PlayerON={PlayerOName}
        PlayerTN={PlayerTName}
        PrintPlayer1Name={setPlayerOName}
        PrintPlayer2Name={setPlayerTName}
      />

      <Reward />
    </div>
  );
}
