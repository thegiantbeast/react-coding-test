import React, { Component } from 'react';
import Table from './components/Table';

import './App.css';

class App extends Component {
  state = {
    table: null,
    isLoading: true
  }

  async componentWillMount() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const tableId = urlParams.get('tableid');
      const response = await fetch(`https://storage.googleapis.com/replaypoker-dummy-api/tables/${tableId}.json`);

      this.setState({
        table: await response.json(),
        isLoading: false
      })
    } catch(err) {
      // TODO: Display an error message to the user
      console.error(err)
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <Table table={this.state.table} />
        )}
      </div>
    );
  }
}

export default App;
