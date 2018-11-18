import React from 'react';

export default function Textbox(props) {
  return (
    <React.Fragment>
      <input
        className={
          !props.isPropertyValid.valid
          && props.isPropertyValid.errors
          && props.isPropertyValid.errors.length > 0
            ? 'error form-control'
            : 'form-control'
        }
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {!props.isPropertyValid.valid
      && props.isPropertyValid.errors
      && props.isPropertyValid.errors.length > 0
        ? props.isPropertyValid.errors.map(err => (
          <div key={err} className="form-control-feedback">
            {err}
          </div>
        ))
        : null}
    </React.Fragment>
  );
}
