import React, {useState} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { authentication } from "./Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import SignOut from "./Pages/Signout";
import SignIn from "./components/SignIn";
import AppLayout from './components/layout/AppLayout';
import Home from './Pages/Home';
import AddRecipe from './Pages/AddRecipe';

function App() {
  const [isUserSignedIn, setisUserSignedIn] = useState(true);

  //Checking if user is signed in then changing state
  onAuthStateChanged(authentication, user => {
    //console.log('State Changed Clicked')
    // Check for user status
    if(user){
      return setisUserSignedIn(true);
    }

    setisUserSignedIn(false);

  });

  if(isUserSignedIn === true){
    return (
      <Router>
        <Routes>
          {/*<Route exact path="/" element={Home}/>*/}
          <Route path='/' element={<AppLayout/>}>
            <Route index element={<Home/>} />
            <Route path='/addRecipe' element={<AddRecipe/>} />
            {/* <Route path='/profile' element={<Profile/>} /> */}
            <Route path='/signOut' element={<SignOut/>} />
          </Route>
        </Routes>
      </Router>
    );
  }else{
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
