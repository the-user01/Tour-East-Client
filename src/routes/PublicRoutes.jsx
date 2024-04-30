import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Main/Home";
import AllSpots from "../pages/Main/AllSpots";
import AddSpots from "../pages/Main/AddSpots";
import MyLists from "../pages/Main/MyLists";
import SpotDetails from "../pages/Main/SpotDetails";
import UpdateSpot from "../pages/Main/UpdateSpot";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import CountrySpot from "../pages/Main/HomePages/CountrySpot";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allSpots',
                element: <AllSpots></AllSpots>,
                loader: () => fetch("http://localhost:5000/allSpots")
            },
            {
                path: '/addSpots',
                element: <AddSpots></AddSpots>,
            },
            {
                path: '/myLists/email/:email',
                element: <MyLists></MyLists>,
                loader: ({ params }) => fetch(`http://localhost:5000/allSpots/email/${params.email}`),
            },
            {
                path: '/spotDetails/:id',
                element: <PrivateRoutes> <SpotDetails></SpotDetails> </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/allSpots/${params.id}`)
            },
            {
                path: '/updateSpot/:id',
                element: <UpdateSpot></UpdateSpot>,
                loader: ({ params }) => fetch(`http://localhost:5000/allSpots/${params.id}`)
            },
            {
                path: '/countrySpot/name/:name',
                element: <CountrySpot></CountrySpot>,
                loader: ({ params }) => fetch(`http://localhost:5000/allCountries/name/${params.name}`)
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
    },

])


export default router;