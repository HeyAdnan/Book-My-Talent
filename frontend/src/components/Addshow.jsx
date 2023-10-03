import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";

const showSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, "Min. 4 characters req.")
    .required("Title is Required"),
  artist: Yup.string().required("Artist id is required"),
  capacity: Yup.number().required("Enter Capacity"),
  price: Yup.number().required("Enter Price"),
});
const Addshow = () => {
  const [selFile, setSelFile] = useState("");
  const showform = useFormik({
    initialValues: {
      title: "",
      artist: "",
      category: "",
      capacity: "0",
      price: "0",
      image: "",
      createdAt: new Date().toLocaleDateString("en-ca"),
      showdate: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      values.image = selFile;

      const res = await fetch("http://localhost:5000/show/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      setSubmitting(false);
      console.log(res.status);
      if (res.status === 200) {
        toast.success("Show added");
      } else if (res.status === 401) {
        let mess = await res.json();
        Swal.fire({
          icon: "error",
          title: mess.message,
          text: "Something went wrong",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Something went wrong",
        });
      }
    },
    validationSchema: showSchema,
  });
  const uploadFile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setSelFile(file.name);

    const fd = new FormData();
    console.log(file.name);
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);
  };

  return (
    <div className="addshowbg ">
      <div className="col-md-4 mx-auto py-5 ">
        <div className="card shadow myshowcard">
          <div className="card-body">
            <form onSubmit={showform.handleSubmit}>
              <h3 className="text-center" style={{ color: "maroon" }}>
                Add Show
              </h3>
              <hr />
              <div className="row">
                <div className="col">
                  {" "}
                  <label>Title</label>
                  <span
                    style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                  >
                    {showform.touched.title && showform.errors.title}
                  </span>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="title"
                    onChange={showform.handleChange}
                    value={showform.values.title}
                  />
                </div>
                <div className="col">
                  {" "}
                  <label>Artist</label>
                  <span
                    style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                  >
                    {showform.touched.artist && showform.errors.artist}
                  </span>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="artist"
                    onChange={showform.handleChange}
                    value={showform.values.artist}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Category</label>
                  <span
                    style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                  >
                    {showform.errors.category}
                  </span>
                  <select
                    className="form-control mb-4"
                    id="category"
                    onChange={showform.handleChange}
                    value={showform.values.category}
                  >
                    <option value="Music">Music</option>
                    <option value="Dance">Dance</option>
                    <option value="Play">Play</option>
                    <option value="Magic">Magic</option>
                  </select>
                </div>
                <div className="col">
                  <label>Price</label>
                  <span
                    style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                  >
                    {showform.touched.price && showform.errors.price}
                  </span>
                  <input
                    type="number"
                    className="form-control mb-4"
                    onChange={showform.handleChange}
                    value={showform.values.price}
                    id="price"
                    min="1"
                    step="any"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {" "}
                  <label>Capacity</label>
                  <span
                    style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                  >
                    {showform.touched.capacity && showform.errors.capacity}
                  </span>
                  <input
                    type="number"
                    className="form-control mb-4"
                    onChange={showform.handleChange}
                    value={showform.values.capacity}
                    id="capacity"
                    min="1"
                    step="any"
                  />
                </div>
                <div className="col">
                  {" "}
                  <label>Show Date</label>
                  <span
                    style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                  >
                    {showform.touched.showdate && showform.errors.showdate}
                  </span>
                  <input
                    type="date"
                    className="form-control mb-4"
                    id="showdate"
                    onChange={showform.handleChange}
                    value={showform.values.showdate}
                  />
                </div>
              </div>

              <label>Image</label>
              <input
                accept="image/* "
                type="file"
                id="image"
                className="form-control mb-4"
                onChange={uploadFile}
              />
              <button
                disabled={showform.isSubmitting}
                type="submit"
                className={
                  showform.isSubmitting
                    ? "btn btn-secondary  w-100 "
                    : "btn btn-dark  w-100"
                }
              >
                {showform.isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span>Loading ...</span>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addshow;
