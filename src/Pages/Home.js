import React from 'react';
import { getAuth } from "firebase/auth";

export default function Home() {

  const handleName = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if(user != null){
      console.log(user.displayName);
    }
  }

  return (
    <>
      <div>Home</div>
      <button onClick={handleName}>Click Me</button>
    </>
  )
}
