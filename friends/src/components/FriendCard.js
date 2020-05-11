import React from 'react';
import { Link } from "react-router-dom";

const FriendCard = ({friend}) => {
  return (
    <div className="friend-card">
      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <a href={`mailto:${friend.email}`}>{friend.email}</a>
      <br />
      <Link to={`/friends/${friend.id}`}>Edit</Link>
    </div>
  );
};

export default FriendCard;
