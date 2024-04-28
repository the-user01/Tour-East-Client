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
                path:'/myLists/email/:email',
                element: <MyLists></MyLists>,
                loader: ({params})=> fetch(`http://localhost:5000/allSpots/email/${params.email}`)
            },
            {
                path:'/spotDetails/:id',
                element: <PrivateRoutes> <SpotDetails></SpotDetails> </PrivateRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/allSpots/${params.id}`)
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