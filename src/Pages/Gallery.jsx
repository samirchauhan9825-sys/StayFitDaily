import React from 'react'

function Gallery() {
  return (
    <>
    <main>
  {/*? Hero Start */}
  <div className="slider-area2">
    <div className="slider-height2 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap hero-cap2 pt-70">
              <h2>Gallery</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/*? Gallery Area Start */}
  <div className="gallery-area">
    <div className="container-fluid ">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery1.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="#"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="#"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="#"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="#"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery5.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="#"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery6.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="#"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Gallery Area End */}

</main>

    </>
  )
}

export default Gallery