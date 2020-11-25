import React, { Component, Fragment } from 'react';
import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';
import './ScrollBox.css';


class App extends Component {
  render(){
    return(
      <Fragment>
        <h1>비밀번호 검증</h1>
        <ValidationSample/> 
        <br/><br/>
        <h1>맨 밑으로 스크롤</h1>

        <ScrollBox ref={(ref)=> this.ScrollBox=ref}/>
        <button onClick={()=>this.ScrollBox.scrollToBottom()}>맨 밑으로</button>

 
      </Fragment>
    );
  }
}

export default App;