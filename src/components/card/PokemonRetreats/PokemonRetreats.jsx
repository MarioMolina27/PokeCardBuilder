import PropTypes from 'prop-types';

export function PokemonRetreats({ retreats }) {
    return (
      <>
      <p className="retreat-text">retreat</p>
      {Array.from({ length: retreats }).map((_, index) => (
        <img
          key={index}
          src={`img/normal-type.png`}
          alt={`retreat-cost-${index + 1}`}
          className="type-img-mini"
        />
      ))}
      </>
    );
}

PokemonRetreats.propTypes = {
  retreats: PropTypes.number.isRequired,
};