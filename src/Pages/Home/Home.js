import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import fotoMinha from './HomeImages/JoaoELo.png'
import keyboard from './HomeImages/keyboard-icon.png'


class Home extends React.Component{
  render(){
    return(
    <main className='home'>
      <section className='text-block'>
        <div className='text-container'>
          <h1 className='home title'>Saudações!</h1>
          <p>Olá, Eu sou João Victor Cristino França, esse é meu Portifólio Web. Sinta-se a vontade para explorar por sua conta os projetos que já realizei.
            Que tal jogar um belo Jãogeons and Dragons? Isso foi um convite. Atualmente não há compatibilidade para smartPhones, logo para uma experiência completa recomendo o uso de um computador</p>
          <p>Você está na Home, a barra superior possui a navegação do site, com caminhos para meu portifólio, minhas habilidades, história, etc.
              No rodapé da página estão os caminhos para meu Linkedin e GitHub. Como essa é uma singlepage application, caso você saia de Home e atualize a página (F5)
              ,seu navegador não irá conseguir te redirecionar. Se isso ocorrer, basta apagar o caminho do link após a '/'. Seja bem vindo!</p>
          <p>Atualmente estou fazendo um curso de Web Development na Trybe. 
            O curso foca em Javascript, HTML e CSS, com blocos de Fundamentos, Frontend, Backend e Ciência da Computação.
            Estou no bloco de FrontEnd, atualmente utilizando o React, e possuo conhecimento básico da linguagem Python.
            Prezo ainda por Softskills, metodologias ágeis, aplicações com acessibilidade, Mobile first, dentre outros. </p>
        </div>
        <img src={keyboard} alt="Icone de teclado" className='keyboard'/>
      </section>

     
      <section className='text-block'>
        <img src={fotoMinha} alt="Minha foto com Lorena" className='minha-foto' />
        <div className='text-container'>
          <h1 className='home title'>Resumo</h1>
          <p>
            Moro em Belo Horizonte, Minas Gerais, e sou um aluno de Engenharia Metalúrgica e de Materiais da Universidade Federal de Minas Gerais.
            Faço ainda o curso da Trybe de Web Development. Em programação atuo em Javascript e React. Sou fluente em Inglês, intermediário em Francês e básico em Espanhol.
            Para engenharia possuo conhecimento avançado no pacote Office, com foco em Excel, conhecimento de simulação fluidodinâmica pelo Ansys-CFX, e de conformação mecânica com elementos finitos pelo Abaqus.
            Tenho experiencia laboratorial, de análise química instrumental e com eletrorrefino de cobre. 
          </p>
          </div>
      </section>
         
      
      
    </main>
    )
  }
}



export default Home;