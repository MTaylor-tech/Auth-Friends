import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';

export default function FriendList() {
  const [list, setList] = useState([]);

  useEffect(()=>{
      axiosWithAuth()
        .get("/friends")
        .then(res => {
          console.log(res);
          setList(res.data);
        })
        .catch(err => {
          console.log("Err is: ", err);
        });
  },[])


  return (
    <div className="friendList">
      {list.map(f=><FriendCard friend={f} key={f.id} />)}
    </div>
  );
};
