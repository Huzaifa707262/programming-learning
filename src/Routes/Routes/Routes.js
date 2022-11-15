import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Course from "../../Pages/Course/Course/Course";
import Blog from "../../Pages/Shared/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch(`http://localhost:5000/programing-learning`)
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>

            },

            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>

            },
        ]
    }
]) 