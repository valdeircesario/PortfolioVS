import { useState, useEffect } from 'react';
import Styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade do header

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para controlar o scroll
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false); // Rolando para baixo
      } else {
        setIsVisible(true); // Rolando para cima
      }
      lastScrollTop = scrollTop; // Atualiza a posição de rolagem anterior
    };

    window.addEventListener('scroll', handleScroll); // Adiciona o listener de scroll

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove o listener ao desmontar o componente
    };
  }, []);

  return (
    <header className={`${Styles.header} ${isVisible ? '' : Styles.hidden}`}>
      <div className={Styles.logoContainer}>
        <Link className={Styles.siteName} to="/">Portfolio</Link>
      </div>
      <nav className={`${Styles.navLinks} ${isOpen ? Styles.open : ''}`}>
        <Link className={Styles.link} to="/">Home</Link>
        <Link className={Styles.link} to="/src/components/SobreMim.jsx">Sobre</Link>
        <Link className={Styles.link} to="/src/components/Projetos.jsx">Projetos</Link>
        <Link className={Styles.link} to="/src/components/Cursos.jsx">Cursos</Link>
        <Link className={Styles.link} to="/src/components/Contato.jsx">Contato</Link>
      </nav>
      <div className={Styles.hamburger} onClick={toggleMenu}>
        <div className={Styles.line}>{}</div>
        <div className={Styles.line}>{}</div>
        <div className={Styles.line}>{}</div>
      </div>
    </header>
  );
};

export default Header;