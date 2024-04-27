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
import MyLists from "../pages/Home/MyLists";
import PrivateRoutes from "./PrivateRoutes";
import SpotDetails from "../pages/Home/SpotDetails";


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
                loader: ()=> fetch("http://localhost:5000/allSpots")
            },
            {
                path:'/addSpots',
                element: <AddSpots></AddSpots>,
            },
            {
                path:'/myLists',
                element: <MyLists></MyLists>,
            },
            {
                path:'/spotDetails',
                element: <PrivateRoutes> <SpotDetails></SpotDetails> </PrivateRoutes>,
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