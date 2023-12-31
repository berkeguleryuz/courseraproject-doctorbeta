import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    // remove email phone
    localStorage.removeItem("doctorData");
    setIsLoggedIn(false);
    // setUsername("");

    // Remove the reviewFormData from local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }
    setEmail("");
    window.location.reload();
  };
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(() => {
    const storedemail = sessionStorage.getItem("email");
    if (storedemail) {
      setIsLoggedIn(true);
      setUsername(storedemail);
    }
  }, []);
  return (
    <nav className="flex">
      <div className="nav__logo">
      <img
        src="https://res.cloudinary.com/dcrome1pq/image/upload/v1697381039/Capstone/Logo.svg"
        alt="doctor_icon"
        className="mr-4 mb-"
      />
        <a href="/">
          <span className="emph">Heal</span>
          <span>World</span>
        </a>
      </div>

      <ul className={click ? "nav__links active" : "nav__links"}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>
        {isLoggedIn ? (
          <>
            <div className="profile-dropdown">
              {`Welcome, ${username.split("@")[0]}`}
              <ProfileCard />
            </div>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
