import { useEffect, useState } from "react"
import {signUp,login} from "./services/Slices/Auth-Slices";
import { useDispatch } from "react-redux";

function App() {

  const [isloading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
    if (isLogin == true) {
      let userId = JSON.parse(localStorage.getItem("userId")) || null;
      // Api Fetch Etc //
      login()
    }
  },[])


  return (
    <>
      <h1>New Project</h1>
    </>
  )
}

export default App
