import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {

  const [users, setUsers] = useState([]) 

  const addUserHandler = (name, age) => {
    setUsers([...users, { name, age, id: Math.random().toString()}]);
  }

  const getData = (data)=>{
    setUsers(data)
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={users} onGetData={getData}/>
    </>
  );
}

export default App;
