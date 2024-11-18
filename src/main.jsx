import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import AppStore from './config/App-Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeComponent } from './component/index.js'

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",  
        element: <HomeComponent />
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
