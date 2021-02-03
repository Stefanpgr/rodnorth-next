import React from 'react'
const Nav = () => {
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
    <nav className="plrn">
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

      <div onClick={navSlide} className="burger toggle" id="burger">
        <div className="link1"></div>
        <div className="link2"></div>
        <div className="link3"></div>
      </div>
    </nav>
  )
}

export default Nav
