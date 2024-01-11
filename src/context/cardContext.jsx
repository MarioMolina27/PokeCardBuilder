import { createContext, useState } from "react";

export const CardContext = createContext()

export function CardProvider ({children}){
    let p = {
        pokemonName: "Piplup",
        pokemonHp: 70,
        stage: "BASIC",
        type: "Water",
        preevolution :{
          preName: "",
          imageUrl: null,
        },
        pokemonNum: 393,
        pokemonImg: "img/piplup.jpg",
        pokemonInfo: {
            category: "Penguin Pokemon",
            height: 10.4,
            weight: 11.5
        },
        pokemonMoves: [
            {
              name: "Peck",
              type: ["Normal"],
              damage: 10,
              effect: ""
            },
            {
              name: "Wave Splash",
              type: ["Normal","Water"],
              damage: 20,
              effect: ""
            }
          ],
          pokemonWeakness: {
              type: "Electric",
              multiplier: 2
          },
          pokemonResistance: {
              type: "",
              multiplier: ""
          },
          pokemonRetreat: 2,
          pokemonFooter: {
            illustrator: "Shibuzoh.",
            symbol: "img/symbol.png",
            number: "32/156",
            symbol2: "img/point.png",
            copyright: "2018 Pokemon",
            additionalInfo: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
          }  
    }
    const [pokemon, setPokemon] = useState(p);

    return (
        <CardContext.Provider value={{
            pokemon,
            setPokemon
        }}> 
        {children}
        </CardContext.Provider>
    )
}