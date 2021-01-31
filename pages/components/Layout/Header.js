
const Header = () => {
    return ( 
    <section className={styles.nav}>
        <header>
          <nav className={styles.plr}>
            <img src="assets/image/logo.svg" alt="" />
            <ul className={styles.navLinks}>
              <li>
                <a href="/">Home</a>
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
                <a href="#contact" className={styles.contact}>
                  Contact us
                </a>
              </li>
            </ul>

            <div className={burgerClasses} id="burger">
              <div className="link1"></div>
              <div className="link2"></div>
              <div className="link3"></div>
            </div>
          </nav>
          <article className="hero plr">
            <div className="hero--para">
              <h3 className="heading" style="color: white">
                Helping African Businesses Unlock And Advance <br />
                Their Potential
              </h3>
              <p>
                Our singular goal is to meet the IT Infrastructure needs <br />
                in Africa with affordable technology solutions to <br />
                enable business processes.
              </p>
              <button className="btn">
                contact us
                <span>
                  <img src="assets/image/arrow-right.svg" alt="arrow-right" />
                </span>
              </button>
            </div>
            <div className="hero--icon">
              <img src="assets/image/Asset 1 1.svg" alt="" width="100%" />
            </div>
          </article>
        </header>
      </section>
);
}
 
export default Header;