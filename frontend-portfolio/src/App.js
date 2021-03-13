import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Route path="/" component={MainPage} exact/>
    <Route path="/AboutMe" component={AboutMe}/>
    
    </>
  );
}

export default App;
