import { signOut } from "firebase/auth";
import React from 'react';
import { authentication } from "../Firebase/firebase";
import  { Redirect } from 'react-router-dom';

function Home(){

    const logOut = () => {
        signOut(authentication);
        console.log("logOut Successful");
    }

    return(
        <div>
            <h1>Home</h1>
            <button onClick={logOut }>Sign Out</button>
        </div>
    )
}

export default Home;