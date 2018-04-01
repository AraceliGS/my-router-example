import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducer = (state = {
  paginaActual: 'page-1'
}, action) => {
  switch(action.type) {
    case 'NAVIGATE_TO':
      return {
        ...state,
        paginaActual: action.pagina
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
  
registerServiceWorker();
