import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../store/actions/authAction";
import { ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR } from "../store/types/authTypes";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const alert = useAlert();

  const { authenticate, error, successMessage } = useSelector(
    state => state.auth
  );

  const inputHandle = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const login = e => {
    e.preventDefault();
    dispatch(loginUser(state));
  };

  useEffect(() => {
    if (authenticate) {
      navigate("/");
    }
    if (successMessage) {
      alert.success(successMessage);
      dispatch({ type: SUCCESS_MESSAGE_CLEAR });
    }
    if (error) {
      error.map(err => alert.error(err));
      dispatch({ type: ERROR_CLEAR });
    }
  }, [successMessage, error]);

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>

        <div className="card-body">
          <form onSubmit={login}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={state.email}
                onChange={inputHandle}
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
                onChange={inputHandle}
              />
            </div>

            <div className="form-group">
              <input type="submit" value="login" className="btn" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/messenger/register"> Don't have any Account </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
