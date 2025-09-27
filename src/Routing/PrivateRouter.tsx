import { Navigate, Outlet } from "react-router-dom"
// import { getCookie } from "../Store/Storage/Cookies"
// import { USER_RESET_KEY } from "../Utility/Constant"

const USER_COOKIE_NAME:string="Boobalan"
const USER_RESET_KEY:string="123"
export const AuthLoginPrivateRouter = () => {
    return USER_RESET_KEY === "" ? (
        <Navigate to="/forgotpassword"/>
    ):(
        <Outlet/>
    )
}

export const HomePrivateRouter=()=>{
    return USER_COOKIE_NAME === "" ? (
        <Navigate to={"/"}/>
    ):(
        <Outlet/>
    )
}