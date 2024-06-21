import React from 'react'
import icon_1 from "../assets/images/icon-1.png"
import icon_2 from "../assets/images/icon-2.png"
import icon_3 from "../assets/images/icon-3.png"
import icon_4 from "../assets/images/icon-4.png"
import icon_5 from "../assets/images/icon-5.png"
import icon_6 from "../assets/images/icon-6.png"
import icon_7 from "../assets/images/icon-7.png"

const Listing = () => {
  return (
    
    <section className="section listing" aria-labelledby="listing-label">
    <div className="container">

      <ul className="grid-list">

        <li>
          <p className="section-subtitle title-lg" id="listing-label" data-reveal="left">Doctors Listig</p>

          <h2 className="headline-md" data-reveal="left">Browse by specialist</h2>
        </li>
        <li>
          <div className="listing-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_1} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <div>
              <h3 className="headline-sm card-title">Psychiatry</h3>

              <p className="card-text">Porta velit</p>
            </div>

          </div>
        </li>

        <li>
          <div className="listing-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_2} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <div>
              <h3 className="headline-sm card-title">Gynecology</h3>

              <p className="card-text">Mattis augue</p>
            </div>

          </div>
        </li>

        <li>
          <div className="listing-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_3} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <div>
              <h3 className="headline-sm card-title">Pulmonology</h3>

              <p className="card-text">Mauris laoreet</p>
            </div>

          </div>
        </li>

        <li>
          <div className="listing-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_4} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <div>
              <h3 className="headline-sm card-title">Orthopedics</h3>

              <p className="card-text">Convallis vulputate</p>
            </div>

          </div>
        </li>

        <li>
          <div className="listing-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_5} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <div>
              <h3 className="headline-sm card-title">Pediatrics</h3>

              <p className="card-text">Posuere maecenas</p>
            </div>

          </div>
        </li>

        <li>
          <div className="listing-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={icon_6} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <div>
              <h3 className="headline-sm card-title">Osteology</h3>

              <p className="card-text">Nisi nullam</p>
            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
  )
}

export default Listing
