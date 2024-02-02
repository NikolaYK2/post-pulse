import {createContext, ReactNode, useEffect, useState} from "react";
import {useLocalStorage} from "@/common/hooks/useLocalStorage.tsx";

export const AuthContext = createContext<AuthContextType | null>(null)

type AuthContextType = {
  isLogged: boolean,
  isLoading: boolean,
  email: string,
  password: string,
  setIsLogged: (value: boolean) => void,
  setIsLoading: (value: boolean) => void,
}
type Props = {
  children: ReactNode,
}
export const AuthProvider = ({children}: Props) => {

  const email = 'free@gmail.com'
  const password = 'freePostPulls'

  const [isLogged, setIsLogged] = useState(true);
  const [isLoading, setIsLoading] = useState(true);


  const {setLocalStorage} = useLocalStorage('login', isLogged, setIsLogged)

  useEffect(() => {
    setLocalStorage()
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{isLoading, email, password, isLogged, setIsLogged,setIsLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
