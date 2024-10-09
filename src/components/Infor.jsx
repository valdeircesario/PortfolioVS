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
                <p>Desenvolvedor Web || Banco de Dados || Java</p>
                <div className={Styles.links}>
                    <a href="https://github.com/valdeircesario"><img src="https://cdn.icon-icons.com/icons2/673/PNG/512/github_icon-icons.com_60477.png" alt='git'/>GitHub</a>
                    <a href="https://linkedin.com/in/valdeircesario2023"><img src="https://cdn.icon-icons.com/icons2/306/PNG/512/Linkedin-Icon_34068.png" alt='linkedin'/>Linkedin</a>
                    <a href="https://wa.me/5561984080130"><img src="https://cdn.icon-icons.com/icons2/2858/PNG/512/whatsapp_logo_icon_181644.png"alt='whatsap' />Whatsapp</a>
                    <a href="mailto:valdeircesario11@hotmail.com"><img src="https://cdn.icon-icons.com/icons2/2858/PNG/512/email_mail_icon_181653.png" alt='email'/>E-mail</a>
                    <a href="https://replit.com/@Valdeir11"><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/replit_logo_icon_170784.png" alt='replit'/>Replit</a>

                </div>
            

               
            </div>
            
            
                
                
            
        </div>
        </>
    );
}
export default sobre