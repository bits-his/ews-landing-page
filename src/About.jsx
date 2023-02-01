import React from 'react'
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap'
import './About.css'
// import image from "./assets/img/arm-wrestling.png";
import image from './Images/arm-wrestling.png'
// import scale from "./assets/img/balance-scale-right.png";
import scale from './Images/balance-scale-right.png'
export default function About() {
  return (
    <div className="mt-0">
      <div className="about-top">
        <Row className="m-0">
          <Col md={6} className="p">
            <h2 className="p-head">About us</h2>
            <hr className="line" />
            <p className="p-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="secondary_button">Learn more</button>
          </Col>
          <Col md={6}>
            <div className="picture"></div>
          </Col>
        </Row>
      </div>

      <div className="about-second">
        <Row className="m-0">
          <Col md={2}></Col>
          <Col md={3}>
            <h2 className="p-head1">Our Story</h2>
            <p>
              Of three great minds with one shared vision of outstanding
              software development and incredible client satisfaction.
            </p>
          </Col>
          <Col md={4}>
            <Card className="mb-5 p-4">
              <CardBody>
                <CardTitle>
                  {' '}
                  <span className="span">
                    <img src={image} width={35} />
                  </span>
                  Meeting of Great Minds
                </CardTitle>
                {/* <CardText> */}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                {/* </CardText> */}
              </CardBody>
            </Card>
            <p>fafasfd </p>
            <Card className="mb-5 p-4 card ">
              <CardBody>
                <CardTitle className="card-title">
                  {' '}
                  <span className="span">
                    <img src={image} width={35} />
                  </span>
                  Meeting of Great Minds
                </CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CardText>
              </CardBody>
            </Card>
            <Card className="mb-5 p-4 card">
              <CardBody>
                <CardTitle className="card-title">
                  {' '}
                  <span className="span">
                    <img src={image} width={35} />
                  </span>
                  Meeting of Great Minds
                </CardTitle>
                <CardText>
                  <p></p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CardText>
              </CardBody>
            </Card>
            <Card className="mb-5 p-4 card">
              <CardBody>
                <CardTitle className="card-title">
                  {' '}
                  <span className="span">
                    <img src={image} width={35} />
                  </span>
                  Meeting of Great Minds
                </CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
      <div className="about-top">
        <Row>
          <Col md={6}>
            <div className="photo"></div>
          </Col>
          {/* <Col md={1}></Col> */}
          <Col md={6} className="p">
            <h2 className="p-head">Our success is measured by your success</h2>
            <hr className="line" />
            <p className="p-text">
              “ A customer is the most important visitor on our premises, they
              are not dependent on us. We are dependent on them. They are not an
              interruption in our work. They are the purpose of it. They are not
              an outsider in our business. They are part of it. We are not doing
              them a favour by serving them. They are doing us a favour by
              giving us an opportunity to do so. ” – Mahatma Gandhi
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}
