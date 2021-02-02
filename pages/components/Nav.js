import React from 'react'
const Nav = () => {
  return (
    <nav className="plr">
      <img src="/image/logo.svg" alt="" />
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

      <div className="burger toggle" id="burger">
        <div className="link1"></div>
        <div className="link2"></div>
        <div className="link3"></div>
      </div>
    </nav>
  )
}

export default Nav
