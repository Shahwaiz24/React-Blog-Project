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
        },
        signUp: (state, action) => {
            state.state = true;
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
});
export const AuthReducers = authSlice.reducers;
export const {login,signUp,logout} = authSlice.actions;