/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Baixacv.module.css'; // Importando o CSS

const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/public/curriculoo/Currículopessoalvaldeir.pdf'; // Altere o caminho para o seu arquivo PDF
        link.download = '/public/curriculoo/Currículopessoalvaldeir.pdf'; // Nome do arquivo ao ser baixado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={Styles.container}>
            <input
                type="button"
                value="Baixar CV"
                onClick={handleDownload}
                className={Styles.button}
            />
        </div>
    );
};

export default DownloadButton;