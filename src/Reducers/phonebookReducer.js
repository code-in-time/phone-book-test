import actionTypes from '../constants/actionTypes';
import initialPhoneBookData from '../data/initialPhoneBookData';
import { deepClone } from '../utils/general';

/**
 * ----------------------------------
 * The Phonebook Reducer file.
 * ----------------------------------
 */


const phoneBookReducer = (state = initialPhoneBookData, action) => {
  switch (action.type) {
    case actionTypes.PHONEBOOK_ENTRY_ADD:
      // Clone the state.
      state = deepClone(state);
      // Add the New phone entry
      state.data = [...state.data,
        {
          name: action.payload.name,
          phoneNumber: action.payload.phoneNumber,
        },
      ];

      break;

    case actionTypes.PHONEBOOK_SEARCH:
      // Clone the state.
      state = deepClone(state);
      // Update the search term
      state.searchTerm = action.payload.searchTerm;

      break;

    default:
      console.log('No actions match');
  }

  return state;
};


export default phoneBookReducer;
