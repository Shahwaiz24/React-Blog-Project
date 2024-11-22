import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userId : "",
    userData:null

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action) => {
             state.status = true;
             state.userId = JSON.parse(localStorage.getItem("userId"));
             console.log("Status Login : ", state.status, " User Data: ", state.userData);
           
        },
        signUp: (state, action) => {
            state.status = true;
            state.userId = JSON.parse(localStorage.getItem("userId"));
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null;
            state.userId = "";
            
            console.log("Status Login : ", state.status, " User Data: ", state.userData);
        },
        saveUserData: (state, action) => {
            state.userData = action.payload.userDetails;
        }
    }
});
export const AuthReducers = authSlice.reducer;
export const {login,signUp,logout,saveUserData} = authSlice.actions;