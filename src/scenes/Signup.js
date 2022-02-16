import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../ConnectAuth'

export default function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        navigate('/')
      })
      .catch(alert)
  }
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user)
        navigate('/')
      })
      .catch(alert)
  }
  return (
    <>
      <h1>Signup</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <label>Email:
          <input type="email" value={email}
            onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password}
            onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Sign up" />
      </form>
      <button
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: 'black',
          color: 'white',
          border: 'none' }}>
        Sign in with Google</button>
      <p>Already a user? <Link to="/login">Login</Link></p>
    </>
  )
}
