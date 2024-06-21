import React from 'react'
import icon_1 from "../assets/images/icon-1.png"
import icon_2 from "../assets/images/icon-2.png"
import icon_3 from "../assets/images/icon-3.png"
import icon_4 from "../assets/images/icon-4.png"

const Services = () => {
  return (
    <section className="service" aria-label="service">
    <div className="container">

      <ul className="service-list">

        <li>
          <div className="service-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_1} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <h3 className="headline-sm card-title">
              <a href="#">Psychiatry</a>
            </h3>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button className="btn-circle" aria-label="read more about psychiatry">
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>

          </div>
        </li>

        <li>
          <div className="service-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_2} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <h3 className="headline-sm card-title">
              <a href="#">Gynecology</a>
            </h3>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button className="btn-circle" aria-label="read more about Gynecology">
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>

          </div>
        </li>

        <li>
          <div className="service-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_3} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <h3 className="headline-sm card-title">
              <a href="#">Pulmonology</a>
            </h3>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button className="btn-circle" aria-label="read more about Pulmonology">
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>

          </div>
        </li>

        <li>
          <div className="service-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_4} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <h3 className="headline-sm card-title">
              <a href="#">Orthopedics</a>
            </h3>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button className="btn-circle" aria-label="read more about Orthopedics">
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>

          </div>
        </li>

      </ul>

    </div>
  </section>
  )
}

export default Services
