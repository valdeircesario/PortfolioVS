/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Progreso = () => {
  const progresoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (progresoRef.current) {
      observer.observe(progresoRef.current);
    }

    return () => {
      if (progresoRef.current) {
        observer.unobserve(progresoRef.current);
      }
    };
  }, []);
  return (
    <StyledWrapper>
      <div className={`container ${isVisible ? "visible" : ""}`} ref={progresoRef}>
        <h2>Habilidades em Linguagens de Programação e Frameworks</h2>
        <div className="skill-box">
          <span className="title">HTML</span>

          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">CSS</span>

          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">JavaScript</span>

          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Java</span>

          <div className="skill-bar">
            <span className="skill-per nodejs">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>
        
        <div className="skill-box">
          <span className="title">React</span>
          
          <div className="skill-bar">
            <span className="skill-per react">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Angular</span>
          
          <div className="skill-bar">
            <span className="skill-per angular">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Postgresql</span>
          
          <div className="skill-bar">
            <span className="skill-per postgres">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Quarkus</span>
          
          <div className="skill-bar">
            <span className="skill-per quarkus">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
      </div>
      <div className={`container ${isVisible ? "visible" : ""}`} ref={progresoRef}>
        <h2>SOFT SKILLS E METODOLOGIAS.</h2>
        <div className="skill-box">
          <span className="title">Trabalho em Equipe:</span>

          <div className="skill-bar">
            <span className="skill-per equipe">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Empatia:</span>

          <div className="skill-bar">
            <span className="skill-per Empatia">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>


        <div className="skill-box">
          <span className="title">Comunicação Eficaz:</span>

          <div className="skill-bar">
            <span className="skill-per eficaz">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>

      


        <div className="skill-box">
          <span className="title">Adaptabilidade:</span>

          <div className="skill-bar">
            <span className="skill-per Adaptabilidade">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Resolução de Problemas:</span>

          <div className="skill-bar">
            <span className="skill-per Problemas">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Agile:</span>

          <div className="skill-bar">
            <span className="skill-per Agile">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Scrum:</span>

          <div className="skill-bar">
            <span className="skill-per Scrum">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Kanban:</span>

          <div className="skill-bar">
            <span className="skill-per Kanban">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>



        </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
h2{
text-align: center;
font-size:1.2rem;
color:#d0cffc;
margin-bottom: 40px;
}
.container {
    margin: 45px 20%;
    width: 60%;
    box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.9);
    padding: 10px 20px;
    border-radius: 10px;
    user-select: none;
    transform: translateY(100%); /* Começa fora da tela */
    opacity: 0; /* Começa invisível */
    transition: transform 2s ease, opacity 2s ease; /* Transição lenta */
  }

  .container.visible {
    transform: translateY(0); /* Move para a posição original */
    opacity: 1; /* Torna visível */
  }
  .container:hover{
  transform: scale(1.05);
  }

.container .skill-box {
  width: 100%;
  margin: 25px 0;
}

.skill-box .title {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #10eef5;
}

.skill-box .skill-bar {
  height: 8px;
  width: 100%;
  border-radius: 6px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.1);
}

.skill-bar .skill-per {
  position: relative;
  display: block;
  height: 100%;
  width: 90%;
  border-radius: 6px;
  background: #d0cffc;
  animation: progress 0.4s ease-in-out forwards;
  opacity: 0;
}

.skill-per.html {
  /*progreso de las diferentes lenguajes*/
  width: 90%;
  animation-delay: 0.1s;
}

.skill-per.css {
  /*progreso de las diferentes lenguajes*/
  width: 60%;
  animation-delay: 0.1s;
}

.skill-per.javascript {
  /*progreso de las diferentes lenguajes*/
  width: 40%;
  animation-delay: 0.2s;
}

.skill-per.nodejs {
  /*progreso de las diferentes lenguajes*/
  width: 50%;
  animation-delay: 0.3s;
}

.skill-per.react {
  /*progreso de las diferentes lenguajes*/
  width: 40%;
  animation-delay: 0.3s;
}

.skill-per.angular {
  /*progreso de las diferentes lenguajes*/
  width: 40%;
  animation-delay: 0.3s;
}

.skill-per.postgres {
  /*progreso de las diferentes lenguajes*/
  width: 60%;
  animation-delay: 0.3s;
}

.skill-per.quarkus {
  /*progreso de las diferentes lenguajes*/
  width: 40%;
  animation-delay: 0.3s;
}

.skill-per.equipe {
  /*progreso de las diferentes lenguajes*/
  width: 90%;
  animation-delay: 0.3s;
}
.skill-per.Empatia {
  /*progreso de las diferentes lenguajes*/
  width: 90%;
  animation-delay: 0.3s;
}

.skill-per.eficaz {
  /*progreso de las diferentes lenguajes*/
  width: 95%;
  animation-delay: 0.3s;
}

.skill-per.Adaptabilidade {
  /*progreso de las diferentes lenguajes*/
  width: 90%;
  animation-delay: 0.3s;
}

.skill-per.Problemas {
  /*progreso de las diferentes lenguajes*/
  width: 90%;
  animation-delay: 0.3s;
}

.skill-per.Agile {
  /*progreso de las diferentes lenguajes*/
  width: 50%;
  animation-delay: 0.3s;
}

.skill-per.Scrum {
  /*progreso de las diferentes lenguajes*/
  width: 40%;
  animation-delay: 0.3s;
}
  .skill-per.Kanban {
  /*progreso de las diferentes lenguajes*/
  width: 80%;
  animation-delay: 0.3s;
}




@keyframes progress {
  0% {
    width: 0;
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.skill-per .tooltip {
  position: absolute;
  right: -14px;
  top: -28px;
  font-size: 9px;
  font-weight: 500;
  color: #d0cffc;
  padding: 2px 6px;
  border-radius: 3px;
  background: #000000;

  z-index: 1;
}

.tooltip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  height: 10px;
  width: 10px;
  z-index: -1;
  background: #000000;
  transform: translateX(-50%) rotate(45deg);
}

`;

export default Progreso;
