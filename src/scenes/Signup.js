import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Trying to sign-up as ${email}`);
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
      <p>Already a user? <Link to="/login">Login</Link></p>
    </>
  )
}
