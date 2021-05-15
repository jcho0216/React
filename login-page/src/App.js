import React, { useState } from 'react';

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

  const login = details => {
    console.log(details);
  }
  
  const logOut = () => {
    console.log("logout")
  }

  return (
    <div className="App">
      {(user.email != "") ? 
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>LogOut</button>
      </div>  :
      <div>

      </div>}
    </div>
  );
}

export default App;
