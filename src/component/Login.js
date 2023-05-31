import React from "react";
const Login = (props) => {
  const {
    userName,
    handleUsername,
    password,
    handlePassword,
    loading,
    handleLoginUser,
  } = props;

  return (
    <div className="bg-image">
      <div className=" p-4 m-auto col-3 ">
        <div className="mb-3">
          <label
            for="exampleDropdownFormEmail2"
            className="form-label text-white"
          >
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
            value={userName}
            onChange={(e) => {
              handleUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleDropdownFormPassword2"
            className="form-label text-white"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              handlePassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => handleLoginUser()}
          disabled={loading}
        >
          {loading ? "loading..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
