import React from 'react';
import Counter from './Counter';
import Info from './Info';

const App = () => {
  return (
    <>
    <h2>숫자 카운트(useState)</h2>
    <Counter /> <br/>

    <h2>이름, 닉네임(useState)</h2>
    <Info />
    
    </>
  );
};

export default App;