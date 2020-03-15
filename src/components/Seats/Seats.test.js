import React from 'react';
import { shallow } from 'enzyme';

import Seats from './Seats';
import Seat from '../Seat';

const dataMock = {
  seats: [
    { id: 0, state: 'available' },
    { id: 1, state: 'occupied', username: 'MCA', chips: 78450 },
    { id: 2, state: 'available' },
    { id: 3, state: 'occupied', username: 'Mike D', chips: 57465 },
    { id: 4, state: 'occupied', username: 'Ad-Rock', chips: 62860 },
    { id: 5, state: 'available' },
  ],
  currentHand: {
    players: [
      { seatId: 1, cards: ['X', 'X'], bet: 0 },
      { seatId: 3, cards: ['X', 'X'], bet: 10 },
      { seatId: 4, cards: ['Ac', '9d'], bet: 20 },
    ],
  },
};

describe('Seats', () => {
  let component;

  it('renders a Seat for each seat at the table', () => {
    component = shallow(<Seats seats={dataMock.seats} players={dataMock.currentHand.players} />);
    expect(component.find(Seat).length).toEqual(6);
  });

  it('combines seat and player data for the seat', () => {
    component = shallow(<Seats seats={dataMock.seats} players={dataMock.currentHand.players} />);
    const seat4 = component.find(Seat).at(4);
    expect(seat4.props().bet).toEqual(20);
  });
});
