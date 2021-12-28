import React from 'react'
import { Navbar , Container } from 'react-bootstrap'
import logo from './Site-logo.png'
const Navigationbar = () => {
    return (
    <Navbar bg="light" variant="success" className='shadow p-3 mb-3 rounded'>
        <Container>
          <Navbar.Brand style={{fontWeight:"600" , color:"blue"}}>
            <img
              alt=""
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{marginRight:"1.5rem"}}
            />{' '}
          Hash-finder
          </Navbar.Brand>
        </Container>
    </Navbar>
    )
}

export default Navigationbar
