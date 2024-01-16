import {Main} from "@/features/main/Main.tsx";
import {Header} from "@/features/header/ui/Header.tsx";
import {PostProvider} from "@/app/postRpovider/PostProvider.tsx";

function App() {

  return (
      <PostProvider>
        <Header/>
        <Main/>
      </PostProvider>
  )
}

export default App
