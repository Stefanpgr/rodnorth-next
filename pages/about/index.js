import Head from 'next/head'
import { Col } from 'react-bootstrap'
import styles from '../../styles/About.module.scss'
import Image from 'next/image'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { Fade } from 'react-awesome-reveal'
const About = () => {
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Rodnorth | About</title>
      </Head>
      <header>
        <Nav />
        <article className={styles.hero}>
          <Col>
            <div className={styles.heroText}>
              <Fade direction="up" cascade triggerOnce>
                <h3>Dedicated teams to help you meet and surpass your expectations.</h3>
                <p>We are more than happy to work with you.</p>
                <button className="btn">
                  contact us
                  <span className="pl-3">
                    <img src="/image/arrow-right.svg" alt="arrow-right" />
                  </span>
                </button>
              </Fade>
            </div>
          </Col>

          <div className={styles.headImg}>
            <img src="/image/about/boy-laptop.png" alt="boy-laptop" width="100%" />
          </div>
        </article>
      </header>
      <section className={styles.section1}>
        <div className="col-md-6">
          <Fade direction="up" cascade triggerOnce duration={600}>
            <h3 className="">Your success is our sole goal</h3>
            <p>
              Organizations and Businesses today rely on technology to enhance and bring about the needed change in
              their business processes.
            </p>
            <p>
              At RodNorth we see technology as an enabler, that helps to drive this change in business processes, thus
              we use state of the art technology solutions that will help drive and improve business processes.
            </p>
            <p>
              Digital transformation solution and services are the gospel we preach at RodNorth. We use Digital
              transformation technologies to create new and modify existing business processes, customer experiences and
              to meet the ever changing and dynamic business and market requirements.
            </p>
          </Fade>
        </div>
        <div className="col-md-6">
          <Fade triggerOnce>
            <img
              src="/image/about/Mask Group.png"
              alt="phone hands"
              style={{ marginTop: '-10px' }}
              width={827}
              height={515}
              className="img-fluid"
            />
          </Fade>
        </div>
      </section>

      <section className={styles.section2}>
        <div className="col-md-6">
          <Fade direction="left" cascade triggerOnce>
            <Image src="/image/about/hands.png" alt="hands" width={656} height={438} />
          </Fade>
        </div>

        <Col md="6" className={styles.vision}>
          <Fade direction="up" cascade triggerOnce>
            <div className="para">
              <h4>Our vision</h4>
              <p>Using Technology to enable Business processes in Africa</p>
            </div>
            <div className="para">
              <h4>Our Mission</h4>
              <p>Creating Value added services through Digital transformation technology solutions.</p>
            </div>
            <div className="para">
              <h4>Our Values</h4>

              <p className="d-flex" style={{ alignItems: 'baseline' }}>
                Honesty, Teamwork, Customer centric, Integrity
              </p>
            </div>
          </Fade>
        </Col>
      </section>
      <GetInTouch />
      <Footer />
      {/* <section className="leader">
        <h3 className="text-bold">Our leadership</h3>
        <p className="p">
          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum <br />
          malesuada a, duis volutpat.
        </p>

        <div className="cards">
          <div className="card">
            <img src="/image/about/person1.png" alt="Musa Harold" />
            <h4 className="text-medium">Musa Harold</h4>
            <p>CEO at Whatever</p>
          </div>
          <div className="card">
            <img src="/image/about/person2.png" alt="Olayinka Olasunkanmi" />
            <h4 className="text-medium">Olayinka Olasunkanmi</h4>
            <p>CEO at Whatever</p>
          </div>
          <div className="card">
            <img src="/image/about/person3.png" alt="Maureen Nnamani" />
            <h4 className="text-medium">Maureen Nnamani</h4>
            <p>CEO at Whatever</p>
          </div>
          <div className="card">
            <img src="/image/about/person4.png" alt="Omawunmi Moju." />
            <h4 className="text-medium">Omawunmi Moju.</h4>
            <p>CEO at Whatever</p>
          </div>
        </div>
      </section> */}
    </main>
  )
}

export default About
