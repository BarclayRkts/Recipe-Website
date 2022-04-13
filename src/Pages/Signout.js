import React from 'react';
import { signOut } from "firebase/auth";
import 'boxicons/css/boxicons.min.css';
import { authentication } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

function SignOut(){
    let navigate = useNavigate();

    const logOut = () => {
        signOut(authentication);
        navigate("/");
        console.log("logOut Successful");
    }

    return(
        <div>
            <button onClick={logOut}>Sign Out</button>
        </div>
    )
}

export default SignOut;