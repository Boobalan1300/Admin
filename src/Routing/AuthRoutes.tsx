import ForgotPassword from "../Screens/AuthScreens/ForgotPassword";
import Login from "../Screens/AuthScreens/Login";



export const AuthRoute = [
  {
    path: "/",
    children: [
      {
        index:true,
        element:<Login/>
      },
      {
        path:"forgotpassword",
        element:<ForgotPassword/>
      },

    ],
  },
];
