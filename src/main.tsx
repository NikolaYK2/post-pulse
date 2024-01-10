import ReactDOM from 'react-dom/client'
import App from '@/app/App.tsx'
import '@/assets/styles/index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Posts} from "@/features/main/posts/ui/Posts.tsx";
import {Profile} from "@/features/main/profile/Profile.tsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        path: 'home',
        element: <Posts title={'Ost List'}/>
      },
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
