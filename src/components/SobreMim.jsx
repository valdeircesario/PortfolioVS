/* eslint-disable no-unused-vars */
import React from 'react';

import Styles from "./SobreMin.module.css";
import Header from "./Header"
import Sobremim from "./Sobre"
import Rodape from './Footer';
import Card from './card';
import Cubo from './Cubo';
import Faixa from './Faixa';

function SobreMim(){
    return(
        <>
        <Header/>
        
        <Cubo/>
        <Sobremim/>
        <Faixa/>
        <Rodape/>
        </>

    )
}

export default SobreMim