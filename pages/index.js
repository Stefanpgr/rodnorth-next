import Head from 'next/head'
import Link from 'next/link'
import { Col } from 'react-bootstrap'
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import NavBar from './components/Nav'
import { Fade } from 'react-awesome-reveal'

import Services from './components/ServicesCard'

const { BLOG_URL, API_KEY } = process.env
async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/posts?key=${API_KEY}&fields=title,feature_image,slug,custom_excerpt,excerpt&limit=4`
  ).then((res) => res.json())

  return res
}

export const getStaticProps = async ({ params }) => {
  const { posts } = await getPosts()

  return {
    props: { posts },
  }
}

export default function Home({ posts }) {


  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Rodnorth" />
        <title>Rodnorth | Home</title>
        <meta name="keywords" content="Cloud Infrastructure Solutions, Cloud Security, App Migration, Cloud Backup, Cloud Productivity Tools, Messaging And Communication, Whatsapp For Business, Server Storage Hybrid Cloud, Azure Migration, Aws Migration, Google Cloud, Application Security" />
        <meta name="description" content="On-premise and Cloud-based infrastructure and Security Solutions using
the top cloud provides, AWS, AZURE, GOOGLE,and security Vendors, Trend
Micro, Sophos, and all other cloud-related services. We also provide
messaging solutions with Whatsapp for Business." />
<meta name="og:title" content="Rodnorth - On-premise and Cloud-based infrastructure and Security Solutions using
the top cloud provides, AWS, AZURE, GOOGLE,and security Vendors, Trend
Micro, Sophos, and all other cloud-related services." />
<meta name="og:url" content="https://rodnorth.com/"/>
<meta name="og:type" content="website"/>
<meta name="og:description" content="On-premise and Cloud-based infrastructure and Security Solutions using
the top cloud provides, AWS, AZURE, GOOGLE,and security Vendors, Trend
Micro, Sophos, and all other cloud-related services. We also provide
messaging solutions with Whatsapp for Business."/>
<meta name="og:image" content='https://rodnorth.com/image/logo.svg' / >
       
      </Head>
      <main>
        <section>
          <header>
            <NavBar />
            <article className="hero plr">
              <div className="hero--para">
                <Fade direction="up" cascade triggerOnce>
                  <h3 className="heading" style={{ color: 'white' }}>
                    Helping African Businesses Unlock And Advance <br />
                    Their Potential
                  </h3>

                  <p>
                    Our singular goal is to meet the IT Infrastructure needs in Africa with affordable technology
                    solutions to enable business processes.
                  </p>

                  <button className="btn">
                    contact us
                    <span>
                      <img src="/image/arrow-right.svg" alt="arrow-right" />
                    </span>
                  </button>
                </Fade>
              </div>
              <div className="hero--icon">
                <Fade direction="right" delay={500} triggerOnce>
                  <img src="/image/welcome-svg.svg" alt="" />
                </Fade>
              </div>
            </article>
          </header>
        </section>

        <section className="trust plr">
          <div className="logo">
            <p>We are trusted by</p>
            <Fade>
              <div className="logo--img">
                <img src="/image/aib.svg" alt="accident investigation bureau" />
                <img src="/image/emzor.svg" alt="emzor" />
                <img src="/image/chi.svg" alt="chi" />
                <img src="/image/lapo.svg" alt="lapo" />
              </div>
            </Fade>
          </div>

          <div className="head">
            <Fade direction="up" triggerOnce>
              <div className="center">
                <h3 className="heading">
                  We are agile. We are responsive. We solve problems. And we solve them really well.
                </h3>
              </div>
            </Fade>

            <div className="agile space-between">
              <div className="flexs">
                <Fade cascade direction="up" duration={600} triggerOnce>
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
                </Fade>
              </div>
              <Fade cascade delay={300} duration={800} direction="right" triggerOnce>
                <div className="flexs__img">
                  <img src="/image/innovation.png" className=" img-fluid" />
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <section className="digital-sec " id="services">
          <div className="digital-row">
            {/* <Col md="5" lg="5" sm="5"> */}
            <Fade cascade delay={300} duration={600} direction="up" triggerOnce>
              <div className="digital">
                <h3 className="heading">Digital transformation solution are the gospel we preach at RodNorth.</h3>
              </div>
            </Fade>
            {/* </Col> */}

            {/* <Col md="5" lg="4" sm="5"> */}
            <Fade cascade delay={300} duration={600} direction="up" triggerOnce>
              <div className="cloud">
                <p className="the-cloud">
                  The cloud is the future of Information Technology. Being a forward thinking organization, RodNorth is
                  ready to help you start harnessing the power of the cloud without breaking a sweat! We offer services
                  in the following categories
                </p>
              </div>
            </Fade>
            {/* </Col> */}
          </div>

          <div className="row ">
            {/* <Fade cascade delay={100} duration={600} direction="up"> */}
            <Col md="5" lg="3" sm="5">
              <Fade cascade delay={100} duration={500} direction="up" triggerOnce>
                <div className="card">
                  <img src="/image/cloud.svg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Infrastructure Services</h5>

                    <Services text={`@ RodNorth we provide elements that support the management and usability of data and information
  systems.On-Premise infrastructure to cloud based infrastructure services. We understand your
  requirement and can provide the best of breed solutions to meet your IT needs.`} summary={`@ RodNorth we provide elements that support the management and usability of data and information
  systems.On-Premise infrastructure to cloud based infrastructure services. We understand your
  requirement and can provide the best of breed solutions to meet your IT needs.`.split(' ')
  .slice(0, 25)
  .join(' ')} />
                  </div>
                </div>
              </Fade>
            </Col>

            <Col md="5" lg="3" sm="5">
              <Fade cascade delay={200} duration={500} direction="up" triggerOnce>
                <div className="card">
                  <img src="/image/productivity.svg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Productivity & Modern Workspace</h5>

                    <Services
                      text={`The times and trends have changed in the work place environment. Remote work has become a main stay in our day to day business life. @ RodNorth we help you to stay on course in your business to fit into the morderm work place of tyhe 21st Century.`}
                      summary={`The times and trends have changed in the work place environment. Remote work has become a main stay in our day to day business life. @ RodNorth we help you to stay on course in your business to fit into the morderm work place of tyhe 21st Century.`
                        .split(' ')
                        .slice(0, 25)
                        .join(' ')}
                    />
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md="5" lg="3" sm="5">
              <Fade cascade delay={300} duration={500} direction="up" triggerOnce>
                <div className="card">
                  <img src="/image/mail.svg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Messaging</h5>

                    <Services
                      text={`Unleash the power of WhatsApp for Business and connect with your customers like never before. We help business get closer to their customer using whatsapp for Business API.`}
                      summary={`Unleash the power of WhatsApp for Business and connect with your customers like never before. We help business get closer to their customer using whatsapp for Business API.`
                        .split(' ')
                        .slice(0, 25)
                        .join(' ')}
                    />
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md="5" lg="3" sm="5">
              <Fade cascade delay={500} duration={500} direction="up" triggerOnce>
                <div className="card">
                  <img src="/image/security.svg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Security & Governance</h5>
                    <Services
                      text={`Security is very paramount to any business. @ Rodnorth we provide A comprehensive, multi-layer
                        security strategy that is vital to an effective defense. we ensure your network, data,
                        customers, and your business are protected`}
                        summary={`Security is very paramount to any business. @ Rodnorth we provide A comprehensive, multi-layer
                        security strategy that is vital to an effective defense. we ensure your network, data,
                        customers, and your business are protected`.split(' ')
                        .slice(0, 25)
                        .join(' ')}
                    />
                  </div>
                </div>
              </Fade>
            </Col>
            {/* </Fade> */}
          </div>
          <Fade direction="up" delay={600} triggerOnce>
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
          </Fade>
        </section>

        <section className="partners plr" id="partners">
          <Fade direction="up" triggerOnce>
            <h3 className="our-partner text-center">Our Partners</h3>
            <div className="cloud">
              <img src="/image/google.png" alt="google" />
              <img src="/image/aws.png" alt="aws" />
              <img src="/image/azure.png" alt="azure" />
              <img src="/image/hystax.png" alt="hystax" />
              <img src="/image/whatsapp-big.svg" alt="whatsapp" />
            </div>
            <div className="cloud">
              <img src="/image/Group 32.png" alt="Digital Ocean" />
              <img src="/image/hp.png" alt="hp" />
              <img src="/image/cloud.png" alt="cloud" />
              <img src="/image/s.png" alt="s" />
              <img src="/image/cloudhealth.svg" alt="cloud health" />
              <img src="/image/nutanix.svg" alt="nutanix" />
            </div>
          </Fade>
          <div className="testimony">
            <div className="parag">
              <Fade direction="up" triggerOnce>
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
              </Fade>
            </div>
            <div className="parag">
              <Fade direction="up" triggerOnce>
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
              </Fade>
            </div>
          </div>
        </section>

        <GetInTouch />

        {posts.length > 0 && (
          <section className="blog">
            <h3 className="text-center">From our blog</h3>
            <div className="row plr" style={{ justifyContent: 'center', alignItems: 'center' }}>
              {posts.map((el, i) => (
                <Col md="5" lg="3" sm="5" key={i}>
                  <Fade cascade delay={(i + 1) * 100} duration={600} direction="up" triggerOnce>
                    <Link href={{ pathname: '/blog/[slug]' }} as={`/blog/${el.slug}`}>
                      <div className="card">
                        <img src={el.feature_image} className="card-img-top" alt={el.title} />
                        <div className="card-body">
                          <h5 className="card-title">{el.title}</h5>
                          <p className="card-text">{el.custom_excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </Col>
              ))}
              <Fade direction="up" delay={700} triggerOnce>
                <Link href="/blog">
                  <button className="btn">See More</button>
                </Link>
              </Fade>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </div>
  )
}
