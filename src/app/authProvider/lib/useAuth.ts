import {useContext} from "react";
import {AuthContext} from "@/app/authProvider/AuthContext.tsx";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a PostProvider');
  }
  return context;
}
