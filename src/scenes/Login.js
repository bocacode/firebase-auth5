import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../ConnectAuth'

import { Button, CardGroup, Card, Carousel, ButtonGroup } from 'react-bootstrap'

export default function Login({ setUser, user }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  const auth = getAuth(app)

  useEffect(() => {
    const localUser = localStorage.getItem('displayName')
    const avatar = localStorage.getItem('avatar')

    console.log('localUser from LS ', localUser)

    if (localUser) setUser({ ...user, displayName: localUser, photo: avatar })
  }, [])

  const handleFormSubmit = event => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
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

        localStorage.setItem('displayName', result.user.displayName)
        localStorage.setItem('avatar', result.user.photo)
        localStorage.setItem('uid', result.user.uid)

        console.log('this is my result', result.user.displayName)
        navigate('/')
      })
      .catch(alert)
  }

  return (
    <>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <input type='submit' value='Login' />
      </form>
      <button
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
        }}>
        Sign in with Google
      </button>
      <Button>test</Button>
      <CardGroup className='container'>
        <Card>
          <Card.Img variant='top' src='https://picsum.photos/100/200' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='https://picsum.photos/100/200' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='https://picsum.photos/100/200' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src='https://picsum.photos/200/300' alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://picsum.photos/200/300' alt='Second slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://picsum.photos/200/300' alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <ButtonGroup aria-label='Basic example'>
        <Button variant='secondary'>Left</Button>
        <Button variant='secondary'>Middle</Button>
        <Button variant='secondary'>Right</Button>
      </ButtonGroup>
      <p>
        Not a user? <Link to='/signup'>Sign Up</Link>
      </p>
    </>
  )
}
