import React from 'react'
import { Button, CardBody, Col, Container, Input, Label, Row } from 'reactstrap'
export default function CountactUs() {
  return (
    <div>
      <Container className="mt-5 shadow">
        <center>
          <Button
            className="shadow"
            style={{
              fontSize: '20',
              backgroundColor: '#002045',
              borderRadius: '5rem',
            }}
          >
            CountactUs
          </Button>
        </center>
        <CardBody>
          <Row>
            <Col md={6}>
              <Col md={12}>
                <Label>Email</Label>
                <Input type="email" />
              </Col>
              <Col md={12}>
                <Label>Messege</Label>
                <Input type="textarea" />
              </Col>
              <center className="mt-3 color-primary">
                <Button
                  className="shadow"
                  style={{ backgroundColor: '#002045', borderRadius: '5rem' }}
                >
                  Submit
                </Button>
              </center>
            </Col>
          </Row>
        </CardBody>
      </Container>
    </div>
  )
}
