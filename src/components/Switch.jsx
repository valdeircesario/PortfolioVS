import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Switch = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Atualizar o tema no body sempre que o estado mudar
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <StyledWrapper>
      <label className="switch">
        <input
          type="checkbox"
          className="input__check"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
  left: 10px;
    font-size: 13px;
    position: relative;
    display: inline-block;
    width: 3.4em;
    height: 2em;
    transform-style: preserve-3d;
    perspective: 500px;
    animation: toggle__animation 3s infinite;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(242, 246, 247, 0.86);
    transition: .4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    left: 0.3em;
    bottom: 0.35em;
    transition: .4s;
    border-radius: 50%;
    background-color: rgb(65, 75, 75);
  }

  .input__check:checked + .slider {
    background-color: rgb(169, 170, 172);
  }

  .input__check:checked + .slider:before {
    transform: translateX(1.5em);
  }
     @keyframes toggle__animation {
    0%, 100% {
      transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);
    }

    50% {
      transform: translateY(0px) rotateX(15deg) rotateY(-20deg);
    }
  }`;


export default Switch;
