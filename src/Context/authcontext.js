import { createContext, useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";

export const authContext = createContext();

export const useAuth = ()=> {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {
    const user = {
        login:true,
    };
    return <context.Provider value={ {user}}>{children}</context.Provider>;
}