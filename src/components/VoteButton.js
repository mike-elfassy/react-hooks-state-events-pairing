import React, { useState } from "react";

function VoteButton({ votes, emoji }) {

  const [newVotes, setNewVotes] = useState(votes)

  const handleClick = function(event) {
    setNewVotes(newVotes => newVotes + 1)
  }

  return (
    <button onClick={handleClick}>{newVotes} {emoji}</button>
  );
}

export default VoteButton;