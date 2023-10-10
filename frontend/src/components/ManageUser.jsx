import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const ManageUser = () => {
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/user/getall");
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setUserData(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleTogglePasswordVisibility = (userId) => {
    setUserData((prevUsers) => {
      return prevUsers.map((user) => {
        if (user._id === userId) {
          return { ...user, showPassword: !user.showPassword };
        }
        return user;
      });
    });
  };

  const deleteUser = async (id) => {
    toast.promise(
      fetch("http://localhost:5000/user/delete/" + id, { method: "DELETE" }),
      {
        loading: "Deleting...",
        success: () => {
          fetchUserData();
          return <b>User Deleted!</b>;
        },
        error: <b>Could not delete.</b>,
      }
    );
  };


  return (
    <div>
      <div className="container py-5">
        <h1 className="text-center">Manage Users</h1>

        <table className="table table-dark rounded">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th colSpan={2}>Password</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.showPassword ? (
                      <b>{user.password}</b>
                    ) : (
                      <b>⚪⚪⚪⚪⚪⚪</b>
                    )}
                    </td>
                    <td>
                    <button
                      // key={index}
                      className="items-center pass-in"
                      onClick={() => {
                        handleTogglePasswordVisibility(user._id);
                      }}
                    >
                      {" "}
                      {user.showPassword ? (
                        <Icon class="absolute mr-10" icon={eyeOff} size={25} />
                      ) : (
                        <Icon class="absolute mr-10" icon={eye} size={25} />
                      )}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteUser(user._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link
                      to={"/updateuser/" + user._id}
                      className="btn btn-primary"
                    >
                      View User
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
