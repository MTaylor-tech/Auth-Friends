import React from 'react';
import { Link } from "react-router-dom";

const FriendCard = ({friend}) => {
  return (
    <div className="friend-card">
      <h2 className="friend-card-item">{friend.name}</h2>
      <p className="friend-card-item">Age: {friend.age}</p>
      <a className="friend-card-item" href={`mailto:${friend.email}`}>{friend.email}</a>
      <Link className="friend-card-item" to={`/friends/${friend.id}`}>Edit</Link>
    </div>
  );
};

export default FriendCard;
