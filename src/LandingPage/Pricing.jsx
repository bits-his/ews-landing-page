import React from 'react'
import { Col, Row } from 'reactstrap'
import blob from '../Images/blob3.png'
import blob1 from '../Images/blob1.png'
export default function Pricing() {
  return (
    <div className="">
      <Row className="m-0 text-center">
        <Col md={3}>
          <img src={blob} alt="blob" className="blob" />
        </Col>
        <Col md={6} className="pricing_div">
          <div>
            <h1 className="main_heading">Simple, Transparent Pricing</h1>
            <p>we offer pricing that suits all size of businesses.</p>
            <button className="primary_button">Contact Us</button>
          </div>
        </Col>
        <Col md={3}>
          {/* <img src={blob1} alt="blob" className="blob" /> */}
        </Col>
      </Row>
    </div>
  )
}
