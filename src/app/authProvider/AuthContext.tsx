import {createContext, ReactNode, useEffect, useState} from "react";
import {useLocalStorage} from "@/common/hooks/useLocalStorage.tsx";

export const AuthContext = createContext<AuthContextType | null>(null)

type AuthContextType = {
  isLogged: boolean,
  email: string,
  password: string,
  setIsLogged: (value: boolean) => void,
}
type Props = {
  children: ReactNode,
}
export const AuthProvider = ({children}: Props) => {

  const email = 'free@gmail.com'
  const password = 'freePostPulls'

  const [isLogged, setIsLogged] = useState(false);

  const {setLocalStorage} = useLocalStorage('login', isLogged, setIsLogged)

  useEffect(() => {
    setLocalStorage()
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{email, password, isLogged, setIsLogged}}>
      {children}
    </AuthContext.Provider>
  );
};
