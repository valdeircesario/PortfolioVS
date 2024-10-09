/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const CardCSS = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="header">
          <div className="top">
            <div className="circle">
              <span className="red circle2" />
            </div>
            <div className="circle">
              <span className="yellow circle2" />
            </div>
            <div className="circle">
              <span className="green circle2" />
            </div>
            <div className="title">
              <p id="title2">style.css</p>
            </div>
          </div>
        </div>
        <div className="code-container">
          <textarea className="area" id="code" name="code" readOnly>
            .card{" "}
            {/*$merge: {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background-color: #24233b;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 10px 10px rgb(73, 70, 92);
  transition: 0.5s;
}*/}
            .card:hover{" "}
            {/*$merge: {
  transform: translateY(-7px);
  box-shadow: 0px 10px 10px black;
}*/}
            .top{" "}
            {/*$merge: {
  display: flex;
  align-items: center;
  padding-left: 10px;
}*/}
          </textarea>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background-color: #24233b;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 10px 10px rgb(73, 70, 92);
  transition: 0.5s;
}

.card:hover {
  transform: translateY(-7px);
  box-shadow: 0px 10px 10px black;
}

.top {
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.circle {
  padding: 0 4px;
}

.circle2 {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 5px;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}

.header {
  margin: 5px;
  margin-top: 5px;
  border-radius: 5px;
}

#title2 {
  color: white;
  padding-left: 50px;
  font-size: 15px;
}

.code-container {
  text-align: center;
}
#code {
  width: 270px;
  height: 350px;
  resize: none;
  background-color: rgb(73, 70, 92);
  border-radius: 5px;
  border: none;
  color: white;
  padding: 10px;
}
#code:focus {
  outline: none !important;
}

`;

export default CardCSS
