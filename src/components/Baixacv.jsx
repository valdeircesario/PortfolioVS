/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Baixacv.module.css'; // Importando o CSS

const DownloadButton = () => {
    const handleDownload = () => {
        window.open('https://ifgoias-my.sharepoint.com/:b:/g/personal/valdeir_cesario_academico_ifg_edu_br/EZ_coAebAHBBrWRdiQ5hSFABzpRv3wWWqRyG_gBhaA4xmA?e=QtL2oN', '_blank');
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
