import React from 'react'

const Blog = () => {
  return (
    <section className="section blog" aria-labelledby="blog-label">
    <div className="container">

      <p className="section-subtitle title-lg text-center" id="blog-label" data-reveal="bottom">
        News & Article
      </p>

      <h2 className="section-title headline-md text-center" data-reveal="bottom">Latest Articles</h2>

      <ul className="grid-list">

        <li>
          <div className="blog-card has-before has-after" data-reveal="bottom">

            <div className="meta-wrapper">

              <div className="card-meta">
                <ion-icon name="person-outline"></ion-icon>

                <span className="span">By Admin</span>
              </div>

              <div className="card-meta">
                <ion-icon name="folder-outline"></ion-icon>

                <span className="span">Specialist</span>
              </div>

            </div>

            <h3 className="headline-sm card-title">Could intermittent fasting reduce breast cancer</h3>

            <time className="title-sm date" datetime="2022-01-28">28 January, 2022</time>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat
            </p>

            <a href="#" className="btn-text title-lg">Read More</a>

          </div>
        </li>

        <li>
          <div className="blog-card has-before has-after" data-reveal="bottom">

            <div className="meta-wrapper">

              <div className="card-meta">
                <ion-icon name="person-outline"></ion-icon>

                <span className="span">By Admin</span>
              </div>

              <div className="card-meta">
                <ion-icon name="folder-outline"></ion-icon>

                <span className="span">Specialist</span>
              </div>

            </div>

            <h3 className="headline-sm card-title">Give children more autonomy during the pandemic</h3>

            <time className="title-sm date" datetime="2022-01-28">28 January, 2022</time>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat
            </p>

            <a href="#" className="btn-text title-lg">Read More</a>

          </div>
        </li>

        <li>
          <div className="blog-card has-before has-after" data-reveal="bottom">

            <div className="meta-wrapper">

              <div className="card-meta">
                <ion-icon name="person-outline"></ion-icon>

                <span className="span">By Admin</span>
              </div>

              <div className="card-meta">
                <ion-icon name="folder-outline"></ion-icon>

                <span className="span">Specialist</span>
              </div>

            </div>

            <h3 className="headline-sm card-title">How do binge eating and drinking impact the liver?</h3>

            <time className="title-sm date" datetime="2022-01-28">28 January, 2022</time>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat
            </p>

            <a href="#" className="btn-text title-lg">Read More</a>

          </div>
        </li>

      </ul>

    </div>
  </section>
  )
}

export default Blog
