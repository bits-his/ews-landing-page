import React from 'react'
import './Styles/style.css'

export default function Navbar() {
  return (
    <div>
       <header id="header" className="fixed-top">
        <nav className="navbar navbar-expand-lg align-items-center">
            <h1 className="logo mr-auto"><a href="">Farm<span>N</span>ote</a></h1>
            <div className="collapse navbar-collapse" id="nav-a">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <a href="" id="li-a" className="nav-link ml-5">About</a>
                    </li>
                    <li>
                        <a href="" id="li-a" className="nav-link ml-5">Pricing</a>
                    </li>
                    <li>
                        <a href="" id="li-a" className="nav-link ml-5">Services</a>
                    </li>
                    <li>
                        <a href="" id="li-a" className="nav-link ml-5">Contact Us</a>
                    </li>
                </ul>
            </div>
            <a href="" id="a" className="signin-btn btn btn-transparent">Sign In</a>
        </nav>
    </header>
    </div>
  )
}
