import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getUserWithGoogle, setUserNotes } from "./user.actions";

const initialState = {};
    // id: '',
    // name: '',
    // notes: [],
    // photo: ''


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getLoggedUser: (state, { payload }) => {
            state.user = payload;
        },
        logOut: (state => state = initialState),
        setNote: (state, { payload }) => {
            console.log(state.user)
            debugger
            if(state.user){
                const note = {
                    name: state.user.name,
                    imageUrl: state.user.name,
                    category: payload.category,
                    title: payload.text,
                    startDateTime: payload.startDateTime,
              }
              state.user.notes = [...state.user.notes, note];
              console.log(state.user);
            }else{
                alert('sign in, please')
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getUserWithGoogle.fulfilled, (state, action) => {
                if(action.payload){
                    debugger
                    action.payload.notes = state?.user?.notes ? state.user.notes : [];
                    state.user = action.payload;
                    console.log(state.user);
                    debugger
                }
            })
            .addCase(getUserWithGoogle.rejected, (state, action) => {
                state.user = {};
            })
            .addCase(setUserNotes.fulfilled, (state, { payload }) => {
                if(state.user){
                    const note = {
                        name: state.user.name,
                        imageUrl: state.user.photo,
                        category: payload.category,
                        title: payload.title,
                        startDateTime: payload.startDateTime,
                    }  
                    state.user.notes = [...state.user.notes, note];
                    console.log(state.user);
                    debugger           
                }else{
                    alert('Sign in to write note, please');
                }

            })
    }
})

export const { setGoogleUser, logOut, setNote, getLoggedUser } = userSlice.actions;

export default userSlice.reducer;