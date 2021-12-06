import React from 'react';
import Header from "./components/header";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <Router>
      <Header/>
      <AppRouter/>
      <Footer/>
    </Router>
  );
}

export default App;
