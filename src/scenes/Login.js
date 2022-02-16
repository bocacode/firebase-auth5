import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <p>Not a user? <Link to="/signup">Sign Up</Link> </p>
    </>
  )
}
