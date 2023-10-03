import { useFormik } from "formik";
import React, { useState } from "react";
import Swal from "sweetalert2";
import UseAppContext from "../AppContext";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedin } = UseAppContext();
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

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch("http://localhost:5000/user/authenticate", {
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
          title: "Login Successful",
        })
          .then((result) => {
            navigate("/");
            window.location.reload(false);
          })
          .catch((err) => {
            console.log(err);
          });

        const data = await res.json();

        console.log(data);

        sessionStorage.setItem("user", JSON.stringify(data));

        setLoggedin(true);
      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Email or password is incorrect",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
    },
  });

  return (
    <div className="py-5 vh-100 container-fluid addshowbg login-show">
      <div className="col-md-3 mx-auto">
        <div className="card myshowcard">
          <div className="card-body">
            <form onSubmit={loginForm.handleSubmit}>
              <h2 className="text-center my-5">Login Here</h2>

              <label>Email</label>
              <input
                id="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                type="email"
                className="form-control mb-4"
              />
              <label>Password</label>
              <div class="mb-4 d-flex  p-0 ">
                <input
                  id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password.trim()}
                  type={type}
                  className="form-control mb-4 input-field"
                />
                <div className="icon-eye">
                  <span
                    className="justify-around items-center"
                    onClick={handleToggle}
                  >
                    <Icon className="flex p-2 rounded absolute mr-10" icon={icon} size={25} />
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className={
                  loginForm.isSubmitting
                    ? "btn btn-secondary  w-100 "
                    : "btn btn-dark  w-100"
                }
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
