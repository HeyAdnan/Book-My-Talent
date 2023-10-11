import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";

const Home = () => {
  const text = "Top Categories";
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      reset:true,
    });
    ScrollReveal().reveal(".top-cat", {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      reset: true,
      
    });
    ScrollReveal().reveal(".tagline", {
      origin: 'right',
      distance: '20px',
      duration: 1000,
      delay: 400,
      easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      reset:true,
    });
    ScrollReveal().reveal(".gif", {
      origin: 'right',
      distance: '20px',
      duration: 800,
      delay: 600,
      easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
     
    });
    return () => ScrollReveal().destroy();
  },[]);

  return (
    <>
      <div className="bg-dark">
        <div id="myCarousel" className="carousel slide " data-ride="carousel">
          <div className="carousel-inner">
            <a>
              <div className="carousel-item active">
                <img
                  src="arijit.jpg"
                  className="mx-auto d-block w-100 img-fluid object-fit-fill"
                  alt="Slide 1"
                  style={{ maxWidth: "100%", height: "400px" }}
                />
              </div>
            </a>
            <a>
              <div className="carousel-item">
                <img
                  src="comedy.png"
                  className="mx-auto d-block w-100 img-fluid object-fit-fill "
                  alt="Slide 2"
                  style={{ maxWidth: "100%", height: "400px" }}
                />
              </div>
            </a>
            <a>
              <div className="carousel-item">
                <img
                  src="show.jpg"
                  className=" mx-auto d-block w-100 img-fluid object-fit-fill"
                  alt="Slide 3"
                  style={{ maxWidth: "100%", height: "400px" }}
                />
              </div>
            </a>
            <a>
              <div className="carousel-item">
                <img
                  src="theatre.jpg"
                  className=" mx-auto d-block w-100 img-fluid object-fit-fill"
                  alt="Slide 3"
                  style={{ maxWidth: "100%", height: "400px" }}
                />
              </div>
            </a>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid h-100 ">
        <motion.h2 className="my-3 top-cat" aria-label={text} role="heading">
          {text.split("").map((word, index) => (
            <motion.span
              ref={ref}
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.25,
                staggerChildren: 0.05,
              }}
              style={{
                display: "inline-block",
                "margin-right": "0.25em",
                "white-space": "nowrap",
              }}
            >
              {word.split("").map((character, index) => (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  style={{ display: "inline-block", "margin-right": "-0.2em" }}
                >
                  {character}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="row my-3"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={item}
            className="col-sm-6 col-md-3 mx-auto my-2"
          >
            <div className="card">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png"
                className="card-img-top"
              />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={item}
            className="col-sm-6 col-md-3 mx-auto my-2"
          >
            <div className="card">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTcwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png"
                className="card-img-top"
              />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={item}
            className="col-sm-6 col-md-3 mx-auto my-2 "
          >
            <div className="card">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202211140440.png"
                className="card-img-top"
              />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={item}
            className="col-sm-6 col-md-3 mx-auto my-2 "
          >
            <div className="card">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png"
                className="card-img-top"
              />
            </div>
          </motion.div>
        </motion.div>
        <section className="text-center bg-light testimonials">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item test-1 mb-5 mb-lg-0">
                  <img
                    className="rounded-circle img-fluid mb-3"
                    src="testimonials-1.jpg"
                    alt="Testimonial 1"
                  />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">
                    <br />
                    "Working with Showcase made event planning a breeze! The
                    variety of talents and seamless booking process exceeded my
                    expectations."
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item test-2 mb-5 mb-lg-0">
                  <img
                    className="rounded-circle img-fluid mb-3"
                    src="testimonials-2.jpg"
                    alt="Testimonial 2"
                    width="192"
                    height="192"
                  />
                  <h5>Fred S.</h5>
                  <p className="font-weight-light mb-0">
                    "Showcase provides an incredible platform for artists to
                    connect with their audience. The exposure I gained has been
                    instrumental in my career."
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item test-3 mb-5 mb-lg-0">
                  <img
                    className="rounded-circle img-fluid mb-3"
                    src="testimonials-3.jpg"
                    alt="Testimonial 3"
                  />
                  <h5>Sarah W.</h5>
                  <p className="font-weight-light mb-0">
                    "I love the simplicity and effectiveness of Showcase. It has
                    allowed me to share my music with a broader audience, and
                    I've had amazing opportunities come my way."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="h-100 row rounded mx-1"
        >
          <div className=" my-3 col-sm-12 col-lg-8 my-2 p-0 h-100 ">
            {" "}
            <motion.iframe
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              variants={item}
              className="card rounded mx-auto d-block img-fluid w-100 youtube-embed"
              src="https://www.youtube.com/embed/223eI1x6PsQ?si=oqbiNBj2xmJPrgsK?autoplay=1&mute=1"
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen
            ></motion.iframe>
          </div>
          <div className="my-3 col-sm-12 col-lg-4">
            <h1 className="headline">
              Discover, Book, and Elevate: Showcase Your Talent, Craft
              Unforgettable Events!
            </h1>
            <p className="tagline my-2">
              <h3>
                Empowering Artists, Enriching Experiences: Where Talent Meets
                Opportunity in Every Spotlight
              </h3>
            </p>
          </div>
        </motion.div>
        <section class="py-4 py-xl-5">
          <div class="row d-flex justify-content-between">
            <div className="col-md-6">
              <img src="feedback.gif" className="gif" alt="" />
            </div>
            <div class="col-md-6 feed-form">
              <div class="card border-0 mb-5">
                <div class="card-body p-sm-5">
                  <h2 class="text-center mb-4">Contact us</h2>
                  <form method="post">
                    <div class="mb-3">
                      <input
                        id="name-2"
                        class="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        id="email-2"
                        class="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="mb-3">
                      <textarea
                        id="message-2"
                        class="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        class="btn btn-primary d-block w-100"
                        type="submit"
                      >
                        Send{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
