import React, {useEffect} from 'react';

export default function Logout({history}) {

  useEffect(()=>{
    localStorage.removeItem("token");
    history.push("/");
  },[history])

  return (
    <div></div>
  );
};
