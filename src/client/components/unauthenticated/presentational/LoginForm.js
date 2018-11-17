import React from 'react';

export default function LoginForm(props) {
  return (
    <div>
      <div className="d-flex justify-content-center bd-highlight">
        <h3 className="p-2 m-0">Login</h3>
      </div>
      <div className="d-flex justify-content-center bd-highlight">
        <div className="p-2 m-0">
          <form>
            <fieldset>
              <div className="form-group has-danger">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <input
                      className="form-control form-control-danger"
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      value={props.email}
                      onChange={props.handleUserInput}
                    />
                    {!props.isEmailValid.valid
                    && props.isEmailValid.errors.length > 0
                      ? props.isEmailValid.errors.map(err => (
                        <div key={err} className="form-control-feedback">
                          {err}
                        </div>
                      ))
                      : null}
                  </div>

                  <div className="col-sm-12 col-md-6 has-feedback has-error">
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={props.password}
                      onChange={props.handleUserInput}
                    />
                    {!props.isPasswordValid.valid
                    && props.isPasswordValid.errors.length > 0
                      ? props.isPasswordValid.errors.map(err => (
                        <div key={err} className="form-control-feedback">
                          {err}
                        </div>
                      ))
                      : null}
                  </div>
                </div>
              </div>
            </fieldset>
            <button type="button" className="btn btn-custom-3" disabled={!props.isFormValid} onClick={props.onLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
      {/* <div className="d-flex justify-content-center bd-highlight">
          <div className="p-2 m-0">

          </div>
        </div> */}
    </div>
  );
}
