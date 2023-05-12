import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './userList';

function App() {

  const [users, setUsers] = useState([])

  const getUsers = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch((err) => console.error(err))
  };

  useEffect(() => getUsers(), []);
  console.log("hey", users);

  return (
    <div className="App">
      <h1 className='title'>RoboFriends</h1>
      <UserList users={users}/>
    </div>
  );
}

export default App;
