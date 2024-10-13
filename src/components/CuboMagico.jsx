/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";

const Cubooo = () => {
  return (
    <StyledWrapper>
      <div className="cube-container">
        <div className="cube">
          <div className="face front">
            <span>Ola</span>
          </div>
          <div className="face back">Developer</div>
          <div className="face right">World</div>
          <div className="face left">..I Am :)</div>
          <div className="face top">Valdeir</div>
          <div className="face bottom">I Am a</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cube-container {
  width: 200px;
  height: 200px;
  perspective: 800px;
  margin: 70px ;
  transition: 0.8s ease-out;
  
}

.cube-container:hover {
  transform: scale(1.8);
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate 8s infinite linear;
}

.face {
  --french: linear-gradient(
      to right,
      #0000ff,
      #ffffff,
      #ffffff,
      #ffffff,
      #ff0000
    )
    1;
  position: absolute;
  width: 200px;
  height: 200px;
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 200px;
  background: #000000cc;
  border: 2px solid;
  border-image: var(--french);
}

.front {
  transform: translateZ(100px);
}

.back {
  transform: rotateY(180deg) translateZ(100px);
}

.right {
  transform: rotateY(90deg) translateZ(100px);
}

.left {
  transform: rotateY(-90deg) translateZ(100px);
}

.top {
  transform: rotateX(90deg) translateZ(100px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

@keyframes rotate {
  0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}

`;

export default Cubooo
