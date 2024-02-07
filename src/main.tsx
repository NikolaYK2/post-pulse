import ReactDOM from 'react-dom/client'
import App from '@/app/App.tsx'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {ErrorPage} from "@/common/components/ui/ErrorPage/ErrorPage.tsx";
import '@/assets/styles/index.scss'
import {Posts} from "@/features/2-main/posts/ui/Posts.tsx";
import {ItemPost} from "@/features/2-main/posts/ui/post/ItemPost/ItemPost.tsx";
import {Profile} from "@/features/2-main/profile/Profile.tsx";
import {Login} from "@/features/2-main/auth/Login.tsx";
import {Home} from "@/features/2-main/home/Home.tsx";

export const baseUrl = '/post-pulse/';

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        path: 'home',
        element: <Home/>,
      },
      {
        path: 'posts',
        element: <Posts title={'Ost List'}/>,
      },
      {
        path: 'posts/:id',
        element: <ItemPost/>,

      },
      {
        path: 'profile',
        element: <Profile/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: baseUrl,
        element: <Navigate to={'home'}/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)

