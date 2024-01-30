import {Main} from "@/features/main/Main.tsx";
import {Header} from "@/features/header/ui/Header.tsx";
import {PostProvider} from "@/app/postRpovider/PostProvider.tsx";
import {AuthProvider} from "@/app/authProvider/AuthContext.tsx";

function App() {

  return (
    <AuthProvider>
      <PostProvider>
        <Header/>
        <Main/>
      </PostProvider>
    </AuthProvider>
  )
}

export default App
