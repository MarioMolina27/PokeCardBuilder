import PropTypes from 'prop-types';

export function PokemonResistance({ resistance }) {

  return (
    <div className="resistance-container">
      <p className="resistance-text">resistance</p>
      {resistance.type && (
        <img
          src={`img/${resistance.type.toLowerCase()}-type.png`}
          alt={`${resistance.type.toLowerCase()}-type`}
          className="type-img-mini"
        />
      )}
      {resistance.multiplier && <p className="x-damage">- {resistance.multiplier}</p>}


    </div>
  );
}

PokemonResistance.propTypes = {
  resistance: PropTypes.object,
};