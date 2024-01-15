import PropTypes from 'prop-types';
import './PokemonCard.css'
import { PokemonMoves } from '../PokemonMoves/PokemonMoves.jsx';
import { PokemonWeakness } from '../PokemonWeakness/PokemonWeakness.jsx';   
import { PokemonRetreats } from '../PokemonRetreats/PokemonRetreats.jsx'; 
import { PokemonResistance } from '../PokemonResistance/PokemonResistance.jsx';
import { getHexColor } from '../../../utils.js';


export function PokemonCard({ pokemon }) {
    
    const { pokemonName,type, pokemonHp, pokemonNum, pokemonInfo, pokemonImg, stage, preevolution ,pokemonMoves, pokemonWeakness, pokemonResistance, pokemonRetreat, pokemonFooter } = pokemon;
    const { category, height, weight } = pokemonInfo;
    const { preName, imageUrl} = preevolution;
    const { illustrator, number, additionalInfo, copyright } = pokemonFooter;

    let evolution = stage === 'BASIC' ? 'no-evolution' : 'evolution';
    let cardColor = getHexColor(type);


    return (
        <div className="pokemon-card" style={{backgroundColor: cardColor}}>
            <div className="card-inner">
                <div className="pokemon-card-header">
                    <div className="header-left">
                        <div className="pokemon-stage">
                            <div className="pokemon-stage-name">
                                <p className="text-stage">{stage}</p>
                            </div>
                            <div className={`preevolution-container ${evolution}`}>
                                <div className="preevolution-image-container">
                                    <img src={imageUrl} alt="" className="preevolution-img" />
                                </div>
                                <div className="preevolution-text-container">
                                    <p>Evolves from {preName} </p>
                                </div>
                            </div>
                        </div>
                        <div className="pokemon-name">
                            <p className="text-pokemon-name">{pokemonName}</p>
                        </div>
                    </div>
                    <div className="pokemon-hp">
                        <p className="title-hp">HP</p>
                        <p className="hp-value">{pokemonHp}</p>
                        <img src={`img/${type.toLowerCase()}-type.png`} alt="Water-type" className="type-img" />
                    </div>
                </div>
                <div className="image-section">
                    <img src={pokemonImg} alt="Piplup" className="pokemon-img" />
                    <div className="img-info">
                        <p>NO.{pokemonNum}</p>
                        <p>{category}</p>
                        <p>HT: {height}</p>
                        <p>WT: {weight} lbs.</p>
                    </div>
                </div>
                <div className="movements-section">
                   <PokemonMoves pokemonMoves={pokemonMoves} />
                </div>
                <div className="weak-retreat-section">
                    <div className="weak-and-resistance-container">
                        <div className="weak-container">
                            <PokemonWeakness weakness={pokemonWeakness} />
                        </div>
                        <div className="resistance-container">
                            <PokemonResistance resistance={pokemonResistance} />
                        </div>
                    </div>
                    <div className="retreat-container">
                        <PokemonRetreats retreats={pokemonRetreat} />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="footer-left">
                        <p className="ilustrator-name">Illus. {illustrator}.</p>
                        <div className="rarety-variables">
                            <img src="img/symbol.png" alt="normal-type" className="rarerty-simbols-img" />
                            <p>{number}</p>
                            <img src="img/point.png" alt="normal-type" className="rarerty-simbols2-img" />
                        </div>
                        <p className="copyright">©{copyright}</p>
                    </div>
                    <div className="footer-right">
                        <p>{additionalInfo}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired
};


