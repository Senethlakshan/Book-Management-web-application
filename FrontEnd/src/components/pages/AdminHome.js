import React from "react";
import "./AdminHome.css";
import headimg from "../assests/empImg/Multicultural team Illustration Instagram posts.png";
import { Link } from "react-router-dom";
const AdminHome = () => {
  return (
    <>
      <div className="admin-body">
        <div className="admin-image">
          <img src={headimg} alt="phto" />
        </div>
        <div className="admin-links">
            <div className="admin-link">
              <Link to="/register">
                <h1>register</h1>
              </Link>
            </div>

            <div className="admin-link">
              <Link to="/login">
                <h1>login</h1>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
