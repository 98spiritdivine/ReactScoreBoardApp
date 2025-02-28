import React, { useState } from "react";

function Counter({
  maxS,
  handleW,
  resetScore,
  Player1Wins,
  Player2Wins,
  Player1Name,
  Player2Name,
}) {
  const [Player1Score, setPlayer1Score] = useState(0);
  const [Player2Score, setPlayer2Score] = useState(0);

  function Increment(player) {
    if (player === 1 && Player1Score < maxS) {
      const newS = Player1Score + 1;
      setPlayer1Score(newS);
      if (newS === maxS) {
        handleW(1);
      }
    } else if (player === 2 && Player2Score < maxS) {
      const newS = Player2Score + 1;
      setPlayer2Score(newS);
      if (newS === maxS) {
        handleW(2);
      }
    }
  }

  function Decrement(player) {
    if (player === 1 && Player1Score > 0) {
      setPlayer1Score(Player1Score - 1);
    } else if (player === 2 && Player2Score > 0) {
      setPlayer2Score(Player2Score - 1);
    }
  }

  function Reset() {
    setPlayer1Score(0);
    setPlayer2Score(0);
    resetScore();
  }

  function NextRound() {
    setPlayer1Score(0);
    setPlayer2Score(0);
  }

  return (
    <div className="CounterContainer">
      <div className="PlayerCounter">
        <h1>
          {Player2Name || "Player1"} : {Player1Score}
        </h1>
        <button onClick={() => Increment(1)}>+</button>
        <button onClick={() => Decrement(1)}>-</button>
      </div>

      <div className="PlayerCounter">
        <h1>
          {Player1Name || "Player2"} : {Player2Score}
        </h1>
        <button onClick={() => Increment(2)}>+</button>
        <button onClick={() => Decrement(2)}>-</button>
      </div>
      <button onClick={Reset}>Reset</button>
      <button onClick={NextRound}>NextRound</button>
    </div>
  );
}

export default Counter;
