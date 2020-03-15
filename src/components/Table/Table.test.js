import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';
import Seats from '../Seats';
import Pots from '../Pots';
import Cards from '../Cards';

const tableMock = {
  id: 1,
  state: 'open',
  game: 'holdem',
  blinds: {
    small: 10,
    big: 20,
  },
  seats: [
    { id: 0, state: 'available' },
    { id: 1, state: 'occupied', username: 'MCA', chips: 78450 },
    { id: 2, state: 'available' },
    { id: 3, state: 'occupied', username: 'Mike D', chips: 57465 },
    { id: 4, state: 'occupied', username: 'Ad-Rock', chips: 62860 },
    { id: 5, state: 'available' },
  ],
  currentHand: {
    id: 56829,
    communityCards: [],
    players: [
      { seatId: 1, cards: ['X', 'X'], bet: 0 },
      { seatId: 3, cards: ['X', 'X'], bet: 10 },
      { seatId: 4, cards: ['Ac', '9d'], bet: 20 },
    ],
    pots: [],
  },
}

describe('Table', () => {
  let component;

  it('renders Seats', () => {
    component = shallow(<Table table={tableMock} />);
    expect(component.find(Seats).length).toEqual(1);
  });

  it('renders Pots', () => {
    component = shallow(<Table table={tableMock} />);
    expect(component.find(Pots).length).toEqual(1);
  });

  it('renders Cards', () => {
    component = shallow(<Table table={tableMock} />);
    expect(component.find(Cards).length).toEqual(1);
  });
});
