/* eslint-disable no-unused-vars */
import React from 'react';

import Styles from "./SobreMin.module.css";
import Header from "./Header"
import Progreso from './Progress';
import Sobremim from "./Sobre"
import Rodape from './Footer';
import Cubo from './Cubo';
import Faixa from './Faixa';
import DownloadButton from './Baixacv';

function SobreMim(){
    return(
        <>
        <Header/>
        <DownloadButton/>
        
        <Cubo/>
        <Sobremim/>
        <Faixa/>
        <Progreso/>
        <Faixa/>
        <Rodape/>
        
        </>

    )
}

export default SobreMim