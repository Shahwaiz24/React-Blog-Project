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
             state.userId = localStorage.getItem("userId");
             localStorage.setItem("isUserLogin",JSON.stringify(true))
             console.log("Status Login : ", state.status, " User Data: ", state.userData);
           
        },
        signUp: (state, action) => {
            state.status = true;
            state.userId = localStorage.getItem("userId");
            localStorage.setItem("isUserLogin",JSON.stringify(true))

        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null;
            state.userId = "";
            localStorage.setItem("isUserLogin",JSON.stringify(false))

            
            console.log("Status Login : ", state.status, " User Data: ", state.userData);
        },
        saveUserData: (state, action) => {
            state.userData = action.payload.userDetails;
        }
    }
});
export const AuthReducers = authSlice.reducer;
export const {login,signUp,logout,saveUserData} = authSlice.actions;