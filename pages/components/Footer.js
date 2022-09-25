import { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import Image from 'next/image';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email,
      name,
    };
    try {
      const { data } = axios.post(
        'https://rodnorth.com/api/subscribe',
        payload
      );

      setLoading(false);
      setEmail('');
      setName('');
      //   console.log(data)
      setShow(true);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };
  return (
    <footer>
      <SweetAlert
        custom
        title={<h2 className="alert-title">Thank you</h2>}
        onConfirm={() => setShow(false)}
        //  onCancel={() => this.setState({ showAlert: false })}
        show={show}
      >
        <img src="https://res.cloudinary.com/stefanpgr/image/upload/v1612268451/check.svg" />
        <p className="alert-message">
          Thank you for subscribing to our newsletter.{' '}
        </p>
      </SweetAlert>
      <div className="foot__mail">
        <Fade cascade delay={300} duration={600} direction="left" triggerOnce>
          <img src="/image/mail.svg" alt="" className="box bounce" />
        </Fade>
        <Fade cascade delay={300} duration={600} direction="up" triggerOnce>
          <div className="sub">
            <h3>Subscribe to our newsletter</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col md="4">
                  <Form.Control
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    required
                    placeholder="Name"
                  />
                </Col>
                <Col md="5">
                  <Form.Control
                    onChange={({ target }) => setEmail(target.value)}
                    required
                    type="email"
                    placeholder="Email address"
                    value={email}
                  />
                </Col>
                <Col>
                  <button type="submit" className="btn" disabled={loading}>
                    Submit
                  </button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </Fade>
      </div>

      <div className="foot__ul">
        <ul className="foot_icon">
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=2348053111852"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src="/image/icons/whatsapp.svg" width={26} height={26} />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/rodnorthlimited"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src="/image/icons/facebook.svg" width={26} height={26} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/RodnorthN"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src="/image/icons/twitter.svg" width={26} height={26} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rodnorthservices/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src="/image/icons/instagram.svg" width={26} height={26} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/rodnorth-nigeria-limited/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src="/image/icons/linkedin.svg" width={26} height={26} />
            </a>
          </li>
        </ul>
        <div className="line"></div>
        <div className="foot_details">
          <div className="bar">
            <ul className="d-flex text-white foot_logo">
              <li>
                <h3>RodNorth Ltd</h3>
              </li>
              <li className="rights">
                © {new Date().getFullYear()} RodNorth.com all rights reserved.
                Ltd
              </li>
            </ul>
          </div>
          <div className="bar">
            <ul className=" text-white foot_links">
              <li>
                <a>Enterprise Retail</a>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#services">Our Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>{' '}
              </li>
              <li>
                <Link href="/#partners">Partners</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
