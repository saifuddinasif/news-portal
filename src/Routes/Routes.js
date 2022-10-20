import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Category from "../Components/Pages/Category/Category";
import Home from "../Components/Pages/Home/Home";
import News from "../Components/Pages/Shared/News/News";




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
        element:<News></News>,
        loader: ({params}) =>fetch(`http://localhost:5000/news/${params.id}`) 
       }





    ]
}


])