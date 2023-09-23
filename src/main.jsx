import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './component/Mainlayout/MainLayout.jsx';
import Home from './component/Home/Home.jsx';
import Products from './products/Products.jsx';
import Login from './component/Login/Login.jsx';
import Error from './component/Error/Error.jsx';
import Phone from './component/phone/Phone.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('data.json')

      },{
        path: "/Product",
        element: <Products></Products>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/phones/:id",
        element: <Phone></Phone>,
        loader: () => fetch('/data.json')
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
