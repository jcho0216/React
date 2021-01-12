import React, { useCallback, useState } from 'react';
import NewsList from './NewsList';
import Category from './Category';
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Category category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
    );
};

export default App;