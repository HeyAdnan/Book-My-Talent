import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
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
        duration: 1,
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
      <div className="container-fluid vh-100 ">
        <motion.h2 className="my-3" aria-label={text} role="heading">
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
                  style={{ display: "inline-block", "margin-right": "-0.05em" }}
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
