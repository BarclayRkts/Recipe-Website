import React from 'react';
import { signOut } from "firebase/auth";
import 'boxicons/css/boxicons.min.css';
import { authentication } from "../Firebase/firebase";

function SignOut(){

    const logOut = () => {
        signOut(authentication);
        console.log("logOut Successful");
    }

    return(
        <div>
            <button onClick={logOut}>Sign Out</button>
        </div>
    )
}

export default SignOut;