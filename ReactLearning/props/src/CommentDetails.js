import React from "react";

const CommentDetails = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          <h2>{props.name}</h2>
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
