import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import SkillSets from './components/Skillsets';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <MainPage />
    <AboutMe />
    <SkillSets />
    </>
  );
}

export default App;
