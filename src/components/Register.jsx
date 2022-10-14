import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/authAction";

function Register() {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    setState({ ...state, [e.target.name]: file });

    setImageUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("userName", state.userName);
    data.append("email", state.email);
    data.append("password", state.password);
    data.append("confirmPassword", state.confirmPassword);
    data.append("image", state.image);

    dispatch(registerUser(data));
  };

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                id="username"
                name="userName"
                value={state.userName}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={state.email}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                value={state.password}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {imageUrl && <img src={imageUrl} alt="user profile" />}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={handleImage}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="register" className="btn" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/messenger/login"> Login Your Account </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
