import {Main} from "@/features/main/Main.tsx";
import {Header} from "@/features/header/ui/Header.tsx";
import {PostProvider} from "@/app/postRpovider/PostProvider.tsx";
import {AuthProvider} from "@/app/authProvider/AuthContext.tsx";
import s from './App.module.scss'

function App() {


  return (
    <div className={s.container}>
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
