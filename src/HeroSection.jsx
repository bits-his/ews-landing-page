import React from 'react'
import farm from './Images/farm.jpg'
export default function HeroSection() {
  return (
    <div>
      <section id="hero" className="hero-section">
        <div className="container d-md-flex">
          <div className="col-lg-6">
            <h1 id="heronote">
              <span className="span">
                FARM<span id="span">N</span>OTE
              </span>{' '}
              is a new developed program about farmers
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              dolorem nesciunt facilis repellat tempore suscipit adipisci neque
              nisi, optio atque voluptate magni corporis ratione culpa magnam?
              Iste incidunt amet illum!
            </p>
          </div>
          <div className="col-lg-6">
            <img src={farm} id="img" alt="" />
          </div>
        </div>
        <div className="container p-5">
          <a href="" className="btn" id="btn">
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
