import React from 'react';
import cx from 'classnames';

import { seatProps } from '../../types';
import Cards from '../Cards';
import Chips from '../Chips';
import './Seat.css';

import { formatNumber } from '../../utils'

const Seat = ({ id, state, username, chips, cards, bet }) => {
  const isSeatOccupied = state === 'occupied';

  return (
    <div className={cx('Seat', `Seat-${id}`)}>
      {
        isSeatOccupied ? (
          <div className="nameplate">
            <div className="username">{username}</div>
            <div className="chips">{(bet > 0 && chips < 0) ? 'All-In' : formatNumber(chips)}</div>
          </div>
        ) : (
          <div className="nameplate available">
            Seat Available
          </div>
        )
      }
      <Chips amount={bet} />
      <Cards values={cards} />
    </div>
  )
};

Seat.propTypes = {
  ...seatProps,
}

export default Seat;
