import ReactDOM from 'react-dom/client'
import App from '@/app/App.tsx'
import '@/assets/styles/index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Posts} from "@/features/main/posts/ui/Posts.tsx";
import {Profile} from "@/features/main/profile/Profile.tsx";
import {ErrorPage} from "@/common/components/ui/ErrorPage/ErrorPage.tsx";
import {ItemPost} from "@/features/main/posts/ui/post/ItemPost/ItemPost.tsx";
import {Login} from "@/features/main/auth/Login.tsx";

export const baseUrl = '/post-pulse/';

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)

