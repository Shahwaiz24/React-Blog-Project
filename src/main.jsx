import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import AppStore from './config/App-Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {LoginPage,HomePage,SignUpPage} from './pages/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",  
        element: <HomePage />
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/signup",
        element: <SignUpPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={AppStore}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)
