import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "chojuneseo1@gmail.com",
    password: "test1234"

  }

  const [user, setUser] = useState({
    name: "",
    email: ""
  }); 

  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("login - success")
      setUser({
        name: details.name,
        email: details.email,
        password: details.password
      })
    }
    else {
      console.log("login - fail")
      setError("Details do not match")
    }
  }
  
  const LogOut = () => {
    console.log("logout")
    setUser({name: "", email: ""})
  }


  return (
    <div className="App">
      {(user.email != "") ? 
      (<div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={LogOut}>Log Out</button>
      </div>)  :
      (<LoginForm Login={Login} error={error}/>)}
    </div>
  );
}

export default App;
