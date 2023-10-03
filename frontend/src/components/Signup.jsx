import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useState } from "react";
import Icon from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Min. 4 characters req.")
    .required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eye);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eyeOff);
      setType("text");
    } else {
      setIcon(eye);
      setType("password");
    }
  };

  const [selFile, setSelFile] = useState("");

  // initialize the formik
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      values.avatar = selFile;
      setSubmitting(true);

      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 3000);

      // send the data to the server

      const res = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "You have signed up successfully",
        })
          .then((result) => {
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Something went wrong",
        });
      }
    },
    validationSchema: SignupSchema,
  });

  const uploadFile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    console.log(file.name);
    setSelFile(file.name);

    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);
  };

  return (
    <div className="addshowbg login-show">
      <div className="col-md-4 mx-auto">
        <div className="card myshowcard  shadow">
          <div className="card-body">
            <form onSubmit={signupForm.handleSubmit}>
              <h3 className="text-center">Signup Form</h3>
              <hr />

              <label>Name</label>

              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
                {signupForm.touched.name && signupForm.errors.name}
              </span>

              <input
                type="text"
                className="form-control mb-4"
                name="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
              />

              <label>Email</label>
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
                {signupForm.touched.email && signupForm.errors.email}
              </span>
              <input
                className="form-control mb-4"
                name="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
              />

              <label>Password</label>
              <div class="mb-4 flex justify-around p-0 ">
                <span
                  style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                >
                  {signupForm.errors.password}
                </span>
                <input
                  type={type}
                  className="form-control mb-4"
                  name="password"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.password.trim()}
                />
                <div className="icon-eye">
                  <span
                    className=" items-center"
                    onClick={handleToggle}
                  >
                    <Icon
                      className="flex p-2 rounded absolute mr-10"
                      icon={icon}
                      size={25}
                    />
                  </span>
                </div>
              </div>
              <label>Profile Image</label>
              <input
                type="file"
                className="form-control mb-4"
                onChange={uploadFile}
              />

              <button
                disabled={signupForm.isSubmitting}
                type="submit"
                className={
                  signupForm.isSubmitting
                    ? "btn btn-secondary w-100 "
                    : "btn btn-dark  w-100"
                }
              >
                {signupForm.isSubmitting ? (
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

export default Signup;
