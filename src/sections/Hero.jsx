import React from 'react'
import HeroBanner from "../assets/images/hero-banner.png"
const Hero = () => {
    const heroStyle = {
        backgroundImage: 'url(images/hero-bg.png)'
      };
  return (
    <section className="section hero" style={heroStyle} aria-label="home">
        <div className="container">

          <div className="hero-content">

            <p className="hero-subtitle has-before" data-reveal="left">Welcome To Uzima Pal</p>

            <h1 className="headline-lg hero-title" data-reveal="left">
            The Best Medical Record Platform.
            </h1>

            <div className="hero-card" data-reveal="left">

              <p className="title-lg card-text">
                Search doctors. clinics. hospitals. etc.
              </p>

              <div className="wrapper">

                <div className="input-wrapper title-lg">
                  <input type="text" name="location" placeholder="Locations" className="input-field"/>

                  <ion-icon name="location"></ion-icon>
                </div>

                <button className="btn has-before">
                  <ion-icon name="search"></ion-icon>

                  <span className="span title-md nowrap">Find Now</span>
                </button>

              </div>

            </div>

          </div>

          <figure className="hero-banner" data-reveal="right">
            <img src={HeroBanner} width="590" height="517" loading="eager" alt="hero banner"
              className="w-100"/>
          </figure>

        </div>
      </section>
  )
}

export default Hero
