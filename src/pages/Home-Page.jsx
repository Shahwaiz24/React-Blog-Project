import React, { useEffect, useState } from "react";
import { HomeComponent } from '../index.js'
import { useSelector } from "react-redux";

export default function HomePage() {

    const [showLoginFoam, setShowLoginFoam] = useState(false);
    const isLogin = useSelector((state) => state.auth.status);
    useEffect(() => {
        if (isLogin == true) {
            console.log("Login is True");
        } else {
            setShowLoginFoam(true);
            console.log("User Not Login Showing Foam");
        }
    },[])

    return (
        <HomeComponent />
    )
 }