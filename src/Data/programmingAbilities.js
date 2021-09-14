import js from './ProgrammingAbilitiesIcons/javascript.png'
import react from './ProgrammingAbilitiesIcons/react.png'
import css from './ProgrammingAbilitiesIcons/css.png'
import html from './ProgrammingAbilitiesIcons/html.png'
import pt from './ProgrammingAbilitiesIcons/pt.png'
import en from './ProgrammingAbilitiesIcons/en.png'
import fr from './ProgrammingAbilitiesIcons/fr.png'
import esp from './ProgrammingAbilitiesIcons/esp.png'
import python from './ProgrammingAbilitiesIcons/python.png'
import r from './ProgrammingAbilitiesIcons/r.png'





const abilityGroups = [
  {name : 'Lingagens',
  description: 'Pretendo me especializar para tratamento de dados e Data Science no futuro. Atualmente essas são as linguagens de marcação e programação que sei:',
  abilities:[
    {
    name: 'Javascript',
    knowlege: '80%',
    linkName: 'js',
    icon: js,
    description: 'Minha linguagem de programação principal. Formou toda minha noção de lógica de programação. Com orientação a objetos ou classes. Utilização e criação de funções básicas e hight-order-functions, interpretação de código, uso de linter para melhor escrita, utilização de testes como Jest e node-assert, importação de bibliotecas, dentre outros.' 
  },

  {
    name: 'React',
    knowlege: '80%',
    linkName: 'react',
    icon: react,
    description: 'Noção de criação de single page applications com React Router Dom. Manipulação de estados locais e globais com state lifting, Redux (e composeWithDevTools), Thunk, e API context. Utilização de jest para testes e React Testing Library. Esse portifólio foi inteiramente criado com React.' 
  },

  {
    name: 'CSS',
    knowlege: '80%',
    linkName: 'css',
    icon: css,
    description: 'Noção de animações básicas e estilização em geral. O portifólio foi feito totalmente com CSS, sem nenhuma implementação de bibliotecas para estilos. Compatibilidade com dispositivos móveis, flexbox e mais. ' 
  },

  {
    name: 'HTML',
    knowlege: '80%',
    linkName: 'html',
    icon: html,
    description: 'Noção de HTML semântico para melhor acessibilidade de site. Noções de mobile first e metodologias ágeis também são muito bem vindas. ' 
  },

  {
    name: 'Python',
    knowlege: '20%',
    linkName: 'python',
    icon: python,
    description: 'Conhecimento básico de manipulamento de variáveis e geração de gráficos. Irei me aprofundar mais no futuro visando utilizar redes neurais e tratamento de dados eficiente, mesclando com JS.' 
  },

  {
    name: 'R',
    knowlege: '5%',
    linkName: 'r',
    icon: r,
    description: 'Conhecimento superficial sobre linguagem R. Mas pretendo obter maior aprofundamento para futuros tratamentos estatísticos de dados.' 
  },
  
  ]},

  {name : 'Línguas',
  description: 'Essas são línguas que aprendi a utilizar no decorrer da minha vida.',
  abilities:[
    {
    name: 'Português',
    knowlege: '100%',
    linkName: 'pt',
    icon: pt,
    description: 'Minha língua mãe. Conhecimentos de escrita, fala, leitura e escuta fluentes.' 
  },

  {
    name: 'Inglês',
    knowlege: '95%',
    linkName: 'en',
    icon: en,
    description: 'Minha língua mais avançada. Conhecimentos de escrita, fala, leitura e escuta avançada. Com diploma de FCE. Estudei pelo Number One.' 
  },

  {
    name: 'Francês',
    knowlege: '70%',
    linkName: 'fr',
    icon: fr,
    description: 'Conhecimentos intermediários de fala, escuta, escrita e leitura, com foco em fala e escuta. Estudei pelo Cacs-UFMG.' 
  },

  {
    name: 'Espanhol',
    knowlege: '40%',
    linkName: 'esp',
    icon: esp,
    description: 'Conhecimentos básicos de fala, escuta, escrita e leitura, com foco em escrita e leitura. Estudei pelo Promove Pampulha' 
  },
  
  ]},

]

export default abilityGroups