import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';
import { storage, db } from  "../Firebase/firebase";
import { getAuth } from "firebase/auth";
import { collection, addDoc} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [pic, setPic] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [picURL, setPicURL] = useState("");
  const [userID, setUserID] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [uniqueTag, setUniqueTag] = useState("");
  const [uploaded, setUploaded] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    secondHalf();
  }, [picURL])

  useEffect(() => {
    if (uploaded) {
      navigate("/");
    }
  }, [picURL])

  const handleName = (e) => {
    setRecipeName(e.target.value);
  }

  const handleIngredients = (e) => {
    setIngredients(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleNotes = (e) => {
    setNotes(e.target.value)
  }

  const handlePic = (evt) => {
    setPic(evt.target.files[0])
  }

  const addItems = (e) => {
    // let uniqueTag = uuidv4();
    let tag = uuidv4();
    const auth = getAuth();
    const user = auth.currentUser;
    
    uploadImage(uniqueTag);
    // console.log("URL inside of add Items", picURL);
    if(user != null){
      console.log(user.uid);
      setDisplayName(user.displayName);
    }

    setUniqueTag(tag);
    setUserID(user.uid);
    setDisplayName(user.displayName);
    setEmail(user.email);

    //addDataToDB(uniqueTag, recipeName, ingredients, description, notes, picURL, user.uid, user.displayName, user.email);

    alert("Successfully Added")
    e.preventDefault();
    // navigate("/");
    setUploaded(true)

  }

  const secondHalf = () => {
    if (recipeName != ""){
      addDataToDB(uniqueTag, recipeName, ingredients, description, notes, picURL, userID, displayName, email);
    }
    setRecipes(prevItems =>{
      return [...prevItems, {id: uniqueTag, recipeName, ingredients, description, notes, picURL, userID, displayName: displayName}]
    });

  }

  const uploadImage = (uniqueTag) => {
    if(pic == null) return;

    const metadata = {
      contentType: pic.type
    }

    const imageRef = ref(storage, `images/${uniqueTag}`);

    uploadBytes(imageRef, pic, metadata).then((snapshot) => {
      // console.log('File metadata:', snapshot.metadata);
      console.log("uploaded")

      getDownloadURL(snapshot.ref).then((url) => {
        // console.log('File available at', url);
        let modURL = String(url);
        setPicURL(modURL)

      });
    }).catch((error) => {
      console.error('Upload failed', error);
    });
    

  }

  const addDataToDB = async (uniqueTag, recipeName, ingredients, description, notes, picURL, uid, displayName, email) => {
    //console.log("db", {uniqueTag, recipeName, ingredients, description, notes, picURL, uid, displayName});
    const itemRef = collection(db, "Recipes");
    const payload = {id: uniqueTag, recipeName, ingredients, description, notes, picURL, userID: uid, displayName, email};
    console.log("payload", payload)
    await addDoc(itemRef, payload)
    console.log("successfully added");
  
  }

  return (
    <>
      <h1>Add a Recipe</h1>
      <Box sx={{
        width: 500,
        height: 300
      }}>
      <form onSubmit={addItems}>
        <TextField
          id="Name"
          required
          label="Name of the recipe"
          fullWidth
          variant="filled"
          onChange={handleName}
        />
        <TextField
          id="Ingredients" 
          required
          label="Ingredients"
          fullWidth
          variant="filled"
          multiline
          rows={5}
          margin="normal"
          onChange={handleIngredients}
        />
        <TextField
          id="Description"
          required
          label="Recipe description and how to make it"
          fullWidth
          variant="filled"
          multiline
          rows={5}
          margin="normal"
          onChange={handleDescription}
        />
        <TextField
          id="Notes"
          label="Small Description"
          fullWidth
          variant="filled"
          multiline
          rows={5}
          margin="normal"
          onChange={handleNotes}
        />
        <label>
          <input accept="image/*" type="file" onChange={handlePic} required/>
        </label>
        <button type="submit">Publish Recipe</button>
      </form>
      </Box>
    </>
  )
}

export default AddRecipe;
