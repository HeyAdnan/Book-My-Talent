import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./AppContext";
import UserAuth from "./UserAuth";
import Browse from "./components/Browse";
import ManageUser from "./components/ManageUser.jsx";
import UpdateUser from "./components/UpdateUser";
import NotFound from "./components/NotFound";
import Addshow from "./components/Addshow";
import ShowDetails from "./components/showDetails";

function App() {
  return (
    <div className="m-0">
      <Toaster position="top center" />
      <BrowserRouter>
        <AppProvider>
          <Navbar />

          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Browse />} path="/browse" />
            <Route
              element={
                <UserAuth>
                  <Addshow />
                </UserAuth>
              }
              path="/addshow"
            />
            <Route
              element={
                <UserAuth>
                  {" "}
                  <ManageUser />{" "}
                </UserAuth>
              }
              path="/manageuser"
            />
            <Route element={<UpdateUser />} path="/updateuser/:id" />
            <Route element={<ShowDetails />} path="/showdetails/:id" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
