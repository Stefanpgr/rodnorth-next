import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const NavBar = () => {
  const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelector('.nav-links li')

    nav.classList.toggle('nav-active')

    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = ''
    //   } else {
    //     link.style.animation = `navLinkFade 0.5s ease forward ${index / 5 + 0.4}s`
    //   }
    // })

    burger.classList.toggle('toggle')
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top" style={{ backgroundColor: '#fff' }}>
      {/* //{' '} */}
      {/* <nav className="navbar navbar-default banner"> */}
      {/* // <nav className="plrn"> */}
      {/* <img src="/image/logo.svg" alt="" />
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="#services">Our service</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <a href="#partners">Partners</a>
        </li>
        <li>
          <a href="#contact" className="contact">
            Contact us
          </a>
        </li>
      </ul>

      <div onClick={navSlide} className="burger toggle" id="burger">
        <div className="link1"></div>
        <div className="link2"></div>
        <div className="link3"></div>
      </div> */}

      <Navbar.Brand href="/">
        <img src="/image/logo.svg" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <img src="/image/menu.svg" alt="menu" />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="#services">Our Services</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="#partners">Partners</Nav.Link>
          <Nav.Link href="#contact">
            <div className="contact">Contact Us</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
