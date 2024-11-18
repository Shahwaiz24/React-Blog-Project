import { useEffect, useState } from "react"
import {signUp,login,logout} from "./services/Slices/Auth-Slices";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const [isloading, setLoading] = useState(true);
  const dispatch = useDispatch();

  let status = useSelector((state) => state.auth.status)

  useEffect(() => {
    let isLogin = true;
      // JSON.parse(localStorage.getItem("isLogin")) || true;
    if (isLogin == true) {
    

      let userId = JSON.parse(localStorage.getItem("userId")) || {};
      // Api Fetch Etc //
      dispatch(login({ userData: {} }));
      console.log("Login", " status: ",status)
    } else {
      console.log("Logout")

      logout();
    }
  },[])


  return (
    <>
      <h1>{status.toString()}</h1>
    </>
  )
}

export default App
