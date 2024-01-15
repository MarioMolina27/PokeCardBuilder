import PropTypes from 'prop-types';
import { TypeMoves } from '../TypeMoves/TypeMoves';
import './PokemonMoves.css';

export function PokemonMoves({ pokemonMoves }) {
    return (
        <>
            {pokemonMoves.map((pokemonMove, index) => (
                <PokemonMove pokemonMove={pokemonMove} key={index} />
            ))}
        </>
    )
}

function PokemonMove({ pokemonMove }) {

    const { type, name, damage, effect } = pokemonMove;
    return (
        <>
        <div className="move">
            <div className="type">
               <TypeMoves typeMoves={type} />
            </div>
            <div className="movement-name">
                <p>{name}</p>
            </div>
            <div className="movement-damage">
                <p>{damage}</p>
            </div>
        </div>
        <p className="move-description">{effect}</p>
        </> 
    )
}



PokemonMoves.propTypes = {
    pokemonMoves: PropTypes.array.isRequired
};

PokemonMove.propTypes = {
    pokemonMove: PropTypes.object.isRequired
};

