import { createHashRouter, RouterProvider } from "react-router-dom";
import { IndexRoute } from "./Routing";


export default function App(){
  const router = createHashRouter(IndexRoute);

return(
  <RouterProvider router={router}/>
)
}