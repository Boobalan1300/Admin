import Delivered from "../Screens/HomeScreens/Orders/Delivered";
import Pending from "../Screens/HomeScreens/Orders/Pending";


export const OrdersRoutes=[
    {
        path:"pending",
        element:<Pending/>
    },
    {
        path:"delivered",
        element:<Delivered/>
    }
]