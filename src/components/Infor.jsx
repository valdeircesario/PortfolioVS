import Card from './card';
import Styles from './Infor.module.css'

function sobre(){
    return(
        <>
        <div className={Styles.card}>
                    <Card/>
                </div>
       <div className={Styles.sobre}>
            <div className={Styles.foto}>
                
                <h1>Valdeir C Silva</h1>
                <p>Developer Web || Banco de Dado || Java</p>
                <div className={Styles.links}>
                    <a href="https://github.com/valdeircesario"><img src="/img/icons8-github-48.png" alt='git'/> GitHub</a>
                    <a href="https://linkedin.com/in/valdeircesario2023"><img src="/img/icons8-linkedin-48.png" alt='linkedin'/>Linkedin</a>
                    <a href="https://wa.me/5561984080130"><img src="/img/icons8-whatsapp-48.png"alt='whatsap' />Whatsapp</a>
                    <a href="mailto:valdeircesario11@hotmail.com" > <img src="/img/icons8-enviar.gif"  alt='email'/>  E-mail </a>
                    <a href="https://replit.com/@Valdeir11"><img src="/img/icons8-replit-logo-48.png" alt='replit'/>  Replit </a>

                </div>
            

               
            </div>
            
            
                
                
            
        </div>
        </>
    );
}
export default sobre