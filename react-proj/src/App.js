import React from 'react'
import './App.css'

function App(){
  const name = '리액트';
   return (
     <>
     {/*input태그를 닫아줘야함, 주석을 다는방법 참고***/}
     <div className="react">{name}</div>
     <input value="인풋태그" ></input> 
  
     </>
   );
}

export default App;