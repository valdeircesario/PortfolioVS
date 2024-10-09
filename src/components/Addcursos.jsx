/* eslint-disable no-unused-vars */
import React from "react";
import Styles from "./Addcursos.module.css";
import Button from "./Download";

function Addcursos({ imgSrc, coverSrc, altText, title, description }) {
  return (
    <div className={Styles.flipCard}>
      <div className={Styles.flipCardInner}>
        <div className={Styles.flipCardFront}>
            
          <img src={coverSrc} alt={altText} />
          <h3>{title}</h3>
          
        </div>
        
        <div className={Styles.flipCardBack}>
          
          <h4>{description}</h4>
          
          <Button downloadLink={imgSrc} />
        
        
        </div>
      </div>
    </div>
  );
}

export default Addcursos;