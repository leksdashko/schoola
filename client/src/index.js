import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/fonts.css';
import './css/main.css';
import Store from './store/store';

const store = new Store();

export const Context = createContext({
  store
});

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      store
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
