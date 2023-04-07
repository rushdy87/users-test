import { useState } from 'react';
import { UserForm, UserList } from './components';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
