import React from 'react'
import { Col, Row } from 'reactstrap'
import './Styles/style.css'

export default function Navbar() {
  return (
    <div>
      {/* <header id="header" className="fixed-top">
        <nav className="navbar navbar-expand-lg align-items-center">
          <h1 className="logo mr-auto">
            <a href="">
              Farm<span>N</span>ote
            </a>
          </h1>
          <div className="collapse navbar-collapse" id="nav-a">
            <ul className="navbar-nav mr-auto">
              <li>
                <a href="" id="li-a" className="nav-link ml-5">
                  About
                </a>
              </li>
              <li>
                <a href="" id="li-a" className="nav-link ml-5">
                  Pricing
                </a>
              </li>
              <li>
                <a href="" id="li-a" className="nav-link ml-5">
                  Services
                </a>
              </li>
              <li>
                <a href="" id="li-a" className="nav-link ml-5">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <a href="" id="a" className="signin-btn btn btn-transparent">
            Sign In
          </a>
        </nav>
      </header>
    </div>

    <div> */}
      <Row className="nav_row text-center m-0">
        <Col md={4}>
        <h1 className="logo">
            <a href="">
              Farm<span>N</span>ote
            </a>
          </h1>
        </Col>
        <Col md={4} className="">
          <div className="nav_item_div">
            <div className='nav_item'>About</div>
            <div className='nav_item'>Pricing</div>
            <div className='nav_item'>Services</div>
            <div className='nav_item'>Contact Us</div>
          </div>
        </Col>
        <Col md={4}>
          <div className='signin_in_div'>
            <div>
              <button
                className="secondary_button signin_button"
                style={{ float: 'right' }}
              >
                Signin
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
