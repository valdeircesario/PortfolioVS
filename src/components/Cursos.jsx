
import Addcursos from './Addcursos'
import DownloadButton from './Baixacv'
import Cubooo from './CuboMagico'
import Styles from './Cursos.module.css'
import Faixa from './Faixa'
import Rodape from './Footer'
import Header from './Header'

function Cursos(){
    return(
        
 <>
 <Header/>
 <DownloadButton/>              
<div className={`${Styles.scroll} ${Styles.snap} ${Styles.card}`}>
    
    
    
    
    <div className={`${Styles.slide} ${Styles.red}`}>
        
        
        

        <marquee>Cursos que Me Proporcionaram Amplo Conhecimento:</marquee>
      
    
    
        <div className={Styles.component}>
            <Cubooo/>
            <Faixa/>
            
            
            <Addcursos 
                coverSrc="/cursos/Cert_Programador Web (1).jpg.jpg"
                imgSrc="/cursos/Cert_Programador Web (1).jpg"
                altText="Descrição da imagem 1"
                title="TECNOLOGIA DA INFORMAÇÃO"
                description="Com o curso de Tecnologia da Informação e Comunicação, adquiri conhecimentos sólidos em redes, segurança da informação e sistemas de comunicação, preparando-me para enfrentar os desafios do mundo digital com confiança e expertise."
            />
            
            
            <Addcursos 
                coverSrc="/cursos/Cert_administrador banco de dados.jpg"
                imgSrc="/cursos/Cert_administrador banco de dados.jpg"
                altText="Descrição da imagem 1"
                title="ADMINISTRADOR BANCO DE DADO"
                description="Por meio do curso de Administrador de Banco de Dados, adquiri habilidades especializadas em gerenciamento de dados, otimização de desempenho e segurança, capacitando-me para atuar de forma eficaz na gestão e manutenção de bases de dados em ambientes empresariais, com proficiência em linguagens como MySQL e PostgreSQL."
                    
            />
            
            
            <Addcursos 
                coverSrc="/cursos/Cert_Conceito Java.jpg"
                imgSrc="/cursos/Cert_Conceito Java.jpg"
                altText="CONSEITO JAVA"
                title="CONCEITO EM JAVA"
                description="Conhecimento em aplicações java, com orientação a objeto,desenvolvendo aplicações simples que requer poucas habilidades.capaz de desenvolver apps basicos, sendo capaz de desenvolver dos mais complexos com auxilio de orientação."
            />
            
            
            <Addcursos 
                coverSrc="/cursos/Cert_Manutenção Computadores.jpg"
                imgSrc="/cursos/Cert_Manutenção Computadores.jpg"
                altText="MANUTENÇÃO DE COMPUTADOR"
                title="MANUTENÇÃO DE COMPUTADOR"
                description="Desbravei o emocionante campo da manutenção de computadores por meio de um curso especializado, aprimorando minhas habilidades em reparos, diagnósticos e otimizações. Ainda que tenha alcançado um domínio sólido, meu compromisso com a excelência e a inovação me impulsiona a buscar constantemente aprimoramento nessa área dinâmica."
            />
        </div>    
    </div>
    <div  className={`${Styles.slide} ${Styles.blue}`}>
        
    <div className={Styles.component}>
            
        <Addcursos
            coverSrc="/cursos/Cert_Botcamp negocio do Futuro.jpg"
            imgSrc="/cursos/Cert_Botcamp negocio do Futuro.jpg"
            altText="BOTCAMP"
            title="BOTCAMP, NEGÒCIO DO FUTURO"
            description="O Botcamp Negócio do Futuro, promovido pelo Sebrae, me proporcionou conhecimentos valiosos sobre as tendências e inovações que moldarão o cenário empresarial, capacitando-me para identificar oportunidades, desenvolver estratégias e adaptar meu negócio para o ambiente em constante evolução."
        />
            
            
        <Addcursos
            coverSrc="/public/cursos/Cert_Power BI.jpg"
            imgSrc="/public/cursos/Cert_Power BI.jpg"
            altText="POWER BI"
            title="POWER BI"
            description="Com o curso de Análise de Dados utilizando o Power BI, adquiri habilidades sólidas em transformar dados em insights acionáveis, capacitando-me para criar visualizações impactantes, relatórios dinâmicos e painéis interativos que impulsionam a tomada de decisões estratégicas baseadas em dados."
        />
            
        <Addcursos
            coverSrc="/cursos/Cert_Equipe,Estrateja de suscesso.jpg"
            imgSrc="/cursos/Cert_Equipe,Estrateja de suscesso.jpg"
            altText="CURSO DE EQUIPE"
            title="ESTRATÈGIA DE SUCESSO"
            description="O curso Equipe e Estratégia de Sucesso, promovido pelo Sebrae, me equipou com ferramentas e técnicas essenciais para fortalecer equipes, planejar estratégias eficazes e alcançar o sucesso sustentável em um ambiente empresarial dinâmico."
        />
            
        <Addcursos
            coverSrc="/cursos/Cert_Google Drive.jpg"
            imgSrc="/cursos/Cert_Google Drive.jpg"
            altText="GOOGLE DRIVE"
            title="GOOGLE DRIVE"
            description="O curso de Google Drive me proporcionou o conhecimento necessário para explorar ao máximo os recursos desta plataforma, permitindo-me armazenar, compartilhar e colaborar de forma eficiente em um ambiente de trabalho digital."
        />
            
      </div>
    
    <div  className={`${Styles.slide} ${Styles.green}`}>
        <div className={Styles.component}>
            
        <Addcursos
            coverSrc="/cursos/Cert_Introdução Java.jpg"
            imgSrc="/cursos/Cert_Introdução Java.jpg"
            altText="PROGRAMAÇÃO JAVA"
            title="PROGRAMAÇÃO JAVA"
            description="O curso de Introdução à Programação em Java me forneceu uma base sólida em lógica de programação, estruturas de dados e princípios fundamentais da linguagem Java, preparando-me para desenvolver aplicativos e soluções utilizando essa poderosa linguagem de programação."
        />
            
        <Addcursos
            coverSrc="/cursos/Cert_Programador Web.jpg"
            imgSrc="/cursos/Cert_Programador Web.jpg"
            altText="PROFRAMAÇÃO WEB"
            title="PROGRAMAÇÃO WEB"
            description="Explorei o empolgante mundo do Front-End por meio de um curso, dominando HTML, CSS e JavaScript. Embora tenha adquirido habilidades sólidas, minha paixão por aprendizado contínuo me motiva a buscar ainda mais conhecimento nessa área em constante evolução."
        />
            
        <Addcursos
            coverSrc="/cursos/Cert_Preojeto Sitema WEB.jpg"
            imgSrc="/cursos/Cert_Preojeto Sitema WEB.jpg"
            altText="PROJETO SISTEMA WEB"
            title="PROJETO SISTEMA WEB"
            description="O curso de Projeto de Sistema Web me proporcionou conhecimentos abrangentes em desenvolvimento web, arquitetura de sistemas, segurança e usabilidade, preparando-me para conceber e implementar aplicações web eficientes, escaláveis e centradas no usuário."
        />
            
        <Addcursos
            coverSrc="/cursos/Cert_Google Drive.jpg"
            imgSrc="/cursos/Cert_Google Drive.jpg"
            altText="GOOGLE DRIVE"
            title="GOOGLE DRIVE"
            description="O curso de Google Drive me proporcionou o conhecimento necessário para explorar ao máximo os recursos desta plataforma, permitindo-me armazenar, compartilhar e colaborar de forma eficiente em um ambiente de trabalho digital."
        />
        </div>
            
            
        
    </div>
</div>
<Faixa/>
<Rodape/>
</div>
</>


    )
}
export default Cursos