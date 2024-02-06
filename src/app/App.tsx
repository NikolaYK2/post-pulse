import {Main} from "@/features/main/Main.tsx";
import {Header} from "@/features/header/ui/Header.tsx";
import {PostProvider} from "@/app/postRpovider/PostProvider.tsx";
import {AuthProvider} from "@/app/authProvider/AuthContext.tsx";
import cat from '@/assets/image/app/cat.png'
import s from './App.module.scss'


function App() {

  // const isNestedRoute = location.pathname !== '/post-pulse/';
  // const headerStyle = isNestedRoute ? s.mod : '';

  return (
    <div className={`${s.container}`}>

      <div className={`${s.bc1}`}>
        <img className={`${s.img}`} src={cat} alt=""/>
      </div>

      <div className={s.bc2}>aa</div>

      <AuthProvider>
        <PostProvider>
          <Header/>
          <Main/>
        </PostProvider>
      </AuthProvider>
    </div>
  )
}

export default App
