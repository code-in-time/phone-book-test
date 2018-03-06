import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Componenets

import registerServiceWorker from './registerServiceWorker';

import rootReducer from './Reducers/index';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/index.css';

import App from './components/App';

// TODO: Turn redux devtools off for production using an environment variable.
// const store = createStore(combineReducers({ noteReducer }), {}, applyMiddleware(createLogger()));
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
