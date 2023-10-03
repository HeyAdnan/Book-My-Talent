import React from 'react';

const Home = () => {
  return (
    
     <div className="bg-dark">
      <div id="myCarousel" className="carousel slide " data-ride="carousel">
      <div className="carousel-inner">
        <a><div className="carousel-item active">
          <img
            src="arijit.jpg"
            className="mx-auto d-block w-100 img-fluid object-fit-fill"
            alt="Slide 1"
            style={{ maxWidth:"100%",height:"400px" }}
          />
        </div></a>
        <a><div className="carousel-item">
          <img
            src="comedy.png"
            className="mx-auto d-block w-100 img-fluid object-fit-fill "
            alt="Slide 2"
            style={{ maxWidth: '100%', height: '400px' }}
          />
        </div></a>
        <a><div className="carousel-item">
          <img
            src="show.jpg"
            className=" mx-auto d-block w-100 img-fluid object-fit-fill"
            alt="Slide 3"
            style={{ maxWidth: '100%', height: '400px' }}
          />
        </div></a>
        <a><div className="carousel-item">
          <img
            src="theatre.jpg"
            className=" mx-auto d-block w-100 img-fluid object-fit-fill"
            alt="Slide 3"
            style={{ maxWidth: '100%', height: '400px' }}
          />
        </div></a>
      </div>
      
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
    </div>
     </div>
    
  )
}

export default Home