/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

function Input  ({ label, type, name, required })  {
  return (
    <StyledWrapper>
      <div className="container">
        <input className="input" name={name} type={type} required={required} />
        <label className="label">{label}</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  color: white;
}

.container .label {
  font-size: 1rem;
  padding: 10px;
  position: absolute;
  top: 13px;
  transition: 0.3s;
  pointer-events: none;
}

.input {

  width: 300px;
  height: 50px;
  border: none;
  outline: none;
  padding: 0px 7px;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  background-color: transparent;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
    -1px -1px 6px rgba(255, 255, 255, 0.4);
    
}

.input:focus {
  border: 2px solid transparent;
  color: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
    -1px -1px 6px rgba(255, 255, 255, 0.4), inset 3px 3px 10px rgba(0, 0, 0, 1),
    inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

.container .input:valid ~ .label,
.container .input:focus ~ .label {
  transition: 0.3s;
  padding-left: 2px;
  transform: translate(15px, -27px);
  letter-spacing: 5px;
  font-weight: bold;
}

.container .input:valid,
.container .input:focus {
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
    -1px -1px 6px rgba(255, 255, 255, 0.4), inset 3px 3px 10px rgba(0, 0, 0, 1),
    inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

`;

export default Input;
