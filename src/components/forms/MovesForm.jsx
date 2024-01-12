import './Forms.css'
import PropTypes from 'prop-types'
import { usePokemon } from "../../hooks/usePokemon"

export function MovesForm({ setFormOption, move }) {
 

  const { pokemon, setPokemon } = usePokemon()
  const { pokemonMoves } = pokemon

  const handleFormOptionChange = (newOption) => {
    setFormOption(newOption)
  };

  const handleInputChange = (fieldName, moveIndex, value) => {
    if (fieldName === 'damage' && value.length > 3) return
    setPokemon((prevPokemon) => {
      const updatedPokemon = { ...prevPokemon };
      const updatedMoves = [...updatedPokemon.pokemonMoves];
  
      
      updatedMoves[moveIndex] = {
        ...updatedMoves[moveIndex],
        [fieldName]: value,
      };
      updatedPokemon.pokemonMoves = updatedMoves;
      return updatedPokemon;  
    });
  };


  return (
    <div className={`menu-option col-lg-7 d-flex flex-column items fade-in form-container ${move === 'right' ? 'moving-forms' : ''}`}>
      <div className=" mb-3 d-flex justify-content-between">
        <h2 className="title-option display-5">Moves</h2>
        <img
          className="close-icon"
          src="img/close.svg"
          height={50}
          onClick={() => handleFormOptionChange("no-one")}
        ></img>
      </div>

      <div className="row">
        <div className='col-6'>
          <label htmlFor="move1Name" className="form-label m-0">Move 1 Name</label>
          <input
            type="text"
            className="form-control m-0"
            id="move1Name"
            value={pokemonMoves[0].name}
            maxLength={14}
            onChange={(e) => handleInputChange('name', 0, e.target.value)}
          />
        </div>
        <div className='col-6'>
          <label htmlFor="move1Damage" className="form-label m-0">Move 1 Damage</label>
          <input
            type="number"
            className="form-control m-0"
            id="move1Name"
            value={pokemonMoves[0].damage}
            onChange={(e) => handleInputChange('damage', 0, e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className='col-12'>
          <label htmlFor="move1Effect" className="form-label m-0">Move 1 Effect</label>
          <input
            type="text"
            className="form-control m-0"
            id="move1Effect"
            maxLength={40}
            value={pokemonMoves[0].effect}
            onChange={(e) => handleInputChange('effect', 0, e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-1">
            <img src="img/normal-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/fire-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/water-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/grass-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/electric-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/psychic-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/fighting-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/dark-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/fairy-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/steel-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/dragon-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className='col-6'>
          <label htmlFor="move2Name" className="form-label m-0">Move 2 Name</label>
          <input
            type="text"
            className="form-control m-0"
            id="move2Name"
            value={pokemonMoves[1].name}
            maxLength={14}
            onChange={(e) => handleInputChange('name', 1, e.target.value)}
          />
        </div>
        <div className='col-6'>
          <label htmlFor="move2Damage" className="form-label m-0">Move 2 Damage</label>
          <input
            type="number"
            className="form-control m-0"
            id="move2Damage"
            value={pokemonMoves[1].damage}
            onChange={(e) => handleInputChange('damage', 1, e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className='col-12'>
          <label htmlFor="move2Effect" className="form-label m-0">Move 2 Effect</label>
          <input
            type="text"
            className="form-control m-0"
            id="move2Effect"
            maxLength={40}
            value={pokemonMoves[1].effect}
            onChange={(e) => handleInputChange('effect', 1, e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-1">
            <img src="img/normal-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/fire-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/water-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/grass-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/electric-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/psychic-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/fighting-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/dark-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/fairy-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/steel-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
        <div className="col-1">
            <img src="img/dragon-type.png" alt="" height={40} />
            <p>x1</p>
        </div>
      </div>

    </div>
  );
}

MovesForm.propTypes = {
  setFormOption: PropTypes.func.isRequired,
  move: PropTypes.string.isRequired,
};
