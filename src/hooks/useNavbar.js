import { useContext } from "react";
import { NavbarContext } from "../context/navbarContext.jsx";

export function useNavbar() {
    const context = useContext(NavbarContext);

    if (context === undefined) {
        throw new Error("useNavbar must be used within a NavbarProvider");
    }

    return context;
}