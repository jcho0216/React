import React, { Component } from 'react';
import { SampleConsumer } from '../contexts/sample';

class Sends extends Component {

  state = {
    input: ''
  }

  componentDidMount() {
    // :: 초기 값 설정
    this.setState({
      input: this.props.value,
    })
  }
  
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // :: props로 받은 setValue 호출
    console.log(this.props);
    this.props.setValue(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button type="submit">설정</button>
      </form>
    );
  }
}

// :: Consumer 를 사용하여 context 값을 전달해준 컨테이너 컴포넌트
const SendsContainer = () => (
  <SampleConsumer>
    {
      ({state, actions}) => (
        <Sends 
          value={state.value}
          setValue={actions.setValue}
        />
      )
    }
  </SampleConsumer>
)

// :: Sends 대신에 SendsContainer 를 내보내줌
export default SendsContainer;