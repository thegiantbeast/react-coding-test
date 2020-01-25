import React from 'react';
import cx from 'classnames';

import { seatProps } from '../../types';
import Cards from '../Cards';
import Chips from '../Chips';
import './Seat.css';

const Seat = ({ id, state, username, chips, cards, bet }) => {
  const formattedBet = Intl.NumberFormat().format(bet || 0);
  const formattedChips = Intl.NumberFormat().format(chips || 0);

  return (
    <div className={cx('Seat', `Seat-${id}`)}>
      {
        username ? (
          <div className="nameplate">
            <div className="username">{username}</div>
            <div className="chips">{(bet > 0 && chips < 0) ? 'All-In' : formattedChips}</div>
          </div>
        ) : (
          <div className="nameplate available">
            Seat Available
          </div>
        )
      }
      <Chips amount={formattedBet} />
      <Cards values={cards} />
    </div>
  )
};

Seat.propTypes = {
  ...seatProps,
}

export default Seat;
