import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PhoneBookEntryDataDisplay extends Component {
  /**
   * This will render the contents of the phone book.
   * @param {string} searchTermFilter Test that is being searched
   */
  buildRowData(searchTermFilter) {
    const patt = new RegExp(searchTermFilter);
    const result = this.props.phoneBookReducerData.map((item, i) => {
      // This is the filter check.
      // If the phoneNumber or the name matched then show the row,
      if (patt.test(item.name) || patt.test(item.phoneNumber) || searchTermFilter === '') {
        return (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.phoneNumber}</td>
          </tr>);
      }
      return null;
    });

    return result;
  }

  render() {
    return (
      <div className="PhoneBookEntryDataDisplay card card-body bg-light">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>{this.buildRowData(this.props.phoneBookReducerSearchTerm)}</tbody>
        </table>
      </div>
    );
  }
}


PhoneBookEntryDataDisplay.propTypes = {
  phoneBookReducerData: PropTypes.array.isRequired,
  phoneBookReducerSearchTerm: PropTypes.string.isRequired,
};

// Using redux the phonebookReducer properties are now props
const mapStateToProps = state => ({
  phoneBookReducerData: state.phoneBookReducer.data,
  phoneBookReducerSearchTerm: state.phoneBookReducer.searchTerm,
});

export default connect(mapStateToProps)(PhoneBookEntryDataDisplay);
