import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Category from "../Components/Pages/Category/Category";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Shared/Login/Login";
import News from "../Components/Pages/Shared/News/News";
import Register from "../Components/Pages/Shared/Register.js/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import TermsCon from './../Components/Pages/TermsCon/TermsCon';




export const routes = createBrowserRouter([

{
    path: '/',
    element: <Main></Main>,

    children: [

              
       {
        path:'/',
        
        element:<Home></Home>,
        loader: () => fetch(`http://localhost:5000/news`)

       },


                  
       {
        path:'/category/:id',
        element:<Category></Category>,
   
       loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`) 
       },

       {
        path:'/news/:id',
        element:<PrivateRoutes><News></News></PrivateRoutes>,
        loader: ({params}) =>fetch(`http://localhost:5000/news/${params.id}`) 
       },

       {
        path : '/login',

        element:<Login></Login>,

       },

       {
        path : '/register',

        element:<Register></Register>,
        
       },

       {
        path : '/terms',

        element:<TermsCon></TermsCon>,
        
       }





    ]
}


])