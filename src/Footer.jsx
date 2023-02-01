import React from 'react'
import { Col, Row } from 'reactstrap'

export default function Footer() {
  return (
    <div className='footer_div'>
      <Row className='m-0 p-3'>
        <Col md={4}></Col>
        <Col md={4} className='text-center'>
            <p>&copy; Copyright 2022 | Early Warning System</p>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}
