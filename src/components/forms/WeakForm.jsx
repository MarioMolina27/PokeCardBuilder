import { usePokemon } from "../../hooks/usePokemon.js";
import './Forms.css';
import { ALL_TYPES } from "../../constants.js";
import PropTypes from 'prop-types'


export function WeakForm({ setFormOption, move }) {
  const { pokemon, setPokemon } = usePokemon()

  const handleFormOptionChange = (newOption) => {
    setFormOption(newOption)
  }

  const handleInputChange = (fieldName, value) => {

    setPokemon({
        ...pokemon,
        [fieldName]: value,
    })
    
  }

  const { pokemonWeakness, pokemonResistance, pokemonRetreat } = pokemon;
  const { type : typeWeakness,  multiplier: multiplierWeakness } = pokemonWeakness;
  const { type: typeResistance,  multiplier: multiplierResistance } = pokemonResistance;

  return (
    <div className={`menu-option col-lg-7 d-flex flex-column items fade-in form-container ${move === 'right' ? 'moving-forms' : ''}`}>
      <div className=' mb-3 d-flex justify-content-between'>
        <h2 className="title-option display-5">Weakness and Resistances</h2>
        <img className="close-icon" src="img/close.svg" height={50} onClick={() => handleFormOptionChange('no-one')}></img>
      </div>
      <div className='row mb-2'>
        <div className='col-6'>
            <label htmlFor="pokemonWeakness" className="form-label m-0">Weakness</label>
            <select
                id="pokemonWeakness"
                className="form-select"
                value={typeWeakness}
                onChange={(e) => handleInputChange('pokemonWeakness', { ...pokemonWeakness, type: e.target.value })}>
                <option value="">None</option>
                {ALL_TYPES.map((type, index) => (
                <option key={index} value={type}>
                    {type}
                </option>
                ))}
            </select>
        </div>
        <div className='col-6'>
            <label htmlFor="pokemonWeaknessPercentage" className="form-label m-0"></label>
            <input
                type="number"
                className="form-control"
                id="pokemonWeaknessPercentage"
                maxLength={9}
                placeholder="+0"
                value={multiplierWeakness}
                onChange={(e) => handleInputChange('pokemonWeakness', { ...pokemonWeakness, multiplier: e.target.value })}
            />
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-6'>
            <label htmlFor="pokemonResistance" className="form-label m-0">Resistance</label>
            <select
                id="pokemonResistance"
                className="form-select"
                value={typeResistance}
                onChange={(e) => handleInputChange('pokemonResistance', { ...pokemonResistance, type: e.target.value })}>
                <option value="">None</option>
                {ALL_TYPES.map((type, index) => (
                <option key={index} value={type}>
                    {type}
                </option>
                ))}
            </select>
        </div>
        <div className='col-6'>
            <label htmlFor="pokemonResistancePercentage" className="form-label m-0"></label>
            <input
                type="number"
                className="form-control"
                id="pokemonResistancePercentage"
                maxLength={9}
                placeholder="+0"
                value={multiplierResistance}
                onChange={(e) => handleInputChange('pokemonResistance', { ...pokemonResistance, multiplier: e.target.value })}
            />
        </div>
      </div>
        <div className='row mt-4'>
            <div className='col-6'>
                <label htmlFor="pokemonRetreatCost" className="form-label m-0">Retreat Cost</label>
                <select
                    id="pokemonRetreatCost"
                    className="form-select"
                    value={pokemonRetreat}
                    onChange={(e) => handleInputChange('pokemonRetreat', e.target.value )}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option> 
                    <option value="3">3</option> 
                    <option value="4">4</option> 
                </select>
            </div>
        </div>
    </div>
  );
}

WeakForm.propTypes = {
    setFormOption: PropTypes.func.isRequired,
    move: PropTypes.string.isRequired
  };