import React from 'react';

import './Chips.css';

const Chips = ({ amount }) => {
  if (!amount) return null;

  return (
    <div className="Chips">
      {amount}
    </div>
  );
}

export default Chips;
