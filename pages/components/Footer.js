import { Form, Col } from 'react-bootstrap'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer>
      <div className="foot__mail">
        <img src="/image/mail.svg" alt="" className="box bounce" />
        <div className="sub">
          <h3>Subscribe to our newsletter</h3>
          <Form>
            <Form.Row>
              <Col md="4">
                <Form.Control required placeholder="Name" />
              </Col>
              <Col md="5">
                <Form.Control required type="email" placeholder="Email address" />
              </Col>
              <Col>
                <button className="btn">Submit</button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </div>

      <div className="foot__ul">
        <ul className="foot_icon">
          <li>
            <Image src="/image/icons/whatsapp.svg" width={26} height={26} />
          </li>
          <li>
            <Image src="/image/icons/facebook.svg" width={26} height={26} />
          </li>
          <li>
            <Image src="/image/icons/twitter.svg" width={26} height={26} />
          </li>
          <li>
            <Image src="/image/icons/instagram.svg" width={26} height={26} />
          </li>
          <li>
            <Image src="/image/icons/linkedin.svg" width={26} height={26} />
          </li>
        </ul>
        <div className="line"></div>
        <div className="foot_details">
          <div className="bar">
            <ul className="d-flex text-white foot_logo">
              <li>
                <h3>RodNorth Ltd</h3>
              </li>
              <li className="rights">© 2020 RodNorth.com all rights reserved. Ltd</li>
            </ul>
          </div>
          <div className="bar">
            <ul className=" text-white foot_links">
              <li>Enterprise Retail</li>
              <li>Home</li>
              <li>Our Services</li>
              <li>About Us</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
