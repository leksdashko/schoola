import React from 'react';
import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/search-bar';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <SearchBar/>
    </BrowserRouter>
  );
}

export default App;
