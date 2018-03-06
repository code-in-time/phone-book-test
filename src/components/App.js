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
            <div className="col">
              <div className="Index">
                <PhoneBookEntryAdd />
                <PhoneBookSearch />
                <PhoneBookDataDisplay />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
