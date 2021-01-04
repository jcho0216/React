import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import ContextSample from './ContextSample';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <div>
      <button onClick={()=>{
          setVisible(!visible);
        }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
        {visible && <Info/>}
        {visible && <Counter/>}
        {visible && <ContextSample/>}
    </div>
      
    </>
  );
}

export default App;