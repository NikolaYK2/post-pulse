import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/styles/index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Posts} from "@/features/main/posts/ui/Posts.tsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'home',
        element: <Posts title={'Ost List'}/>
      },
      {
        path:'profile',
        element: <Posts title={'Ost List'}/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
