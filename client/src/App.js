import React, { useContext, useEffect } from 'react';
import Header from "./components/header";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer';
import AppRouter from './components/AppRouter';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

const App = () => {
  const {store} = useContext(Context);

  useEffect(() => {
    if(localStorage.getItem('token')){
      store.checkAuth();
    }
  }, [store]);

  if(store.isLoading){
    return <div>Завантаження</div>;
  }

  return (
    <Router>
      <Header/>
      <AppRouter/>
      <Footer/>
    </Router>
  );
}

export default observer(App);
