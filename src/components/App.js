import React, { Component } from 'react';
import PhoneBookEntryAdd from './phonebook/PhoneBookEntryAdd';
import PhoneBookSearch from './phonebook/PhoneBookSearch';
import PhoneBookDataDisplay from './phonebook/PhoneBookDataDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 p-0">
              <PhoneBookEntryAdd />
            </div>
            <div className="col-md-6 p-0">
              <PhoneBookSearch />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 p-0">
              <PhoneBookDataDisplay />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
