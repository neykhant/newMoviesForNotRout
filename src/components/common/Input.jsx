import React from "react";

const Input = ({ type, name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className="form-control"
      />
    </div>
  );
};

export default Input;
