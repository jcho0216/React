import React, { useState } from 'react';
import Api from './Api';

export default function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, settPageNumber] = useState('');

  function handleSearch(e) {
    setQuery(e.target.value);
    settPageNumber(1)
  }

  Api(query, pageNumber)
  return (
  <>
    <input type="text" onChange={handleSearch}></input>
    <div>Title</div>
    <div>Title</div>
    <div>Title</div>
    <div>Title</div>
    <div>Title</div>
    <div>loading...</div>
    <div>error</div>
  </>
)
}

