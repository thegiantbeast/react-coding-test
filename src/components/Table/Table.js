import React from 'react';
import classNames from 'classnames';
import { tableShape } from '../../types';

import Seats from '../Seats';
import Cards from '../Cards';
import Pots from '../Pots';

import './Table.css';

const Table = ({ table }) => {
  const isOmaha = table.game === 'omaha';
  const tableClass = classNames('Table', {
    'Poker-omaha': isOmaha,
    'Poker': !isOmaha
  });

  return (
    <div className={tableClass}>
      <div>
        <Seats seats={table.seats} players={table.currentHand.players} />
        <Cards values={table.currentHand.communityCards} />
        <Pots pots={table.currentHand.pots} />
      </div>
    </div>
  );
};

Table.propTypes = {
  table: tableShape.isRequired,
};

export default Table;
