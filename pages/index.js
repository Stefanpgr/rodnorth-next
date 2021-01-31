// import { Box, Stack, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap'

import WelcomeSvg from '../public/image/welcome1.svg'
// const burgerClasses = classNames({
//   burger: true,
//   toggle: self.state.focused === index,
// })
export default function Home() {
  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="shortcut icon" href="/public/image/image 21.png" type="image/x-icon" /> */}
        {/* <link rel="stylesheet" href="css/style.css" /> */}
        <title>Rodnorth | Home</title>
      </Head>
      <div className={styles.bg}>
        <Container fluid>
          <Row>
            <Col md="6" className="pl-5">
              <h1 className={styles.welcomeText}>Helping African Businesses Unlock And Advance Their Potential</h1>
            </Col>
            <Col md="4">
              {/* <Image src={WelcomeSvg} layout="fill" className={styles.img} /> */}
              <img height="300px" src={WelcomeSvg} className={`${styles.img} bg-danger`} />
            </Col>
          </Row>
        </Container>

        {/*  */}
      </div>
    </div>
  )
}
