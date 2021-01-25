import React from 'react';
import Counter from './modules/counter';
import Todos from './modules/todos';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  )
}

export default App;