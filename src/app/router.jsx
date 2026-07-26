import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout} from "@/shared";
import UserListPage from "../features/users/pages/UserListPage";
import { UserRegisterForm } from "../features/users";
import HomePage from "../features/home/components/pages/HomePage";


 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth" replace />
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                index: true,

            },

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



