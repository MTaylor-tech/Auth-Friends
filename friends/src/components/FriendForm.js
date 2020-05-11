import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useParams } from "react-router-dom";

function FriendForm ({history}) {
  const [friend, setFriend] = useState({
      id: "",
      name: "",
      age: "",
      email: ""
    });
  let {friendId} = useParams();

  useEffect(()=>{
      if (friendId === undefined || friendId === null) {
        history.push('/friends');
      } else if (friendId !== 'new') {
        axiosWithAuth()
        .get(`/friends/${friendId}`)
        .then(res=>setFriend(res.data))
        .catch(err=>console.log(err));
      }
  },[friendId, history]);

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    if (friendId==='new') {
      axiosWithAuth()
        .post("/friends", friend)
        .then(res => {
          console.log(res);
          history.push('/friends');
        })
        .catch(err => {
          console.log("Err is: ", err);
      });
    } else {
      axiosWithAuth()
        .put(`/friends/${friendId}`, friend)
        .then(res => {
          console.log(res);
          history.push('/friends');
        })
        .catch(err => {
          console.log("Err is: ", err);
      });
    };
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
          placeholder="Name"
        /><br />
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          name="age"
          value={friend.age}
          onChange={handleChange}
          placeholder="age"
        /><br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
          placeholder="email"
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
