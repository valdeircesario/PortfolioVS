/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Input from "./Input"; 
import Styles from "./Formulario.module.css";
import emailjs from 'emailjs-com'; 

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "" 
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send('service_ez3wgiv', 'template_3kn6b7g', formData, 'Sa_m3nddVb0ZQHxMQ')
      .then((response) => {
        alert('Mensagem enviada com sucesso!');
        
        
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          mensagem: ""
        });
      }, (err) => {
      
        alert('Erro ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
    <div className={Styles.formulario}>
    <form className={Styles.form} onSubmit={handleSubmit}>
      <h2>Envie Seu Feedback</h2>
      <div className={Styles.container}>
        <div className={Styles.inputContainer}>
          <input
            className={Styles.input}
            type="text"
            name="nome"
            required
            onChange={handleChange}
            value={formData.nome}
            id="nome"
          />
          <label className={Styles.label} htmlFor="nome">Nome</label>
        </div>

        <div className={Styles.inputContainer}>
          <input
            className={Styles.input}
            type="tel"
            name="telefone"
            required
            onChange={handleChange}
            value={formData.telefone}
            id="telefone"
          />
          <label className={Styles.label} htmlFor="telefone">Telefone</label>
        </div>

        <div className={Styles.inputContainer}>
          <input
            className={Styles.input}
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
            id="email"
          />
          <label className={Styles.label} htmlFor="email">E-mail</label>
        </div>

        <div className={Styles.inputContainer}>
          <textarea
            className={Styles.inputmensagem}
            name="mensagem"
            required
            onChange={handleChange}
            value={formData.mensagem}
            id="mensagem"
          />
          <label className={Styles.label} htmlFor="mensagem">Mensagem</label>
        </div>

        <button type="submit">Enviar</button>
      </div>
    </form>
    </div>
  );
};

export default Formulario;