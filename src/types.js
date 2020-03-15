import PropTypes from 'prop-types';

export const cardType = (props, propName, componentName) => {
  if (props[propName] !== 'X' && !/^[2-9TJQKA][hcds]$/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Expected a valid card type.'
    );
  }
};

export const playerShape = PropTypes.shape({
  seatId: PropTypes.number.isRequired,
  bet: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(cardType).isRequired,
});

export const seatProps = {
  id: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['available', 'occupied']).isRequired,
  username: PropTypes.string,
  chips: PropTypes.number,
};

export const seatShape = PropTypes.shape(seatProps);

export const potShape = PropTypes.shape({
  chips: PropTypes.number.isRequired,
  seatIds: PropTypes.arrayOf(PropTypes.number).isRequired,
});

export const handShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  communityCards: PropTypes.arrayOf(cardType).isRequired,
  players: PropTypes.arrayOf(playerShape).isRequired,
  pots: PropTypes.arrayOf(potShape).isRequired,
});

export const tableShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['open', 'closed']).isRequired,
  game: PropTypes.oneOf(['holdem', 'omaha', 'royal']).isRequired,
  blinds: PropTypes.shape({
    small: PropTypes.number.isRequired,
    big: PropTypes.number.isRequired,
  }).isRequired,
  seats: PropTypes.arrayOf(seatShape).isRequired,
  currentHand: handShape
});
