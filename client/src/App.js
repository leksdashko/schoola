import React from 'react';
import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom';
import SearchDisplay from './displays/search-display';
import ChooseDisplay from './displays/choose-display/choose-display';
import LinkListDisplay from './displays/link-list-display';
import StepsDisplay from './displays/steps-display';
import CardListDisplay from './displays/card-list-display/card-list-display';
import Footer from './components/footer';
import AboutUsDisplay from './displays/about-us-display/about-us-display';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <SearchDisplay/>
      <StepsDisplay/>
      <CardListDisplay/>
      <LinkListDisplay/>
      <AboutUsDisplay/>
      <ChooseDisplay/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
