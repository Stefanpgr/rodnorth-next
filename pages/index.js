// import { Box, Stack, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'

// import styles from '../styles/Home.module.scss'
import { Col, Container, Row } from 'react-bootstrap'

// const burgerclassNameNamees = classNameNameNames({
//   burger: true,
//   toggle: self.state.focused === index,
// })
export default function Home() {
  return (
    <div className="">
      {/* <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        <title>Rodnorth | Home</title>
      </Head> */}
      <main>
        <section className="nav">
          <header>
            {/* <nav className="plr">
              <img src="/image/logo.svg" alt="" />
              <ul className="nav-links">
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
            </nav> */}
            <article className="hero plr">
              <div className="hero--para">
                <h3 className="heading" style={{ color: 'white' }}>
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
                    <img src="/image/arrow-right.svg" alt="arrow-right" />
                  </span>
                </button>
              </div>
              <div className="hero--icon">
                <img src="/image/Asset 1 1.svg" alt="" width="100%" />
              </div>
            </article>
          </header>
        </section>

        <section className="trust plr">
          <div className="logo">
            <p>We are trusted by</p>
            <div className="logo--img">
              <img src="/image/aib.svg" alt="accident investigation bureau" />
              <img src="/image/emzor.svg" alt="emzor" />
              <img src="/image/chi.svg" alt="chi" />
              <img src="/image/lapo.svg" alt="lapo" />
            </div>
          </div>

          <div className="head">
            <div className="center">
              <h3 className="heading">
                We are agile. We are responsive. We solve problems. And we solve them really well.
              </h3>
            </div>

            <div className="agile">
              <div className="flexs">
                <div className="flex">
                  <div>
                    <img src="/image/handshake.svg" />
                  </div>
                  <div className="px">
                    <h4>Integrity</h4>
                    <p>
                      Our clients freely share their ideas and business strategies. This commitment goes way beyond
                      formal NDAs and paper work.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <img src="/image/bulb.svg" />
                  </div>

                  <div className="px">
                    <h4>Innovation</h4>
                    <p>Our clients vouch for our technological and process innovations.</p>
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <img src="/image/handshake.svg" alt="" />
                  </div>

                  <div className="px">
                    <h4>Serenity</h4>
                    <p>
                      Our clients go to bed with a problem and wake up with a solution because we guarantee serenity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flexs__img">
                <img src="/image/innovation.png" className=" img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="digital-sec plr">
          <div className="row">
            <div className="digital">
              <h3 className="heading">
                Digital transformation solution <br />
                are the gospel we preach <br />
                at RodNorth.
              </h3>
            </div>

            <div className="cloud">
              <p className="the-cloud">
                The cloud is the future of Information Technology. Being a forward thinking organization, RodNorth is
                ready to help you start harnessing the power of the cloud without breaking a sweat! We offer services in
                the following categories
              </p>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <img src="/image/cloud.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Infrastructure services</h5>
                <p className="card-text">The cloud is the future of Information Technology.</p>
              </div>
            </div>

            <div className="card">
              <img src="/image/productivity.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Productivity, modern workspace & collaborative solutions</h5>
                <p className="card-text">The cloud is the future of Information Technology.</p>
              </div>
            </div>

            <div className="card">
              <img src="/image/mail.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Messaging services</h5>
                <p className="card-text">The cloud is the future of Information Technology.</p>
              </div>
            </div>

            <div className="card">
              <img src="/image/security.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Security & governance</h5>
                <p className="card-text">The cloud is the future of Information Technology.</p>
              </div>
            </div>
          </div>

          <div className="butt">
            <button className="btn btn1">
              contact us
              <span>
                <img src="/image/arrow-right.svg" alt="arrow-right" />
              </span>
            </button>
            <a className="load" href="#" style={{ marginLeft: '20px' }}>
              Learn More
            </a>
          </div>
        </section>

        <section className="partners plr" id="partners">
          <h3 className="patner heading text-center agile">Our Partners</h3>
          <div className="cloud">
            <img src="/image/google.png" alt="" />
            <img src="/image/aws.png" alt="" />
            <img src="/image/azure.png" alt="" />
            <img src="/image/hystax.png" alt="" />
          </div>
          <div className="cloud">
            <img src="/image/Group 32.png" alt="" />
            <img src="/image/hp.png" alt="" />
            <img src="/image/cloud.png" alt="" />
            <img src="/image/s.png" alt="" />
            <img src="/image/google.png" alt="" />
          </div>

          <div className="testimony">
            <div className="parag">
              <p className="p">
                “Every single person comes away and says - wow that's a really slick experience, that was so easy to
                use. I feel so much less stressed as I now know we’re doing everything by the book.”
              </p>
              <div className="person">
                <img src="/image/person1.png" alt="" />
                <div>
                  <h5>Andry Ford</h5>
                  <p>CEO at Whatever</p>
                </div>
              </div>
            </div>
            <div className="parag">
              <p className="p">
                I feel so much less stressed <span style={{ color: 'red' }}>❤️</span> as I now know we’re doing
                everything by the book.”
              </p>
              <div className="person">
                <img src="/image/person2.png" alt="" />
                <div>
                  <h5>Andry Ford</h5>
                  <p>CEO at Whatever</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="touchs plr" id="contact">
          <div className="touch">
            <div className="touch__head">
              <h3>Get in touch!</h3>
              <p>We're excited to work with you</p>
            </div>
            <div className="touch__body">
              <div className="touch__icons">
                <img src="/image/location.png" alt="" />
                <div className="touch__write">
                  <h6>Headoffice</h6>
                  <p>
                    10a Ajanaku street, Awuse estate, <br />
                    off Salvation road, Opebi Lagos.
                  </p>
                </div>
                <div className="touch__write">
                  <h6>Branch office</h6>
                  <p>
                    Suite 33, Distinct Plaza, 12 Medical road, <br />
                    Ikeja Lagos.
                  </p>
                </div>
              </div>
              <div className="touch__icons">
                <img src="/image/call.png" alt="" />
                <div className="touch__write">
                  <h6>Call</h6>
                  <p>
                    +234 703 761 0856 <br />
                    +234 802 103 7811
                  </p>
                </div>
                <div className="touch__write">
                  <h6>Whatsapp</h6>
                  <p>+234 705 485 8666</p>
                </div>
              </div>
              <div className="touch__icons">
                <img src="/image/mail.png" alt="" style={{ marginTop: '-50px' }} />
                <div className="touch__write">
                  <h6>Email</h6>
                  <p>
                    info@rodnorth.com <br />
                    online@rodnorth.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="send-message">
            <h3 className="text-center msg-title">Send us a message</h3>
            <form action="">
              <div className="card1">
                <div className="input">
                  <label for="name">Enter your full name</label>
                  <br />
                  <input type="text" name="name" id="" placeholder="Enter your first & last name" />
                </div>
                <div className="input">
                  <label for="email">Email address</label>
                  <br />
                  <input type="email" name="" id="" placeholder="Enter your last name" />
                </div>
                <div className="input">
                  <label for="phone">Phone number</label>
                  <br />
                  <input type="text" name="" id="" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="card2">
                <label for="text">Message</label>
                <textarea name="text" id="" cols="50" rows="9.9" placeholder="Type your message here"></textarea>
              </div>
              <div className="text-center">
                <button className="form-btn">Submit</button>
              </div>
            </form>
          </div>
        </section>

        <section className="blog">
          <h3>From our blog</h3>
          <div className="cards>">
            <div className="card">
              <img src="/image/blog1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">This is a blog title</h5>
                <p className="card-text">The cloud is the future of Information Technology.</p>
              </div>
            </div>
            <div className="card">
              <img src="/image/blog2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">This is a blog title</h5>
                <p className="card-text">The cloud is the future of Information Technology.</p>
              </div>
            </div>
            <div className="card">
              <img src="/image/blog3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">This is a blog title</h5>
                <p className="card-text">The cloud is the future of Information Technology.</p>
              </div>
            </div>
            <div className="card">
              <img src="/image/blog4.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">This is a blog title</h5>
                <p className="card-text">The cloud is the future of Information Technology.</p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="foot__mail">
            <img src="/image/mail.svg" alt="" className="box bounce" />
            <div className="sub">
              <h3>Subscribe to our newsletter</h3>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email address" />
              <button className="submit">Submit</button>
            </div>
          </div>

          <div className="foot__ul">
            <div className="ul__icons">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="bar">
              <ul>
                <li>
                  <h3>RodNorth Ltd</h3>
                </li>
                <li>© 2020 RodNorth.com all rights reserved. Ltd</li>
              </ul>
            </div>
            <div className="bar">
              <ul>
                <li>Enterprise Retail</li>
                <li>Home</li>
                <li>Our Services</li>
                <li>About Us</li>
                <li>Partners</li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
