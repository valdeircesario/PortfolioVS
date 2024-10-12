/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */

import Butongit from './BotonGit';
import Cardpro from './Cardspro';
import Faixa from './Faixa';
import Rodape from './Footer';
import Terminal from './Terminal';
import Header from './Header';
import Progreso from './Progress';
import Styles from './Projetos.module.css';
import AnimatedTitle from './TituloAmimacao';
import { useEffect, useRef, useState } from 'react';
import Loader from './Pc';



function Projetos() {
  const projRefs = useRef([]); // Array de referências para múltiplos projetos
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projRefs.current.indexOf(entry.target);
            if (!visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]); // Adiciona o índice ao estado
            }
            observer.unobserve(entry.target); // Para não observar mais após estar visível
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
  imgSrc: "/public/assets/Captura de Tela (77).png",
  coverSrc: "/public/assets/Captura de Tela (76).png",
  altText: "Descrição do Sistema de Triagem de Pacientes",
  title: "Sistema de Triagem de Pacientes",
  description: `Desenvolvi um sistema web destinado a otimizar o agendamento em unidades de saúde. O sistema classifica pacientes por prioridade, garantindo atendimento rápido para os casos mais urgentes.`,
  highlights: [
    "Cadastro de pacientes e histórico completo.",
    "Algoritmo inteligente de priorização.",
    "Agendamento automático e personalizado.",
    "Notificações para pacientes e profissionais de saúde."
  ],
  technologies: "Angular, Quarkus, Java, PostgreSQL, Docker",
  results: [
    "Redução significativa no tempo de espera.",
    "Aumento na satisfação dos pacientes.",
    "Otimização das agendas médicas."
  ],
  skills: "Desenvolvimento Full-stack, design de interfaces, gerenciamento de banco de dados relacional, Docker, práticas de DevOps.",
  link: "https://github.com/valdeircesario/Sistema-de-triagem"
},

    {
      imgSrc: "/public/assets/Captura de Tela (79).png",
      coverSrc: "/public/assets/Captura de Tela (80).png",
      altText: "Descrição da imagem 1",
      title: "Azalleia: Loja Online de Moda Feminina",
      description: `Desenvolvi o site da Azalleia como um projeto pessoal para aprimorar minhas habilidades em React. Este e-commerce intuitivo oferece uma experiência de compra completa, permitindo que os usuários naveguem por um catálogo extenso, apliquem filtros personalizados e façam compras diretamente pelo WhatsApp.`,
      highlights: [
        "Catálogo interativo: Busca e filtragem de produtos por categoria, marca e preço.",
        "Detalhes do produto: Informações completas sobre cada item, com imagens de alta qualidade.",
        "Compra direta pelo WhatsApp: Direciona o usuário para atendimento personalizado.",
        "Responsividade: Design adaptável para desktop, tablets e smartphones."
      ],
      technologies: "React, JavaScript, CSS, Visual Studio Code",
      results: [
        "Experiência do usuário aprimorada com interface intuitiva e design moderno.",
        "Integração com WhatsApp para facilitar a comunicação e agilizar compras.",
        "Projeto desenvolvido do zero, desde a concepção até a implementação."
      ],
      link: "https://github.com/valdeircesario/Azalleia_Moda_Feminina"
    },
    





    {
    
      imgSrc: "/public/assets/Captura de Tela (85).png",
      coverSrc: "/public/assets/Captura de Tela (86).png",
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
      technologies: " Java, PostgreSQL, interface swuig",
      results: [
        "Economia de tempo: Encontre rapidamente os melhores produtos.",
        "Experiência personalizada: Adapte o app às suas necessidades.",
        "Maior assertividade: Faça compras mais seguras e conscientes.",
      ],
      skills: "PostgreSQL, design intuitivo",
      link: "https://github.com/valdeircesario/AppComparaTudo"
    },


    {
  imgSrc: "/public/assets/portfolio01.jfif",
  coverSrc: "/public/assets/portfolio02.jfif",
  altText: "Descrição da imagem 1",
  title: "Primeiro Portfólio com HTML e CSS",
  description: `Desenvolvi meu portfólio pessoal utilizando HTML e CSS, demonstrando habilidades em criar designs modernos e responsivos. O projeto foi construído com o uso de Grid e Flexbox, garantindo layouts flexíveis que se adaptam a diferentes dispositivos. Animações personalizadas em CSS3 foram implementadas para enriquecer a experiência visual e torná-la mais interativa.`,
  highlights: [
    "Design moderno e responsivo.",
    "Uso de Grid e Flexbox para layouts flexíveis.",
    "Animações personalizadas com CSS3.",
    "Foco em acessibilidade, garantindo que o conteúdo seja acessível a todos os usuários."
  ],
  technologies: "HTML, CSS, JavaScript, Grid, Flexbox, CSS3",
  results: [
    "Criação de designs modernos e responsivos.",
    "Experiência enriquecida através de animações interativas.",
    "Desenvolvimento focado em acessibilidade e usabilidade."
  ],
  link: "https://github.com/valdeircesario/MeuPortfolio-html"
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
    className={`${Styles.proj01} ${index === 0 || visibleItems.includes(index) ? Styles.visible : ""}`} // Verifica se o índice é 0
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
            <p>{project.technologies}</p>

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
          </div>
          
        
        </div>
        <Faixa/>
        </>
        
      ))}

      
      <Progreso />
      <hr />
      <Rodape />
    </div>
  );
}

export default Projetos;