import {createContext, ReactNode} from "react";



export const AuthContext = createContext<null>(null)

type Props = {
  children: ReactNode
}
export const AuthProvider = ({children}:Props) => {


  return (
    <AuthContext.Provider value={}>
      {children}
    </AuthContext.Provider>
  );
};
