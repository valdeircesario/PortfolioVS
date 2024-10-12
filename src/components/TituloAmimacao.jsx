
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Styles from './TituloAnimacao.module.css'; 

function AnimatedTitle({text}) {
    return (

  <div className={Styles.scanner}>
    
    <marquee>{text}</marquee>
  </div>
    ) 
}

export default AnimatedTitle;