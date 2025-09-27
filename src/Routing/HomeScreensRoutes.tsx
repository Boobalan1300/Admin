import MainScreenLayout from "../Layout/MainScreenLayout/MainScreenLayout";
import Dashboard from "../Screens/Dashboard";
import { OrdersRoutes } from "./OrdersRoute";



export const HomeScreensRoutes=[
    {
        element:<MainScreenLayout/>,
        children:[
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"orders",
                children:OrdersRoutes
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            }
        ]
    }
]