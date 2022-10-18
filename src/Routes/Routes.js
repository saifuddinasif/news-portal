import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Category from "../Components/Pages/Category/Category";
import Home from "../Components/Pages/Home/Home";
import News from "../Components/Pages/News/News";



export const routes = createBrowserRouter([

{
    path: '/',
    element: <Main></Main>,

    children: [

              
       {
        path:'/',
        element:<Home></Home>
       },


                  
       {
        path:'/category/:id',
        element:<Category></Category>
       },

       {
        path:'/news/:id',
        element:<News></News>
       }





    ]
}


])