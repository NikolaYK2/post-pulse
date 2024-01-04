import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/styles/index.scss'
import {createBrowserRouter} from "react-router-dom";
import {Posts} from "@/features/main/posts/ui/Posts.tsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts title={'Ost List'}/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App/>
)
