import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Welcome from './scenes/Welcome';

function App() {
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={user ? <Welcome /> : <Login />} />
    </Routes>
  );
}

export default App;
