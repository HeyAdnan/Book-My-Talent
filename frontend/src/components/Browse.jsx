import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

const Card = ({ show }) => {
  const container = {
    hidden: { opacity: 1, scale: 1 },
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
  const [isFlipped, setIsFlipped] = React.useState(false);
  // console.log(project);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      variants={item}
      className="col-md-3"
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          className="mt-4 mb-4 text-center card show-card CardFront card-browse shadow d-flex justify-content-center"
          onMouseDown={() => setIsFlipped((prev) => !prev)}
        >
          {/* <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                className="col-md-3 mt-4 mb-4 text-center card CardFront card-browse shadow show-card d-flex justify-content-center"
              > */}
          <img
            src={`http://localhost:5000/${show.image}`}
            alt=""
            className="card-img-top card-image-browse"
          />
          <div className="card-body my-auto card-body-browse align-items-center">
            <h3>{show.title}</h3>
            <h4>Performed By: {show.artist}</h4>
            <h5>
              {new Date(show.showdate).toLocaleDateString()}{" "}
              {new Date(show.showdate).toLocaleTimeString()}
            </h5>
            <h4>Price: ${show.price}</h4>
          </div>
          {/* </motion.div> */}
        </div>

        <div
          className="mt-4 mb-4 text-center show-card card CardBack card-browse shadow card-with-button justify-content-center"
          onMouseUp={() => setIsFlipped((prev) => !prev)}
        >
          {/*<motion.div 
              
                whileHover={{ scale: 1}}
                whileTap={{ scale: 0.9 }}
                className="col-md-3 mt-4 mb-4 text-center card CardBack card-browse shadow show-card  justify-content-center"
            >*/}
          <img
            src={`http://localhost:5000/${show.image}`}
            alt=""
            className="card-img-top card-image-browse"
          />
          <div className="card-body">
            {" "}
            <Link
              to={"/showdetails/" + show._id}
              className="btn btn-lg mx-auto btn-outline-danger "
            >
              View Details
            </Link>
            {/* </motion.div> */}
          </div>
        </div>
      </ReactCardFlip>
    </motion.div>
  );
};
const Browse = () => {
  const [showlist, setShowlist] = useState([]);
  const category = ["Music", "Dance", "Play", "Magic"];
  const [selOptions, setSelOptions] = useState([]);
  const [showdata, setShowdata] = useState([]);
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

  const fetchshowdata = async () => {
    const res = await fetch("http://localhost:5000/show/getall");
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setShowdata(data);
      setShowlist(data);
    }
  };
  useEffect(() => {
    fetchshowdata();
  }, []);

  const searchShow = (e) => {
    const search = e.target.value;
    const result = showlist.filter((show) => {
      if (search === "") return showlist;
      return show.artist.toLowerCase().includes(search.toLowerCase());
    });
    setShowdata(result);
  };

  const filterCategory = (e) => {
    if (e.target.value === "") return setShowdata(showlist);
    const selcategory = e.target.value;
    const result = showlist.filter((show) => {
      return show.category === selcategory;
    });
    setShowdata(result);
  };

  const selectOption = (category) => {
    if (selOptions.includes(category)) {
      setSelOptions(selOptions.filter((b) => b !== category));
    } else {
      setSelOptions([...selOptions, category]);
    }
  };

  useEffect(() => {
    if (selOptions.length === 0) return setShowdata(showlist);
    setShowdata(
      showlist.filter((show) => {
        return selOptions.includes(show.category);
      })
    );
  }, [selOptions]);
  return (
    <div className="container-fluid p-0">
      <header className="head bg-dark">
        <div className="container py-5">
          <h1 className="text-center mb-4">Browse Show</h1>

          <input
            type="text"
            placeholder="EnterArtist "
            className="form-control"
            onChange={searchShow}
          />

          <div className="row mt-4">
            <div className="col-md-4">
              <select className="form-control" onChange={filterCategory}>
                <option value="">Select Category</option>
                {category.map((b) => (
                  <option value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4 my-auto">
              <input
                checked={selOptions.includes("Music")}
                onClick={() => {
                  selectOption("Music");
                }}
                className="form-check-input"
                type="checkbox"
              />{" "}
              Music&nbsp;&nbsp;&nbsp;
              <input
                checked={selOptions.includes("Dance")}
                onClick={() => {
                  selectOption("Dance");
                }}
                className="form-check-input"
                type="checkbox"
              />{" "}
              Dance&nbsp;&nbsp;&nbsp;
              <input
                checked={selOptions.includes("Play")}
                onClick={() => {
                  selectOption("Play");
                }}
                className="form-check-input"
                type="checkbox"
              />{" "}
              Play&nbsp;&nbsp;&nbsp;
              <input
                checked={selOptions.includes("Magic")}
                onClick={() => {
                  selectOption("Magic");
                }}
                className="form-check-input"
                type="checkbox"
              />{" "}
              Magic&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </header>{" "}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="row mx-auto addshowbg"
      >
        {showdata.map((show, index) => {
          return <Card show={show} key={`card-${index}`} />;
        })}
      </motion.div>
    </div>
  );
};
export default Browse;
