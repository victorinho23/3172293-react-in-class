import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout} from "@/shared";
import UserListPage from "../features/users/pages/UserListPage";
import { UserRegisterForm } from "../features/users";
import HomePage from "../features/home/components/pages/HomePage";
import { Login } from "../features/auth";


 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/Login" replace />
    },
    {
        path: "/Login",
        element: <Login/>,
        children: [
            {
                index: true,

            },
            //  {path: "login", element: <Login/>}

        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [

            {index: true,},
            // {path: "/dashboard/auth", element: <h1>Hello2</h1>},
            {path: "userList", element: <UserListPage/>},
            {path: "userCreate", element: <UserRegisterForm/>},

        ],
    },

    {
        path: "/home",
        element: <HomePage/>,
        children: [

            {index: true,},
            // {path: "/dashboard/auth", element: <h1>Hello2</h1>},
            // {path: "userList", element: <UserListPage/>},
            // {path: "userCreate", element: <UserRegisterForm/>},

        ],
    },

]);


export default router;



