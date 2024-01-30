import {createContext, ReactNode, useState} from "react";


export const AuthContext = createContext<AuthContextType | null>(null)

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void

}
type Props = {
  children: ReactNode
}
export const AuthProvider = ({children}: Props) => {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{isLogged, setIsLogged}}>
      {children}
    </AuthContext.Provider>
  );
};
