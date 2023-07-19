import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../data";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const signInWithGoogle = async() => {
    let user;
    await signInWithPopup(auth, provider)
    .then((result) => {
        if (result.user){
            user = {
                id: result.user.uid,
                name: result.user.displayName,
                notes: [],
                photo: result.user.photoURL,
            }   
        }
        return user 
        }).catch((error) => {
            console.error(error);
        }); 
        return user  
    }

export const getUserWithGoogle = createAsyncThunk('users/by-id', async( thunkApi) => {
    try {
        const response =  await signInWithGoogle();
        return response;
    }catch(error){
        thunkApi.rejectWithValue(error);
    }
})


const setNotes = async( result ) => {
    const note = {
        category: result.category,
        title: result.title,
        startDateTime: result.startDateTime,
    }
    return note;
}

export const setUserNotes = createAsyncThunk('users/notes', async(result, thunkApi) => {
    try {
        const response =  await setNotes( result );
        return response;
    }catch(error){
        thunkApi.rejectWithValue(error);
    }
})




