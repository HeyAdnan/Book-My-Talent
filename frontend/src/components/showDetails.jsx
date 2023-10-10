import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const [showbool, setshowbool] = useState(false);
  const [artistdata, setartistdata] = useState(null);
  const fetchShowData = async () => {
    const res = await fetch("http://localhost:5000/show/getbyid/" + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setShowData(data);
    setshowbool(true);
  };

  useEffect(() => {
    fetchShowData();
  }, []);
  useEffect(() => {
    if (showbool) {
      const fetchartistdata = async () => {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/celebrity?name=${showData.artist}`,
          {
            headers: {
              "X-Api-Key": "D1Q7GGhH8vk78qIVFlntPA==xBnvOgYPv7oa6lX3",
            },
          }
        );
        console.log(res.status);
        const data = await res.json();
        setartistdata(data[0]);
        console.log(data[0]);
      };
      fetchartistdata();
    }
  }, [showbool]);

  const displayShowDetails = () => {
    const load = () => {
      if (artistdata === null) {
        return (
          <div className="m-5 text-center" role="status">
            <span className="spinner-border"></span>
          </div>
        );
      } else if (typeof artistdata === "undefined") {
        return <h1 className="text-center">Not found</h1>;
      } else {
        return (
          <>
            <h1 className="text-center my-3">Artist Details</h1>
            <h5>Professional Background</h5>
            <ul className="list-group mb-4">
              {artistdata.occupation.map((b) => (
                <a
                  href={`https://en.wikipedia.org/wiki/${b}`}
                  className="list-group-item list-group-item-action list-group-item-light"
                >
                  {b}
                </a>
              ))}
            </ul>
            <h6 className="mb-4">Age: {artistdata.age}</h6>
            <h6 className="mb-4">Birthday: {artistdata.birthday}</h6>
            <h6 className="mb-4">Gender: {artistdata.gender}</h6>
            <h6 className="mb-4">Networth: $ {artistdata.net_worth}</h6>
          </>
        );
      }
    };
    if (showData !== null) {
      return (
        <div className="container">
          <div className="card rounded my-5">
            <div className="card-body row ">
              {" "}
              <div className="col-sm-12 col-md-6">
                {" "}
                <img
                  src={`http://localhost:5000/${showData.image}`}
                  className="rounded image-artist img-fluid p-4 object-cover "
                  alt=""
                />
              </div>
              <div className="col-sm-12 col-md-6">
                {" "}
                <h1 className="my-4 text-center">{showData.title}</h1>
                <h4 className="my-4">Performer: {showData.artist}</h4>
                <h4 className="my-4">Category: {showData.category}</h4>
                <h4 className="my-4">Capacity: {showData.capacity}</h4>
                <h4 className="my-4">Price: ${showData.price}</h4>
                <button
                  type="button"
                  className="my-4 btn btn-outline-danger btn-md"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
            <div className="card-body">{load()}</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="container">{displayShowDetails()}</div>
    </div>
  );
};

export default ShowDetails;
