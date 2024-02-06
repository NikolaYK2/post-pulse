import {PostProvider} from "@/app/postRpovider/PostProvider.tsx";
import {AuthProvider} from "@/app/authProvider/AuthContext.tsx";
import s from './App.module.scss'
import {Main} from "@/features/2-main/Main.tsx";
import {Header} from "@/features/1-header/ui/Header.tsx";
import {Footer} from "@/features/3-footer/Footer.tsx";

function App() {
  return (
    <div className={s.container}>
      <AuthProvider>
        <PostProvider>
          <Header/>
          <Main/>
          <Footer/>
        </PostProvider>
      </AuthProvider>
    </div>
  )
}

export default App
