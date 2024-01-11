import { createContext, useState } from "react";

export const NavbarContext = createContext()

export function NavbarProvider ({children}){
    const [activeLink, setActiveLink] = useState("/");

    return (
        <NavbarContext.Provider value={{
            activeLink,
            setActiveLink
        }}> 
        {children}
        </NavbarContext.Provider>
    )
}