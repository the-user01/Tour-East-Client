import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllSpots from "../pages/Home/AllSpots";
import AddSpots from "../pages/Home/AddSpots";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/allSpots',
                element: <AllSpots></AllSpots>,
            },
            {
                path:'/addSpots',
                element: <AddSpots></AddSpots>,
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
  ])


  export default router;