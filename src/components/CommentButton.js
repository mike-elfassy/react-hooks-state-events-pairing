import React, { useState } from "react";

function CommentButton({ showComments, setShowComments }) {

  const handleClick = function(event) {
    setShowComments(showComments => !showComments)
  }

  return (
    <div>
      <button onClick={handleClick}>{showComments ? "Hide" : "Show"} Comments</button>
    </div>
  );
}

export default CommentButton;