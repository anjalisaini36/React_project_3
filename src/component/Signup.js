import React from "react";
const Signup = () => {
  return (
    <div>
      <div className="bg-image">
        <div className="m-auto py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className=" signup-heading fw-bold mb-5 ">Sign up now</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        placeholder="First name"
                      />
                      {/* <label className="form-label" for="form3Example1">First name</label> */}
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                        placeholder="Last name"
                      />
                      {/* <label className="form-label" for="form3Example2">Last name</label> */}
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  {/* <label className="form-label" for="form3Example3">Email address</label> */}
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder="Password"
                  />
                  {/* <label className="form-label" for="form3Example4">Password</label> */}
                </div>

                {/* <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
              <label className="form-check-label" for="form2Example33">
                Subscribe to our newsletter
              </label>
            </div> */}

                <button type="submit" className="btn btn-light btn-block mb-4">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
