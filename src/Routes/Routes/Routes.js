import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Course from "../../Pages/Course/Course/Course";
import Blog from "../../Pages/Shared/Blog/Blog";
import Courses from "../../Pages/Course/Courses/Courses";
import CPluse from "../../Pages/Course/AllCourse/CPluse";
import Html from "../../Pages/Course/AllCourse/Html";
import Java from "../../Pages/Course/AllCourse/Java";
import Javascript from "../../Pages/Course/AllCourse/Javascript";
import Python from "../../Pages/Course/AllCourse/Python";
import Php from "../../Pages/Course/AllCourse/Php";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                loader: () => fetch(`http://localhost:5000/course`)
            },
            {
                path: '/details',
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/course`)

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/cpluse',
                element: <PrivateRoute><CPluse></CPluse></PrivateRoute>

            },
            {
                path: '/html',
                element: <PrivateRoute><Html></Html></PrivateRoute>

            },
            {
                path: '/java',
                element: <PrivateRoute><Java></Java></PrivateRoute>

            },
            {
                path: '/javascript',
                element: <PrivateRoute><Javascript></Javascript></PrivateRoute>

            },
            {
                path: '/python',
                element: <PrivateRoute><Python></Python></PrivateRoute>

            },
            {
                path: '/php',
                element: <PrivateRoute><Php></Php></PrivateRoute>

            },
            {
                path: '/register',
                element: <Register></Register>

            },


        ]
    }
]) 