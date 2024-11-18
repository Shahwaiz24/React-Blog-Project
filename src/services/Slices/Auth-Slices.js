import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData:null

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action) => {
           
             state.status = true;
             state.userData = action.payload.userData;
             console.log("Status Login : ", state.status, " User Data: ", state.userData);
           
        },
        signUp: (state, action) => {
            state.state = true;
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null
                ;
            console.log("Status Login : ", state.status, " User Data: ", state.userData);
        }
    }
});
export const AuthReducers = authSlice.reducer;
export const {login,signUp,logout} = authSlice.actions;