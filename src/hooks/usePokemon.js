import { useContext } from "react";
import { CardContext } from "../context/cardContext.jsx";

export function usePokemon() {
    const context = useContext(CardContext);

    if (context === undefined) {
        throw new Error("usePokemon must be used within a CardProvider");
    }

    return context;
}