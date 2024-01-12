import { usePokemon } from "../../hooks/usePokemon"
import './Forms.css'
import PropTypes from 'prop-types'

export function FooterForm({ setFormOption, move }) {
  const { pokemon, setPokemon } = usePokemon()

  const { pokemonFooter } = pokemon
  const { illustrator,number,copyright,additionalInfo } = pokemonFooter

  const handleFormOptionChange = (newOption) => {
    setFormOption(newOption)
  };

  const handleInputChange = (fieldName, value) => {
    if (fieldName === 'pokemonNum'&& value.length > 4) return

    setPokemon({
        ...pokemon,
        [fieldName]: value,
    })
    
  }

  return (
    <div className={`menu-option col-lg-7 d-flex flex-column items fade-in form-container ${move === 'right' ? 'moving-forms' : ''}`}>
      <div className=" mb-3 d-flex justify-content-between">
        <h2 className="title-option display-5">Footer</h2>
        <img
          className="close-icon"
          src="img/close.svg"
          height={50}
          onClick={() => handleFormOptionChange("no-one")}
        ></img>
      </div>

      <div className="row mb-2">
        <div className='col-6'>
          <label htmlFor="illustrator" className="form-label m-0">Illustrator</label>
          <input
            type="text"
            className="form-control m-0"
            id="illustrator"
            value={illustrator}
            maxLength={20}
            onChange={(e) => handleInputChange('pokemonFooter', { ...pokemonFooter, illustrator: e.target.value })}
          />
        </div>
        <div className='col-6'>
          <label htmlFor="footerNum" className="form-label m-0">Number</label>
          <input
            type="text"
            className="form-control m-0"
            id="footerNum"
            value={number}
            maxLength={20}
            onChange={(e) => handleInputChange('pokemonFooter', { ...pokemonFooter, number: e.target.value })}
          />
        </div>
      </div>

      <div className="row">
      <div className='col-6'>
          <label htmlFor="copyright" className="form-label m-0">Copyright</label>
          <input
            type="text"
            className="form-control m-0"
            id="copyright"
            value={copyright}
            maxLength={20}
            onChange={(e) => handleInputChange('pokemonFooter', { ...pokemonFooter, copyright: e.target.value })}
          />
        </div>
      </div>

      <div className="row mt-2">
      <div className='col-12'>
          <label htmlFor="aditionalinfo" className="form-label m-0">Aditional Info</label>
          <textarea 
          className="form-control" 
          id="aditionalinfo" 
          rows="2"
          value={additionalInfo}
          onChange={(e) => handleInputChange('pokemonFooter', { ...pokemonFooter, additionalInfo: e.target.value })}/>
        </div>
      </div>
    </div>
  );
}

FooterForm.propTypes = {
  setFormOption: PropTypes.func.isRequired,
  move: PropTypes.string.isRequired,
};
