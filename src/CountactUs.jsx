import React from 'react'
import {
  Button,
  Col,
  Row,
} from 'reactstrap'
export default function CountactUs() {
  return (
    <div className="contact_div">
      <Row className="p-4 m-0">
        <Col md={6}>
          <h2 className="p-head">Contact us</h2>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <div>
                <input
                  placeholder="Email"
                  className="input_field mb-3"
                  type="email"
                />
              </div>
              <div>
                <textarea
                  placeholder="Write here"
                  className="input_field mb-3"
                  rows="10"
                />
              </div>
              <button className="secondary_button">Send</button>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
