import React from 'react';

import "./loginpage.css";

const LoginPage = () => {
  return (
   <div className="login-body">
     <div className="login-container">
      <h1 className="loginname">
        <i class="fas fa-lock" /> login
      </h1>
      <div>
        <div class="grandParentContaniner">
          <div class="parentContainer">
            <form>
              <label className="inputatribute">Username</label>
              <input
                id="username"
                type="text"
                className="form-control"
                name="userName"
                required
              />
              <label className="inputatribute">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                name="password"
                required
              />
              <br />
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />{" "}
              <label>Remember me</label>
              <br /><br/>
              <button type="submit" className="loginbtn">
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   </div>

  );
};

export default LoginPage;
