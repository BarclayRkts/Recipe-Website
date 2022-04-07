import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import {db} from "../Firebase/firebase";
import { collection, getDocs} from "firebase/firestore";

export default function Home() {

  const [recipes, setRecipes] = useState("");

  useEffect(() =>{
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
    <>
      {
        Object.keys(recipes).map((item, i) => (
          <RecipeCard key={i} recipe={recipes[item]}/>
      ))

      }  
    </>
  )
}
