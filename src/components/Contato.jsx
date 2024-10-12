import Cardes from "./Globo"
import Header from "./Header"
import Styles from "./Contatos.module.css"
import Formulario from "./Formulario"
import Rodape from "./Footer"
import Faixa from "./Faixa"
import DownloadButton from "./Baixacv"


function Contato(){
    return(
        <>
        <Header/>
        <DownloadButton/>
        <div className={Styles.globo}>
            <div><Cardes/></div>
            
            <div>
                <Formulario/>
                
                </div>
        </div>
        
    
        <Faixa/>
        <Rodape/>
        
        </>
    )
}

export default Contato