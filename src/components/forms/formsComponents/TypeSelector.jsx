import { usePokemon } from "../../../hooks/usePokemon"
import PropTypes from 'prop-types'
import './TypeSelector.css'
import { countOccurrences } from "../../../utils.js"

export function TypeSelector({ numMove }) {
    const { pokemon, setPokemon } = usePokemon()
    const { pokemonMoves } = pokemon

    const handleTypeClick = (type) => {
        const updatedPokemon = { ...pokemon };
        const updatedMoves = [...updatedPokemon.pokemonMoves];
        const updatedMove = { ...updatedMoves[numMove] };
      
        if (updatedMove.type.length >= 4) {
          updatedMove.type = [];
        }
      
        updatedMove.type.push(type);
        updatedMoves[numMove] = updatedMove;
        updatedPokemon.pokemonMoves = updatedMoves;
        setPokemon(updatedPokemon);
      };

    return(
        <div className="row mt-2">
        <div className="col-2 col-lg-1">
            <img src="img/normal-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Normal')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Normal')}</p>
        </div>
        <div className="col-2 col-lg-1">
            <img src="img/fire-type.png" alt="" height={35} className="type-btn"onClick={() => handleTypeClick('Fire')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Fire')}</p>
        </div>
        <div className="col-2 col-lg-1">
            <img src="img/water-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Water')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Water')}</p>
        </div>
        <div className="col-2 col-lg-1 ">
            <img src="img/grass-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Grass')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Grass')}</p>
        </div>
        <div className="col-2 col-lg-1 ">
            <img src="img/electric-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Electric')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Electric')}</p>
        </div>
        <div className="col-2 col-lg-1 ">
            <img src="img/psychic-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Psychic')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Psychic')}</p>
        </div>
        <div className="col-2 col-lg-1 ">
            <img src="img/fighting-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Fighting')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Fighting')}</p>
        </div>
        <div className="col-2 col-lg-1 ">
            <img src="img/dark-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Dark')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Dark')}</p>
        </div>
        <div className="col-2 col-lg-1 ">
            <img src="img/fairy-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Fairy')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Fairy')}</p>
        </div>
        <div className="col-2 col-lg-1 ">
            <img src="img/steel-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Steel')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Steel')}</p>
        </div>
        <div className="col-2 col-lg-1 ">
            <img src="img/dragon-type.png" alt="" height={35} className="type-btn" onClick={() => handleTypeClick('Dragon')}/>
            <p>x{countOccurrences(pokemonMoves[numMove].type,'Dragon')}</p>
        </div>
      </div>
    )
}

TypeSelector.propTypes = {
    numMove: PropTypes.number.isRequired
};