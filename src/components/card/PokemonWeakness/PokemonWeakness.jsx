import PropTypes from 'prop-types';

export function PokemonWeakness({ weakness }) {
    return (
      <div className="weak-container">
        <p className="weakness-text">weakness</p>
        {weakness.type && (
        <img
          src={`img/${weakness.type.toLowerCase()}-type.png`}
          alt={`${weakness.type.toLowerCase()}-type`}
          className="type-img-mini"
        />
      )}
      {weakness.multiplier && <p className="x-damage">x {weakness.multiplier}</p>}
      </div>
    );
}

PokemonWeakness.propTypes = {
  weakness: PropTypes.object.isRequired
};

