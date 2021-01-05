import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import ContextSample from './ContextSample';
import Average from './Average';
import UsePromiseSample from './usePromiseSample';

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
        {visible && <Average/>}
        {visible && <UsePromiseSample />}
    </div>
      

    </>
  );
}

export default App;