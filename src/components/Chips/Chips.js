import React from 'react';
import { formatNumber } from '../../utils';

import './Chips.css';

// TODO: Show actual chips rather than just text
const Chips = ({ amount }) => {
  if (!amount) return null;

  return (
    <div className="Chips">
      {formatNumber(amount)}
    </div>
  );
}

export default Chips;
