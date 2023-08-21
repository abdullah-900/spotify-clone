import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
export const Nav = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 510 })
  const isMobile= useMediaQuery({ maxWidth: 500 })
  return (
    <Navbar style={{padding:'0px'}}  className="bg-body-tertiary">
    <Container fluid style={{backgroundColor:'#000000',padding:'12px'}} >
      <Navbar.Brand style={{margin:'0px'}}>
       {isLargeScreen && <img
          src="/logo.svg"
          width="160"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />}
        {isMobile && <img
          src="/logo.svg"
          width="110"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        /> }
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
