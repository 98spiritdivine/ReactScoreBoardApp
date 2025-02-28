import React, { useSate } from "react";

const Gifts = ["Massage", "Fufu", "Walk"];
function Random(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Reward() {
  const Rewarding = Gifts[Random(2)];

  return (
    <>
      <div>
        <h1> Reward </h1>
        <p> {Rewarding} </p>
      </div>
    </>
  );
}

export default Reward;
