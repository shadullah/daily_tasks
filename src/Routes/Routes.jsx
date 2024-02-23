import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
// import HomoTodo from "../Components/Home/HomoTodo/HomoTodo";
import Home from "../Components/Home/HomeFetch/Home";
import Login from "../Components/Authentication/Login/Login";
import Signup from "../Components/Authentication/SignUp/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
