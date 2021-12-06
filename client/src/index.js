import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/fonts.css';
import './css/main.css';

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: {isAuth:false}
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
