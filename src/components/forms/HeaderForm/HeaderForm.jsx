import { usePokemon } from "../../../hooks/usePokemon.js";
import { ALL_TYPES } from "../../../constants.js";
import PropTypes from 'prop-types'


export function HeaderForm({ setFormOption, move }) {
  const { pokemon, setPokemon } = usePokemon()
  const { pokemonName, type, pokemonHp, stage, preevolution } = pokemon;

  const handleFormOptionChange = (newOption) => {
    setFormOption(newOption)
  }

  const handleInputChange = (fieldName, value) => {
    if (fieldName === 'pokemonHp' && value.length > 3) return
  
    if (fieldName === 'preevolutionImage' && value && value.preImage) {
      const fileReader = new FileReader()
      fileReader.onloadend = () => {
        setPokemon({
          ...pokemon,
          preevolution: {
            ...pokemon.preevolution,
            imageUrl: fileReader.result,
          },
        })
      }
      fileReader.readAsDataURL(value.preImage);
    } else {
      setPokemon({
        ...pokemon,
        [fieldName]: value,
      })
    }
  }

  return (
    <div className={`menu-option col-lg-7 d-flex flex-column items fade-in form-container ${move === 'right' ? 'moving-forms' : ''}`}>
      <div className=' mb-3 d-flex justify-content-between'>
        <h2 className="title-option display-5">Header</h2>
        <img className="close-icon" src="img/close.svg" height={50} onClick={() => handleFormOptionChange('no-one')}></img>
      </div>
      <div className='row mb-2'>
        <div className='col-6'>
          <label htmlFor="pokemonName" className="form-label m-0">Name</label>
          <input
            type="text"
            className="form-control "
            id="pokemonName"
            value={pokemonName}
            maxLength={9}
            onChange={(e) => handleInputChange('pokemonName', e.target.value)}
          />
        </div>
      </div>

      <div className='row mb-2'>
        <div className='col-6'>
          <label htmlFor="pokemonType" className="form-label m-0">Type</label>
          <select
            id="pokemonType"
            className="form-select "
            value={type}
            onChange={(e) => handleInputChange('type', e.target.value)}
          >
            {ALL_TYPES.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className='col-6'>
          <label htmlFor="pokemonHP" className="form-label m-0">HP</label>
          <input
            type="number"
            className="form-control "
            id="pokemonHP"
            value={pokemonHp}
            max="999"
            onChange={(e) => handleInputChange('pokemonHp', e.target.value)}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <label htmlFor="pokemonStage" className="form-label m-0">Stage</label>
          <select
            id="pokemonStage"
            className="form-select"
            value={stage}
            onChange={(e) => handleInputChange('stage', e.target.value)}
          >
            <option value="BASIC">BASIC</option>
            <option value="STAGE 1">STAGE 1</option>
            <option value="STAGE 2">STAGE 2</option>
          </select>
        </div>
      </div>

      {stage !== 'BASIC' && (
        <div className='row mt-4'>
          <div className="col-md-6">
            <label htmlFor="image-preevolution" className="form-label m-0">Image</label>
            <input 
            type="file" 
            className="form-control" 
            id="image-preevolution" 
            onChange={(e) => handleInputChange('preevolutionImage', { ...preevolution, preImage: e.target.files[0] })}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="name-preevolution" className="form-label m-0">Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="name-preevolution"
            maxLength={15}
            onChange={(e) => handleInputChange('preevolution', { ...preevolution, preName: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  );
}

HeaderForm.propTypes = {
  setFormOption: PropTypes.func.isRequired,
  move: PropTypes.string.isRequired
};