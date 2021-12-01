import React from 'react';
import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/search-bar';
import ChooseDisplay from './components/choose-display/choose-display';
import LinkListDisplay from './components/link-list-display';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <SearchBar/>
      <LinkListDisplay/>
      <ChooseDisplay/>
    </BrowserRouter>
  );
}

export default App;
