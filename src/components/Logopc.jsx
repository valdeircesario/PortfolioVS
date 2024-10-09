/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Logopc.module.css'; // Substitua pelo nome correto do seu arquivo de estilos

function Macbook() {
  return (
    <div className={Styles.macbook}>
      <div className={Styles.inner}>
        <div className={Styles.screen}>
          <div className={Styles.faceOne}>
            <div className={Styles.camera}></div>
            <div className={Styles.display}>
              <div className={Styles.shade}></div>
            </div>
            <span>MacBook</span>
          </div>
          <title>valdeir</title>
        </div>
        <div className={Styles.macbody}>
          <div className={Styles.faceOne}>
            <div className={Styles.touchpad}></div>
            <div className={Styles.keyboard}>
              {Array.from({ length: 40 }).map((_, index) => (
                <div key={index} className={Styles.key}></div>
              ))}
              <div className={Styles.key + ' ' + Styles.space}></div>
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index + 40} className={Styles.key}></div>
              ))}
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index + 52} className={Styles.key + ' ' + Styles.f}></div>
              ))}
            </div>
          </div>
          
            
          <div className={Styles.pad + ' ' + Styles.one}></div>
          <div className={Styles.pad + ' ' + Styles.two}></div>
          <div className={Styles.pad + ' ' + Styles.three}></div>
          <div className={Styles.pad + ' ' + Styles.four}></div>
        </div>
        
      </div>
      <div className={Styles.show}></div>
    </div>

    
  );
}

export default Macbook;