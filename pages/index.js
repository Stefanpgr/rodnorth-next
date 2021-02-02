import Head from 'next/head'

import { Col, Container, Row } from 'react-bootstrap'
import GetInTouch from './components/GetInTouch'
import Nav from './components/Nav'

export default function Home() {
  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Rodnorth | Home</title>
      </Head>
      <main>
        <section className="nav">
          <header>
            <Nav />
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
                <img src="/image/welcome-svg.svg" alt="" />
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
          <div className="row ">
            <Col md="5">
              <div className="digital">
                <h3 className="heading">
                  Digital transformation solution <br />
                  are the gospel we preach <br />
                  at RodNorth.
                </h3>
              </div>
            </Col>

            <Col md="5">
              <div className="cloud">
                <p className="the-cloud">
                  The cloud is the future of Information Technology. Being a forward thinking organization, RodNorth is
                  ready to help you start harnessing the power of the cloud without breaking a sweat! We offer services
                  in the following categories
                </p>
              </div>
            </Col>
          </div>

          <div className="row">
            <Col md="3">
              <div className="card">
                <img src="/image/cloud.svg" className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Infrastructure services</h5>
                  <p className="card-text">The cloud is the future of Information Technology.</p>
                </div>
              </div>
            </Col>

            <Col md="3">
              <div className="card">
                <img src="/image/productivity.svg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Productivity, modern workspace & collaborative solutions</h5>
                  <p className="card-text">The cloud is the future of Information Technology.</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card">
                <img src="/image/mail.svg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Messaging services</h5>
                  <p className="card-text">The cloud is the future of Information Technology.</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card">
                <img src="/image/security.svg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Security & governance</h5>
                  <p className="card-text">The cloud is the future of Information Technology.</p>
                </div>
              </div>
            </Col>
          </div>

          <div className="butt row">
            <button className="btn">
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

        <GetInTouch />

        <section className="blog">
          <h3 className="text-center">From our blog</h3>
          <div className="row plr" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Col md="3">
              <div className="card">
                <img src="/image/blog1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">This is a blog title</h5>
                  <p className="card-text">The cloud is the future of Information Technology.</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card">
                <img src="/image/blog2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">This is a blog title</h5>
                  <p className="card-text">The cloud is the future of Information Technology.</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card">
                <img src="/image/blog3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">This is a blog title</h5>
                  <p className="card-text">The cloud is the future of Information Technology.</p>
                </div>
              </div>
            </Col>

            <Col md="3">
              <div className="card">
                <img src="/image/blog4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">This is a blog title</h5>
                  <p className="card-text">The cloud is the future of Information Technology.</p>
                </div>
              </div>
            </Col>
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
