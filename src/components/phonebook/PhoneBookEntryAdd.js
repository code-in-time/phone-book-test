import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionPhoneBookEntryAdd } from '../../actions/phoneBookActions';

class PhoneBookEntryAdd extends Component {
  constructor(props) {
    super(props);
    this.onChangeInputName = this.onChangeInputName.bind(this);
    this.onChangeInputPhoneNumber = this.onChangeInputPhoneNumber.bind(this);
    this.clickAddBtn = this.clickAddBtn.bind(this);

    // Set the state
    this.state = {
      // The text from the input
      name: '',
      phoneNumber: '',
    };
  }
  onChangeInputName(e) {
    // Set the state
    this.setState({
      name: e.target.value,
    });
  }

  onChangeInputPhoneNumber(e) {
    // Set the state
    this.setState({
      phoneNumber: e.target.value,
    });
  }
  clickAddBtn() {
    this.props.actionPhoneBookEntryAdd(this.state.name, this.state.phoneNumber);
    this.setState({
      name: '',
      phoneNumber: '',
    });
  }

  render() {
    return (
      <div className="PhoneBookEntryAdd card card-body bg-light">
        <h5 className="h_titleShadow">Add a new entry to the Phone Book</h5>
        <div className="row">
          <div className="col-sm-6">
            <input maxLength="10" value={this.state.name} onChange={this.onChangeInputName} placeholder="name" type="text" style={{ width: '100%' }} />
          </div>
          <div className="col-sm-6">
            <input
              className="h_noSpinnerOnInput h_width-100percent"
              value={this.state.phoneNumber}
              onChange={this.onChangeInputPhoneNumber}
              placeholder="phoneNumber"
              type="number"
              pattern="^[0-9]"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              onClick={() => this.clickAddBtn()}
              className="btn btn-primary h_width-100percent"
              disabled={this.state.phoneNumber === '' || this.state.name === ''}
            ><i className="fa fa-download" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PhoneBookEntryAdd.propTypes = {
  actionPhoneBookEntryAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  actionPhoneBookEntryAdd,
};

export default connect(null, mapDispatchToProps)(PhoneBookEntryAdd);
