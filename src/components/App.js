import React, { useState } from "react";
import VoteButton from "./VoteButton"
import CommentButton from "./CommentButton"
import Comment from "./Comment"
import video from "../data/video.js";

function App() {

  const [showComments, setShowComments] = useState(true)

  const displayComments = function() {
    return (
      <>
        <h1>{video.comments.length} Comments</h1>
        {video.comments.map(comment => <Comment comment={comment} />)}
      </>
    )
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <VoteButton
        votes={video.upvotes}
        emoji="👍"
      />
      <VoteButton
        votes={video.downvotes}
        emoji="👎"
      />
      <br/>
      <br/>
      <CommentButton
        showComments={showComments}
        setShowComments={setShowComments}
      />
      <hr/>
      {showComments? displayComments() : null}
    </div>
  );
}

export default App;
