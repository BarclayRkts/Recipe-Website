import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { authentication } from "./Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./Pages/Home";
import SignIn from "./components/SignIn";

function App() {
  const [isUserSignedIn, setisUserSignedIn] = useState(true);

  //Checking if user is signed in then changing state
  onAuthStateChanged(authentication, user => {
    console.log('State Changed Clicked')
    // Check for user status
    if(user){
      return setisUserSignedIn(true);
    }

    setisUserSignedIn(false);

  });

  if(isUserSignedIn == true){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }else{
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
