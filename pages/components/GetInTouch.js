import axios from 'axios'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
const GetInTouch = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { BASE_API } = process.env
    const payload = {
      email,
      name,
      message,
      phone,
    }
    // console.log(payload)
    try {
      const { data } = await axios.post(`https://rodnorth.com/api/message`, payload)
      if (data.status === 'success') {
        setShow(true)
        setEmail('')
        setMessage('')
        setPhone('')
        setMessage('')
        setName('')
      } else {
        throw 'something went wrong please try again'
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <SweetAlert
        custom
        title={<h2 className="alert-title">Thank you</h2>}
        onConfirm={() => setShow(false)}
        //  onCancel={() => this.setState({ showAlert: false })}
        show={show}
      >
        <img src="https://res.cloudinary.com/stefanpgr/image/upload/v1612268451/check.svg" />
        <p className="alert-message">Thank you for contacting us. We’d be in touch with you soon. </p>
      </SweetAlert>
      <section className="touchs plr" id="contact">
        <div className="touch">
          <div className="touch__head">
            <h3>Get in touch!</h3>
            <p>We're excited to work with you</p>
          </div>
          <div className="row text-center">
            <Col>
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
            </Col>
            <Col>
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
                  <p>
                    +234 705 485 8666
                    <span>
                      <img className="pl-2" src="/image/whatsapp.svg" />
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="touch__icons">
                <img src="/image/mail.png" alt="" />
                <div className="touch__write">
                  <h6>Email</h6>
                  <p>
                    info@rodnorth.com <br />
                    online@rodnorth.com
                  </p>
                </div>
              </div>
            </Col>
          </div>
        </div>

        <div className="send-message">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center card-title">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <Row className="justify-content-center">
                  <Col md="5">
                    <div className="card1">
                      <div className="input">
                        <label for="name">Enter your full name</label>
                        <br />
                        <input
                          required
                          type="text"
                          name="name"
                          value={name}
                          id=""
                          placeholder="Enter your first & last name"
                          onChange={({ target }) => setName(target.value)}
                        />
                      </div>
                      <div className="input">
                        <label for="email">Email address</label>
                        <br />
                        <input
                          required
                          type="email"
                          name=""
                          id=""
                          value={email}
                          placeholder="Enter email address"
                          onChange={({ target }) => setEmail(target.value)}
                        />
                      </div>
                      <div className="input">
                        <label for="phone">Phone number</label>
                        <br />
                        <input
                          required
                          type="text"
                          name=""
                          id=""
                          value={phone}
                          placeholder="Enter your phone number"
                          onChange={({ target }) => setPhone(target.value)}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md="5">
                    <div className="message-box">
                      <label for="text">Message</label>
                      <textarea
                        required
                        name="text"
                        id=""
                        cols="50"
                        rows="9.9"
                        placeholder="Type your message here"
                        value={message}
                        onChange={({ target }) => setMessage(target.value)}
                      ></textarea>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <button className="btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInTouch
