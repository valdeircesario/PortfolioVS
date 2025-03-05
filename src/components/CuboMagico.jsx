/* eslint-disable no-unused-vars */

import React from "react";
import Styles from "./CuboMagico.module.css";

const Cubooo = () => {
  return (
    <div className={Styles.cubeContainer}>
      <div className={Styles.cube}>
        <div className={`${Styles.face} ${Styles.front}`}>
          <span>Ola</span>
        </div>
        <div className={`${Styles.face} ${Styles.back}`}>Developer</div>
        <div className={`${Styles.face} ${Styles.right}`}>World</div>
        <div className={`${Styles.face} ${Styles.left}`}>..I Am :</div>
        <div className={`${Styles.face} ${Styles.top}`}>Valdeir</div>
        <div className={`${Styles.face} ${Styles.bottom}`}>I Am a</div>
      </div>
    </div>
  );
};

export default Cubooo;
