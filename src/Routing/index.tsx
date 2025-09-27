import PageNotFound from "../SharedComponents/Loaders/PageNotFound";
import { AuthRoute } from "./AuthRoutes";
import { HomeScreensRoutes } from "./HomeScreensRoutes";
import { AuthLoginPrivateRouter, HomePrivateRouter } from "./PrivateRouter";


export const IndexRoute=[
    {
        element:<AuthLoginPrivateRouter/>,
        children:AuthRoute
    },
    {
        element:<HomePrivateRouter/>,
        children:HomeScreensRoutes
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
]