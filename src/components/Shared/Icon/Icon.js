import icons from './iconsSprite.svg';
import PropTypes from 'prop-types';

export function Icon({ name, size }) {
  return (
    <svg width={size} height={size}>
      <use xlinkHref={`${icons}#${name}`}></use>
    </svg>
  );
}

Icon.defaultProps = {
  size: 20,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};
