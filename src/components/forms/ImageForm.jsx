import { usePokemon } from "../../hooks/usePokemon"
import PropTypes from 'prop-types'

export function ImageForm({ setFormOption, move }) {
  const { pokemon, setPokemon } = usePokemon();

  const {pokemonInfo, pokemonNum} = pokemon
  const {category, height, weight} = pokemonInfo

  const handleFormOptionChange = (newOption) => {
    setFormOption(newOption)
  };

  const handleInputChange = (fieldName, value, formName) => {
    if (fieldName === 'pokemonNum'&& value.length > 4) return
    if (formName === 'height' && value.height.length > 5) return
    if (formName === 'weight' && value.weight.length > 5) return


    if (fieldName === 'pokemonImage') {
      const fileReader = new FileReader()
      fileReader.onloadend = () => {
        setPokemon({
          ...pokemon,
          pokemonImg: fileReader.result,
        })
      }
      fileReader.readAsDataURL(value)
    } else {
      setPokemon({
        ...pokemon,
        [fieldName]: value,
      })
    }
  }

  return (
    <div className={`menu-option col-lg-7 d-flex flex-column items fade-in form-container ${move === 'right' ? 'moving-forms' : ''}`}>
      <div className=" mb-3 d-flex justify-content-between">
        <h2 className="title-option display-5">Image</h2>
        <img
          className="close-icon"
          src="img/close.svg"
          height={50}
          onClick={() => handleFormOptionChange("no-one")}
        ></img>
      </div>
      <div className="row mb-2">
        <div className="col-12">
          <label htmlFor="pokemonImage" className="form-label m-0">
            Image
          </label>
          <input
            type="file"
            className="form-control m-0"
            id="pokemonImage"
            onChange={(e) => handleInputChange('pokemonImage', e.target.files[0])}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <label htmlFor="pokemonNumber" className="form-label m-0">
            Number
          </label>
          <input
            type="number"
            className="form-control m-0"
            id="pokemonNumber"
            value={pokemonNum}
            onChange={(e) => handleInputChange('pokemonNum', e.target.value)}
          />
        </div>
        <div className="col-6">
          <label htmlFor="pokemonCategory" className="form-label m-0">
            Category
          </label>
          <input
            type="text"
            className="form-control m-0"
            id="pokemonCategory"
            value={category}
            maxLength={25}
            onChange={(e) => handleInputChange('pokemonInfo', { ...pokemonInfo, category: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="pokemonHeight" className="form-label m-0">
            Height
          </label>
          <input
            type="number"
            className="form-control m-0"
            id="pokemonHeight"
            value={height}
            onChange={(e) => handleInputChange('pokemonInfo', { ...pokemonInfo, height: e.target.value }, 'height')}
          />
        </div>
        <div className="col-6">
          <label htmlFor="pokemonWeight" className="form-label m-0">
            Weight
          </label>
          <input
            type="number"
            className="form-control m-0"
            id="pokemonWeight"
            value={weight}
            onChange={(e) => handleInputChange('pokemonInfo', { ...pokemonInfo, weight: e.target.value }, 'weight')}
          />
        </div>
      </div>
    </div>
  );
}

ImageForm.propTypes = {
  setFormOption: PropTypes.func.isRequired,
  move: PropTypes.string.isRequired
};
