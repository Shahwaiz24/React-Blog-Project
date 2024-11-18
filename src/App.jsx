import { useEffect, useState } from "react"
import {signUp,login,logout} from "./services/Slices/Auth-Slices";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "./component/loader/loader";

function App() {

  const [isloading, setLoading] = useState(true);
  const dispatch = useDispatch();

  let status = useSelector((state) => state.auth.status)

  useEffect(() => {
    let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false
    if (isLogin == true) {
    

      let userId = JSON.parse(localStorage.getItem("userId")) || {};
      // Api Fetch Etc //
      dispatch(login({ userData: {} }));
      console.log("Login", " status: ", status)
      setLoading(false)
    } else {
      console.log("Logout")

      dispatch(logout()) 
      setLoading(false)

    }
  },[])


  return (
    <>
      {
        isloading == true ? <LoaderComponent /> : <h1>{status.toString()}</h1>
      }
    </>
  )
}

export default App
