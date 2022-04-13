import React, { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import RecipeCard from '../components/RecipeCard';
import {db} from "../Firebase/firebase";
import { collection, getDocs} from "firebase/firestore";
import Grid from '@mui/material/Grid';

export default function Home() {

  const [recipes, setRecipes] = useState("");
  const [pic, setPic] = useState("");


  const user = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    // console.log("auth", auth);
    // console.log("user", auth.currentUser);

    if(user != null){
      let photoURL = user.photoURL;
      setPic(photoURL);
    }
    
  }
  
  useEffect(() =>{
    user();
    getData();
  }, []);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "Recipes"));
    querySnapshot.forEach((doc) => {
    //console.log(doc.data());
    setRecipes(oldArray => [...oldArray, doc.data()])
    // console.log("recipes", recipes);
  });
  }

  return (
    recipes.length > 0 ? (
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        {
          Object.keys(recipes).map((item, i) => (
            <Grid key={i} item xs={12} md={6} lg={3} alignItems="stretch"> <RecipeCard key={i} recipe={recipes[item]} photo={pic}/></Grid>
        ))
        }  
    </Grid>
     ) : null
    
  )
}
