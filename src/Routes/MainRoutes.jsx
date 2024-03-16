import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";

const MainRoutes = createBrowserRouter([
 {
    path:"/",
    element:<MainLayout/>,
    children:[
        {
            path:"/homepage",
            element:<HomePage></HomePage>
        },
        {
            path:"/",
            element:<HomePage></HomePage>
        },
    ]
 }
])

export default MainRoutes