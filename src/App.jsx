import { useEffect, useState } from "react"
import {signUp,login,logout} from "./services/Slices/Auth-Slices";
import { useDispatch, useSelector } from "react-redux";
import {LoaderComponent,HeaderComponent,FooterComponent} from "./index"
import { Outlet } from "react-router-dom";

function App() {

  const [isloading, setLoading] = useState(true);
  const dispatch = useDispatch();

  let status = useSelector((state) => state.auth.status).toString()

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
        isloading == true ? <LoaderComponent /> : <div>
          <  HeaderComponent />
          <Outlet/>
          <FooterComponent/>
        </div>
      }
    </>
  )
}

export default App
