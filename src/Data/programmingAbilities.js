import js from './ProgrammingAbilitiesIcons/javascript.png';
import react from './ProgrammingAbilitiesIcons/react.png';
import css from './ProgrammingAbilitiesIcons/css.png';
import html from './ProgrammingAbilitiesIcons/html.png';
import pt from './ProgrammingAbilitiesIcons/pt.png';
import en from './ProgrammingAbilitiesIcons/en.png';
import fr from './ProgrammingAbilitiesIcons/fr.png';
import esp from './ProgrammingAbilitiesIcons/esp.png';
import python from './ProgrammingAbilitiesIcons/python.png';
import r from './ProgrammingAbilitiesIcons/r.png';
import github from './ProgrammingAbilitiesIcons/github.png';
import vscode from './ProgrammingAbilitiesIcons/vscode.png';
import trello from './ProgrammingAbilitiesIcons/trello.png';
import sql from './ProgrammingAbilitiesIcons/sql.png';
import mysqlworkbentch from './ProgrammingAbilitiesIcons/mysql-workbench.png'

const abilityGroups = [
  {
    name: 'Lingagens',
    description:
      'Pretendo me especializar para tratamento de dados e Data Science no futuro. Atualmente essas são as linguagens de marcação e programação que sei:',
    abilities: [
      {
        name: 'Javascript',
        knowlege: '80%',
        linkName: 'js',
        icon: js,
        description:
          'Minha linguagem de programação principal. Formou toda minha noção de lógica de programação. Com orientação a objetos ou classes. Utilização e criação de funções básicas e hight-order-functions, interpretação de código, uso de linter para melhor escrita, utilização de testes como Jest e node-assert, importação de bibliotecas, dentre outros.',
      },

      {
        name: 'React',
        knowlege: '80%',
        linkName: 'react',
        icon: react,
        description:
          'Noção de criação de single page applications com React Router Dom. Manipulação de estados locais e globais com state lifting, Redux (e composeWithDevTools), Thunk, e API context. Utilização de jest para testes e React Testing Library. Esse portifólio foi inteiramente criado com React.',
      },

      {
        name: 'CSS',
        knowlege: '80%',
        linkName: 'css',
        icon: css,
        description:
          'Noção de animações básicas e estilização em geral. O portifólio foi feito totalmente com CSS, sem nenhuma implementação de bibliotecas para estilos. Compatibilidade com dispositivos móveis, flexbox e mais. ',
      },

      {
        name: 'HTML',
        knowlege: '80%',
        linkName: 'html',
        icon: html,
        description:
          'Noção de HTML semântico para melhor acessibilidade de site. Noções de mobile first e metodologias ágeis também são muito bem vindas. ',
      },

      {
        name: 'SQL',
        knowlege: '70%',
        linkName: 'sql',
        icon: sql,
        description:
          'Linguagem de pesquisa declarativa, com conhecimentos para CRUD (Create, Read, Update, Delete), manipulação de tabela, filtragem de dados, Querries específicas e dinâmicas. Utilização de funções como JOINS, UNION, WHERE, Stored Functions, Stored Procedures, Triggers e muito mais .',
      },

      {
        name: 'Python',
        knowlege: '20%',
        linkName: 'python',
        icon: python,
        description:
          'Conhecimento básico de manipulamento de variáveis e geração de gráficos. Irei me aprofundar mais no futuro visando utilizar redes neurais e tratamento de dados eficiente, mesclando com JS.',
      },

      {
        name: 'R',
        knowlege: '5%',
        linkName: 'r',
        icon: r,
        description:
          'Conhecimento superficial sobre linguagem R. Mas pretendo obter maior aprofundamento para futuros tratamentos estatísticos de dados.',
      },
    ],
  },

  {
    name: 'Ferramentas',
    description:
      'Essas são as ferramentas relacionadas a programação nas quais possuo experiência:',
    abilities: [
      {
        name: 'Git e GitHub',
        knowlege: '90%',
        linkName: 'gitHub',
        icon: github,
        description:
          'Principal ferramenta de versionamento do mercado. Conhecimento de criação de branches, clones, forkings, merges, resets, etc. De forma individual ou em grupo, com resolução de conflitos de merge e utilização do espaço virtual do Github.',
      },
      {
        name: 'VS Code',
        knowlege: '95%',
        linkName: 'VScode',
        icon: vscode,
        description:
          'Ferramenta para escrita de códigos. Conhecimentos de instalação de extensões como stylelint, code runner, live server, e muitas outras, permitindo correção e formatação automática para máxima eficiencia e organização.',
      },
      {
        name: 'My SQL Workbench',
        knowlege: '70%',
        linkName: 'mySqlWorkbench',
        icon: mysqlworkbentch,
        description:
          'Interface gráfica para o SQL. Para manibulação de banco de dados relacionais. Conhecimentos de filtragem, manipulação, dumps para manipulação efetiva de arquivos SQL.',
      },
      {
        name: 'Trello',
        knowlege: '100%',
        linkName: 'trello',
        icon: trello,
        description:
          'Ferramenta de metodologias ágeis que é baseada no método Kamban. Permite criar cards e grupos de cards, clonar sistemas, e manipula-los para um trabalho em grupo de forma assíncrona muito mais organizado e fluido.',
      },
    ],
  },

  {
    name: 'Línguas',
    description:
      'Essas são línguas que aprendi a utilizar no decorrer da minha vida.',
    abilities: [
      {
        name: 'Português',
        knowlege: '100%',
        linkName: 'pt',
        icon: pt,
        description:
          'Minha língua mãe. Conhecimentos de escrita, fala, leitura e escuta fluentes.',
      },

      {
        name: 'Inglês',
        knowlege: '95%',
        linkName: 'en',
        icon: en,
        description:
          'Minha língua mais avançada. Conhecimentos de escrita, fala, leitura e escuta avançada. Com diploma de FCE. Estudei pelo Number One.',
      },

      {
        name: 'Francês',
        knowlege: '70%',
        linkName: 'fr',
        icon: fr,
        description:
          'Conhecimentos intermediários de fala, escuta, escrita e leitura, com foco em fala e escuta. Estudei pelo Cacs-UFMG.',
      },

      {
        name: 'Espanhol',
        knowlege: '40%',
        linkName: 'esp',
        icon: esp,
        description:
          'Conhecimentos básicos de fala, escuta, escrita e leitura, com foco em escrita e leitura. Estudei pelo Promove Pampulha',
      },
    ],
  },
];

export default abilityGroups;
