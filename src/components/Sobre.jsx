/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Styles from './Sobre.module.css';
import Faixa from './Faixa';

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
        <h2>Sobre Mim</h2>
        <h3>Cursando Bacharelado em Sistema da Informação</h3>
      </div>

      <div className={Styles.ifg}>
        <ul>
          <li>Instituto Federal de Educação, Ciência e Tecnologia de Goiás</li>
          <li>Campus de Luziania</li>
          <li>6° Semestre</li>
        </ul>
        <a href="https://www.ifg.edu.br/luziania">https://www.ifg.edu.br/luziania</a>
      </div>
      <Faixa/>

    

      <p ref={(el) => (paragraphsRef.current[0] = el)} className={Styles.P1}>
        Durante minha trajetória de estudos no Instituto Federal, adquiri conhecimentos em diversas áreas, como lógica de programação, gerenciamento de projetos, levantamento e análise de requisitos, administração empresarial e metodologias ágeis, como Scrum e Kanban. Também me especializei em estrutura de dados, linguagem de programação Java, linguagem de manipulação de dados SQL e desenvolvimento web, entre outros.
      </p>

      <p ref={(el) => (paragraphsRef.current[1] = el)} className={Styles.P2}>
        Ao longo da minha jornada na área de tecnologia, tive a oportunidade de desenvolver projetos e trabalhos que aplicaram os conhecimentos adquiridos. Além disso, busquei constantemente aprimorar minhas habilidades, participando de cursos presenciais e online, incluindo na área de soft skills, como trabalho em equipe.
      </p>

      <p ref={(el) => (paragraphsRef.current[2] = el)} className={Styles.P3}>
        Tenho experiência no uso de diversas ferramentas e tecnologias, como Visual Studio Code, IntelliJ, PgAdmin, GitHub, Java, JavaScript, PHP, HTML, CSS, React, Angular , Quarkus e Bootstrap. Também possuo conhecimento em bancos de dados, especialmente PostgreSQL. Ao longo da minha trajetória, adquiri certificados que comprovam minha capacitação e qualificação.
      </p>

      <p ref={(el) => (paragraphsRef.current[3] = el)} className={Styles.P3}>
        Meu portfólio contém informações sobre meus projetos, experiências, cursos concluídos e meus contatos, permitindo que você conheça melhor meu trabalho. Estou em busca de uma oportunidade onde eu possa contribuir em equipe, aplicar meus conhecimentos e continuar aprendendo. Meu objetivo no mercado de trabalho é crescer profissionalmente e ajudar minha equipe a atingir seus objetivos.
      </p>

      <Faixa/>

      <div className={Styles.icons}>
        <h3>Aqui Estão Algumas linguagens e ferramentas que mais uso e tenho conhecimentos</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" alt="Icone de Ferramenta 1" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_wordmark_logo_icon_146576.png" alt="Logo CSS" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png" alt="Logo Java" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png" alt="Logo JavaScript" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt="Logo React" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_original_wordmark_logo_icon_146412.png" alt="Logo Node.js" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/github_original_wordmark_logo_icon_146506.png" alt="Logo GitHub" />
        <img src="https://cdn.icon-icons.com/icons2/9/PNG/256/sql_racer_gamedatabase_sql_1526.png" alt="Logo SQL" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png" alt="Logo PostgreSQL" />
        <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="Logo Visual Studio Code" />
        <img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/intellij_macos_bigsur_icon_190061.png" alt="Logo IntelliJ" />
        <img src="https://th.bing.com/th/id/OIP.0ZHNxzjEbkekjFZaVOF2IwHaHa?rs=1&pid=ImgDetMain" alt="Logo Angular" />
      </div>
    </div>
  );
}

export default Sobremim;