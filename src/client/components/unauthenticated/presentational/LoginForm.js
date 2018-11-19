import React from 'react';

import Textbox from './textbox';

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
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12 col-md-6 mb-2">
                    <Textbox
                      isPropertyValid={props.isEmailValid}
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      value={props.email}
                      onChange={props.handleUserInput}
                    />
                  </div>

                  <div className="col-sm-12 col-md-6 mb-2">
                    <Textbox
                      isPropertyValid={props.isPasswordValid}
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={props.password}
                      onChange={props.handleUserInput}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            {!props.isFormValid.valid
            && props.isFormValid.errors
            && props.isFormValid.errors.length > 0
              ? props.isFormValid.errors.map(err => (
                <div
                  key={err}
                  className="form-control-feedback mb-2 d-flex justify-content-center bd-highlight"
                >
                  {err}
                </div>
              ))
              : null}
            <button
              type="button"
              className="btn btn-custom-3"
              disabled={!props.isFormValid.valid}
              onClick={props.onLogin}
            >
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
