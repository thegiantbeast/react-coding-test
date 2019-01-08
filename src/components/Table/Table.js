import React from 'react';
import { tableShape } from '../../types';

import Seats from '../Seats';
import './Table.css';

const Table = ({ table }) => (
  <div className="Table">
    <Seats seats={table.seats} players={table.currentHand.players} />
  </div>
);

Table.propTypes = {
  table: tableShape.isRequired,
};

export default Table;
