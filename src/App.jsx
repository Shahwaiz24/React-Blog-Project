import { useState } from "react"
import {LoaderComponent,HeaderComponent,FooterComponent} from "./index"
import { Outlet } from "react-router-dom";

function App() {

  const [isloading, setLoading] = useState(false);

  return (
    <>
      
       
          <  HeaderComponent />
        {isloading == true ? <LoaderComponent /> : <Outlet/> } 
          <FooterComponent/>
       
      
    </>
  )
}

export default App
