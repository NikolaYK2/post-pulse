import {useContext} from "react";
import {AuthContext} from "@/app/authProvider/AuthContext.tsx";

export const useAuth = () => useContext(AuthContext)
