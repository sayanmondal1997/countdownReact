import './index.css';

import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

// import rootSaga from './saga';

import App from './App';

//const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

  reportWebVitals();