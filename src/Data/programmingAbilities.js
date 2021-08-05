import js from './programingAbilitiesIcons/javascript.png'
import react from './programingAbilitiesIcons/react.png'
import css from './programingAbilitiesIcons/css.png'
import html from './programingAbilitiesIcons/html.png'
import pt from './programingAbilitiesIcons/pt.png'
import en from './programingAbilitiesIcons/en.png'
import fr from './programingAbilitiesIcons/fr.png'
import esp from './programingAbilitiesIcons/esp.png'





const abilityGroups = [
  {name : 'Lingagens',
  description: 'Essas são as linguagens de marcação e programação que sei',
  abilities:[
    {
    name: 'Javascript',
    knowlege: '80%',
    linkName: 'js',
    icon: js,
    description: 'Minha linguagem de programação principal. Formou toda minha noção de lógica de programação. Com orientação a objetos ou classes. Utilização e criação de funções básicas e hight-order-functions, interpretação de código, uso de linter para melhor escrita, utilização de testes como Jest e node-assert, importação de bibliotecas, dentre outros' 
  },

  {
    name: 'React',
    knowlege: '70%',
    linkName: 'react',
    icon: react,
    description: 'Ainda estou me aprimorando em react, mas estou melhor a cada dia. Esse portifólio serve de exemplo, visto que foi inteiramente criado com o React' 
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
    description: 'Noção de HTML semântico para melhor acessibilidade de site. Noções de mobile first e metodologias ágeis também são muito bem vindas ' 
  },
  
  ]},

  {name : 'Linguas',
  description: 'Essas são línguas que aprendi a utilizar no decorrer da minha vida.',
  abilities:[
    {
    name: 'Portugues',
    knowlege: '100%',
    linkName: 'pt',
    icon: pt,
    description: 'Minha língua mãe. Conhecimentos de escrita, fala, leitura e escuta fluentes' 
  },

  {
    name: 'Ingles',
    knowlege: '95%',
    linkName: 'en',
    icon: en,
    description: 'Minha língua mais avançada. Conhecimentos de escrita, fala, leitura e escuta avançada. Com diploma de FCE. Estudei pelo Number One' 
  },

  {
    name: 'Frances',
    knowlege: '70%',
    linkName: 'fr',
    icon: fr,
    description: 'Conhecimentos intermediários de fala, escuta, escrita e leitura, com foco em fala e escuta. Estudei pelo Cacs UFMG' 
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