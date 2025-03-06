/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Styles from './Sobre.module.css';
import Faixa from './Faixa';
import Progreso from './Progress';

function Sobremim() {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(Styles.visible); // Adiciona a classe 'visible'
          observer.unobserve(entry.target); // Para observar após a animação
        }
      });
    }, options);

    paragraphsRef.current.forEach((paragraph) => {
      if (paragraph) {
        observer.observe(paragraph); // Observa cada parágrafo
      }
    });

    return () => {
      paragraphsRef.current.forEach((paragraph) => {
        if (paragraph) {
          observer.unobserve(paragraph); // Limpa o observador
        }
      });
    };
  }, []);

  return (
    <div className={Styles.sobre}>
      <div className={Styles.text}>
        <h1>👤Sobre Mim</h1>
        <h2>💻 Cursando Bacharelado em Sistema da Informação</h2>
      </div>

      <div className={Styles.ifg}>
        <ul>
          <li>🎓Instituto Federal de Educação, Ciência e Tecnologia de Goiás</li>
          <li>Campus de Luziania</li>
          <li>6° Semestre</li>
        </ul>
        <a href="https://www.ifg.edu.br/luziania"> 🔗 https://www.ifg.edu.br/luziania</a>
      </div>
      <Faixa/>

    

      <p ref={(el) => (paragraphsRef.current[0] = el)} className={Styles.P1}>

Sou um profissional de TI com uma sólida formação no Instituto Federal, onde desenvolvi habilidades em lógica de programação, gerenciamento de projetos e metodologias ágeis, como Scrum e Kanban. Minha especialização abrange Java, SQL, desenvolvimento web e estrutura de dados.

</p>
<p ref={(el) => (paragraphsRef.current[1] = el)} className={Styles.P2}>
Atualmente, estou iniciando minha carreira como estagiário na POUPEX, atuando no desenvolvimento e realização de testes de software, incluindo testes manuais e automáticos. Estou dedicando meus conhecimentos para contribuir com a qualidade dos sistemas, desempenhando minhas funções com resiliência e trabalhando em estreita colaboração com a equipe, sempre buscando a melhoria contínua e o sucesso coletivo.  

</p>

<p ref={(el) => (paragraphsRef.current[2] = el)} className={Styles.P3}>

Tenho experiência prática em projetos que aplicam meus conhecimentos e busco sempre aprimorar minhas habilidades, participando de cursos presenciais e online, incluindo temas de soft skills, como trabalho em equipe.

</p>

<p ref={(el) => (paragraphsRef.current[3] = el)} className={Styles.P4}>

Sou proficiente em ferramentas como Visual Studio Code, IntelliJ, GitHub e bancos de dados, especialmente PostgreSQL. Minhas habilidades técnicas incluem Java, JavaScript, PHP, HTML, CSS, React, Angular, Quarkus e Bootstrap, respaldadas por certificados que atestam minha capacitação.

</p>

<p ref={(el) => (paragraphsRef.current[4] = el)} className={Styles.P5}>

Meu portfólio apresenta meus projetos, experiências e contatos, refletindo meu compromisso em contribuir para o sucesso da equipe e crescer profissionalmente. Estou pronto para novas oportunidades onde possa aplicar meu conhecimento e fazer a diferença.

</p>

      <Faixa/>
      <Progreso/>
      

      <div className={Styles.icons}>
        <h2>Aqui Estão Algumas linguagens e ferramentas que mais uso e tenho conhecimentos</h2>
        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
        <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
        <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
        <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
        <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" />
        <img src="https://img.shields.io/badge/VSCode-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
        <img src="https://img.shields.io/badge/Quarkus-%23000000.svg?style=for-the-badge&logo=quarkus&logoColor=white" />
        <img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
        
        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
        <img src="https://img.shields.io/badge/IntelliJ-%23000000.svg?style=for-the-badge&logo=intellijidea&logoColor=white" alt="IntelliJ" />
        <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" />
        <img src="https://img.shields.io/badge/pgAdmin-%233B4D8D.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="pgAdmin" />
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
      </div>
    </div>
  );
}

export default Sobremim;