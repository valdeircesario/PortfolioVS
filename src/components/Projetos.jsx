/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */

import Butongit from './BotonGit';
import Cardpro from './Cardspro';
import Faixa from './Faixa';
import Rodape from './Footer';
import Terminal from './Terminal';
import Header from './Header';
import Styles from './Projetos.module.css';
import AnimatedTitle from './TituloAmimacao';
import { useEffect, useRef, useState } from 'react';
import Loader from './Pc';



function Projetos() {
  const projRefs = useRef([]); 
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projRefs.current.indexOf(entry.target);
            if (!visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]); 
            }
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 }
    );

    projRefs.current.forEach((proj) => {
      if (proj) {
        observer.observe(proj);
      }
    });

    return () => {
      projRefs.current.forEach((proj) => {
        if (proj) {
          observer.unobserve(proj);
        }
      });
    };
  }, [visibleItems]);

  const projects = [


    {
  imgSrc: "/assets/Captura de Tela (77).png",
  coverSrc: "/assets/Captura de Tela (76).png",
  altText: "Descrição do Sistema de Triagem de Pacientes",
  title: "Sistema de Triagem de Pacientes",
  description: `Desenvolvi um sistema web destinado a otimizar o agendamento em unidades de saúde. O sistema classifica pacientes por prioridade, garantindo atendimento rápido para os casos mais urgentes.`,
  highlights: [
    "Cadastro de pacientes e histórico completo.",
    "Algoritmo inteligente de priorização.",
    "Agendamento automático e personalizado.",
    "Notificações para pacientes e profissionais de saúde."
  ],
   technologies: [
      { icon: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
      { icon: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
      { icon: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
      { icon: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" },
      { icon: "https://img.shields.io/badge/Quarkus-%23000000.svg?style=for-the-badge&logo=quarkus&logoColor=white" },
      { icon: "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" },
      { icon: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
      { icon: "https://img.shields.io/badge/IntelliJ-%23000000.svg?style=for-the-badge&logo=intellijidea&logoColor=white" },
      { icon: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
      { icon:"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"}
    ],
  results: [
    "Redução significativa no tempo de espera.",
    "Aumento na satisfação dos pacientes.",
    "Otimização das agendas médicas."
  ],
  skills: "Desenvolvimento Full-stack, design de interfaces, gerenciamento de banco de dados relacional, Docker, práticas de DevOps.",
  link: "https://github.com/valdeircesario/Sistema-de-triagem"
},

    {
      imgSrc: "/assets/Captura de Tela (79).png",
      coverSrc: "/assets/Captura de Tela (80).png",
      altText: "Descrição da imagem 1",
      title: "Azalleia: Loja Online de Moda Feminina",
      description: `Desenvolvi o site da Azalleia como um projeto pessoal para aprimorar minhas habilidades em React. Este e-commerce intuitivo oferece uma experiência de compra completa, permitindo que os usuários naveguem por um catálogo extenso, apliquem filtros personalizados e façam compras diretamente pelo WhatsApp.`,
      highlights: [
        "Catálogo interativo: Busca e filtragem de produtos por categoria, marca e preço.",
        "Detalhes do produto: Informações completas sobre cada item, com imagens de alta qualidade.",
        "Compra direta pelo WhatsApp: Direciona o usuário para atendimento personalizado.",
        "Responsividade: Design adaptável para desktop, tablets e smartphones."
      ],
      technologies: [
      { icon: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
      { icon: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
      { icon: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB " },
      { icon: "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7 " },
      { icon: " https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
      { icon: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white " },
      { icon: "https://img.shields.io/badge/VSCode-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white " },
      { icon:"https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"}
    ],
      
      results: [
        "Experiência do usuário aprimorada com interface intuitiva e design moderno.",
        "Integração com WhatsApp para facilitar a comunicação e agilizar compras.",
        "Projeto desenvolvido do zero, desde a concepção até a implementação."
        
      ],
  
      link: "https://github.com/valdeircesario/Azalleia_Moda_Feminina",
      links:"https://azalleiamodafeminina.netlify.app/",
      
      
    },
    





    {
    
      imgSrc: "/assets/Captura de Tela (85).png",
      coverSrc: "/assets/Captura de Tela (86).png",
      altText: "Descrição da imagem 2",
      title: "AppComparaTudo: Ferramenta para Decisões de Compra Inteligentes",
      description: `O AppComparaTudo é um aplicativo inovador que simplifica o processo de tomada 
de decisões de compra, permitindo aos usuários comparar produtos e serviços com base 
em critérios personalizados, garantindo a escolha mais adequada para suas necessidades.`,
      highlights: [
        "Personalização: Defina os critérios mais importantes e atribua notas de peso a cada um.",
        "Algoritmo de priorização inteligente.",
        "Comparação: Compare milhares de produtos e veja os resultados de forma clara e objetiva.",
        "Decisão informada: Economize tempo e dinheiro, tomando decisões de compra mais inteligentes."
      ],
      technologies: [
      
      { icon: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
      { icon: "https://img.shields.io/badge/Swing-6DB33F?style=for-the-badge&logo=java&logoColor=white" },
      { icon: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" },
      { icon: "https://img.shields.io/badge/pgAdmin-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" },
      { icon: "https://img.shields.io/badge/IntelliJ-%23000000.svg?style=for-the-badge&logo=intellijidea&logoColor=white" },
      { icon: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" }
    ],
      
      results: [
        "Economia de tempo: Encontre rapidamente os melhores produtos.",
        "Experiência personalizada: Adapte o app às suas necessidades.",
        "Maior assertividade: Faça compras mais seguras e conscientes.",
      ],
      skills: "PostgreSQL, design intuitivo",
      link: "https://github.com/valdeircesario/AppComparaTudo"
      
    },


    {
  imgSrc: "/assets/portfolio01.jfif",
  coverSrc: "/assets/portfolio02.jfif",
  altText: "Descrição da imagem 1",
  title: "Primeiro Portfólio com HTML e CSS",
  description: `Desenvolvi meu portfólio pessoal utilizando HTML e CSS, demonstrando habilidades em criar designs modernos e responsivos. O projeto foi construído com o uso de Grid e Flexbox, garantindo layouts flexíveis que se adaptam a diferentes dispositivos. Animações personalizadas em CSS3 foram implementadas para enriquecer a experiência visual e torná-la mais interativa.`,
  highlights: [
    "Design moderno e responsivo.",
    "Uso de Grid e Flexbox para layouts flexíveis.",
    "Animações personalizadas com CSS3.",
    "Foco em acessibilidade, garantindo que o conteúdo seja acessível a todos os usuários."
  ],
  technologies: [
      
      { icon: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
      { icon: " https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
      { icon: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white " },
      { icon: "https://img.shields.io/badge/VSCode-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white " },
      { icon:"https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"}
    ],
  
  results: [
    "Criação de designs modernos e responsivos.",
    "Experiência enriquecida através de animações interativas.",
    "Desenvolvimento focado em acessibilidade e usabilidade."
  ],
  link: "https://github.com/valdeircesario/MeuPortfolio-html",
  links:"https://meu-portfolio-html.vercel.app/"
}
   
  ];

  return (
    <div>
       
      <Header />
      
      
      <div className={Styles.titulo}>
        
        
        <div className={Styles.pc}>
             <Loader/>
          
        </div>
        <div className={Styles.aminent}>
          <AnimatedTitle text="Nesta Página Você Encontrar Todos os Meus Projetos Relevantes!" />
        </div>
        <div className={Styles.terminal}>
          <Terminal />
        </div>
      </div>

      <Faixa />

      {projects.map((project, index) => (
        <>
        <div
    key={index}
    className={`${Styles.proj01} ${index === 0 || visibleItems.includes(index) ? Styles.visible : ""}`}
    ref={(el) => (projRefs.current[index] = el)}
  >
          <div className={Styles.element}>
            <Cardpro 
              imgSrc={project.imgSrc} 
              coverSrc={project.coverSrc}
              altText={project.altText} 
            />
            <Butongit link={project.link} />
          </div>
          <div className={Styles.text}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            

            <strong>Destaques:</strong>
            <ul>
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>

            <strong>Tecnologias:</strong>
            {project.technologies && (
  <div className={Styles.icon}>
    {project.technologies.map((tech, idx) => (
      <img key={idx} src={tech.icon} />
    ))}
  </div>
)}

            
              

            <strong>Resultados:</strong>
            <ul>
              {project.results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
            
            

            {project.skills && (
              <>
                <strong>Habilidades Desenvolvidas:</strong>
                <p>{project.skills}</p> 
              </>
            )}
            {project.links && project.links.length > 0 && (
          <a href={project.links} target="_blank" rel="noopener noreferrer">
            Acesse aqui meu projeto online
          </a>
        )}
          </div>
          
        
        </div>
        
        </>
        
      ))}

      
      
      
      <Rodape />
    </div>
  );
}

export default Projetos;