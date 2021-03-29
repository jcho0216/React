import React, { Component } from "react";

//add new context
const myContext = React.createContext();

//create provider
class MyProvider extends Component {
  state = {
    name: "Junseo",
    age: 18,
    cool: true,
  };

  render() {
    return (
      <myContext.Provider
        value={{
          state: this.state,
          GrowAYearOlder: () => this.setState({
            age: this.state.age + 1
          }),
          DecreaseAYearOlder: () => this.setState({
            age: this.state.age - 1
          })
        }}
      >
        {this.props.children}
      </myContext.Provider>
    );
  }
}

const Family = (props) => {
  return (
    <div className="family">
      <Person />
    </div>
  );
};

class Person extends Component {
  render() {
    return (
      <div className="person">
        <myContext.Consumer>
          {(context) => (
            <div>
              <p>나이 = {context.state.age}</p>
              <p>이름 = {context.state.name}</p>
              <button onClick={context.GrowAYearOlder}>한살 더 먹기</button>
              <button onClick={context.DecreaseAYearOlder}>타임머신</button>
            </div>
          )}
        </myContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  state = {
    name: "Junseo, Cho",
    age: 100,
    cool: true,
  };
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the App</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
