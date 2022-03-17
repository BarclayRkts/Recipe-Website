import React from "react";
import { authentication } from "../Firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import "../styles/SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  { Redirect } from 'react-router-dom';

function SignIn() {

  const SignInWithFirebase = () => {
    let provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return(
    <div>
      <Button onClick={SignInWithFirebase} className="btn">Sign In with Google</Button>
    </div>
    )

}

export default SignIn;