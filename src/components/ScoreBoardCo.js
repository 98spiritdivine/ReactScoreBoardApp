import React, { useState } from "react";

function ScoreBoard({
  Player1RS,
  Player2RS,
  MaxiScore,
  setMaxiScore,
  PrintPlayer1Name,
  PrintPlayer2Name,
  PlayerON,
  PlayerTN,
}) {
  const [ho, setHo] = useState(false);
  const [PlayerOTempName, setPlayerOTempName] = useState("");
  const [PlayerTTempName, setPlayerTTempName] = useState("");

  function Hover() {
    setHo(true);
  }
  function Hover2() {
    setHo(false);
  }

  function SubmitName(event) {
    event.preventDefault();
    PrintPlayer1Name(PlayerOTempName);
    PrintPlayer2Name(PlayerTTempName);
    setPlayerOTempName("");
    setPlayerTTempName("");
  }

  return (
    <>
      <div className="ScoreBoardContainer">
        <h2>ScoreBoard</h2>
        <p>
          {PlayerON || "Player 1"} : {Player1RS}
        </p>
        <p>
          {PlayerTN || "Player 2"} : {Player2RS}
        </p>

        <div className="Selector">
          <label>Playing To: </label>
          <select
            value={MaxiScore}
            onChange={(e) => setMaxiScore(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="PlayerNames">
          <form onSubmit={SubmitName}>
            <input
              onChange={(e) => setPlayerOTempName(e.target.value)}
              value={PlayerOTempName}
              placeholder="Enter Player 1's Name"
            />
            <input
              onChange={(e) => setPlayerTTempName(e.target.value)}
              value={PlayerTTempName}
              placeholder="Enter Player 2's Name"
            />
            <button
              type="submit"
              style={{ backgroundColor: ho ? "darkgray" : "black" }}
              onMouseOver={Hover}
              onMouseOut={Hover2}
            >
              Submitt
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ScoreBoard;
