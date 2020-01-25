import React from 'react';
import { mount } from 'enzyme';
import fetch from 'jest-fetch-mock'
import App from './App';

fetch.enableMocks()

const tableMock = {
  "id": 1001,
  "state": "open",
  "game": "holdem",
  "blinds": {
    "small": 1,
    "big": 200
  },
  "seats": [],
  "currentHand": {
    "id": 12345,
    "communityCards": [],
    "players": [],
    "pots": []
  }
}

describe('App', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(tableMock))
  })

  it('renders the loading state as the initial state', () => {
    const wrapper = mount(<App />);

    expect(wrapper.state('isLoading')).toBe(true)
  });

  it('renders the table state after fetching the API data', async () => {
    const wrapper = mount(<App />);

    // needs to await otherwise `componentWillMount` won't be executed
    await wrapper.instance().componentWillMount()

    expect(wrapper.state('table')).toEqual(tableMock)
    expect(wrapper.state('isLoading')).toBe(false)
  });
})