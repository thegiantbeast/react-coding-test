import React, { Component } from 'react';
import { tableShape } from './types';


import table from './data/table-1'

import Table from './components/Table';

import './App.css';

class App extends Component {
  static propTypes = {
    table: tableShape,
  }

  static defaultProps = {
    table
  }

  render() {
    const { table } = this.props;

    return (
      <div className="App">
        <Table table={table} />
      </div>
    );
  }
}

export default App;
