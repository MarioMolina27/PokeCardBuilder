import PropTypes from 'prop-types';
import './TypeMoves.css';

export const TypeMoves = ({ typeMoves }) => {
    return (
      <>
        {typeMoves.map((t, index) => (
          <img
            key={index}
            src={`./img/${t.toLowerCase()}-type.png`}
            alt={`${t.toLowerCase()}-type`}
            className="type-move-img"
          />
        ))}
      </>
    );
};

TypeMoves.propTypes = {
    typeMoves: PropTypes.array.isRequired
};
