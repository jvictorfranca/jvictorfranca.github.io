import pt from './MetallurgyAbilitiesIcons/pt.png'
import en from './MetallurgyAbilitiesIcons/en.png'
import fr from './MetallurgyAbilitiesIcons/fr.png'
import esp from './MetallurgyAbilitiesIcons/esp.png'
import excel from './MetallurgyAbilitiesIcons/excel.png'
import word from './MetallurgyAbilitiesIcons/word.png'
import powerpoint from './MetallurgyAbilitiesIcons/powerpoint.png'
import powerbi from './MetallurgyAbilitiesIcons/powerbi.png'
import ansys from './MetallurgyAbilitiesIcons/ansys.png'
import abaqus from './MetallurgyAbilitiesIcons/abaqus.png'
import steelchallenge from './MetallurgyAbilitiesIcons/steelchallenge.png'
import solidworks from './MetallurgyAbilitiesIcons/solidworks.png'
import autocad from './MetallurgyAbilitiesIcons/autocad.png'





const abilityGroups = [
  {name : 'Pacote Office',
  description: 'Aqui estão minhas habilidades com o pacote office. Possuo conhecimento avançado de Excel, Word e Power Point com foco em Excel. Conhecimento intermediário de Power Bi.',
  abilities:[
    {
    name: 'Excel',
    knowlege: '95%',
    linkName: 'excel',
    icon: excel,
    description: 'Conhecimentos avançados de excel, com experiencia de criação de grandes planilhas, responsivas e iterativas, tabelas dinâmicas. Uso de funções como procV e corresp, choose, concatenate, dentre várias outras. Conhecimento intermediário de macros e conhecimento básico de VBA. Noção e experiência em criação de diferentes tipos de gráficos com diferentes funcionalidades e estilos' 
  },

  {
    name: 'Word',
    knowlege: '100%',
    linkName: 'word',
    icon: word,
    description: 'Conhecimentos avançados de word, com criação de formatação, sumários automáticos, criação e inserção de padrões, utilizações de fórmulas e referências. Links com PowerPoint e Excel.' 
  },

  {
    name: 'Power Point',
    knowlege: '100%',
    linkName: 'powerpoint',
    icon: powerpoint,
    description: 'Conhecimentos avançados de PowerPoint. Conhecimento de animações, transições, edição e desenhos personalizados usando geometrias. Tudo isso para garantir uma apresentação iterativa, dinâmica e com muito conteúdo disposto de forma organizada e atrativa.' 
  },

  {
    name: 'Power BI',
    knowlege: '50%',
    linkName: 'powerbi',
    icon: powerbi,
    description: 'Conhecimentos intermediários de Power BI. Possibilidade de tratamento de dados sem alterar a origem, criação de relatórios resumidos dinâmicos com valores e gráficos explicativos.' 
  },
  
  ]},

  {name : 'Simulação',
  description: 'Habilidades com simulação e criação de geometrias em 2D e 3D obtidas ao longo da graduação.',
  abilities:[
    {
    name: 'Ansys-CFX',
    knowlege: '70%',
    linkName: 'ansys',
    icon: ansys,
    description: 'Conhecimentos intermediários do software Ansys-CFX para simulação fluidodinamica. Noção de simulações com multidomínios, reações químicas, transporte de massa e calor, diferentes métodos de solução, criação de funções específicas para atribuição e monitoramento de variáveis.' 
  },

  {
    name: 'Abaqus',
    knowlege: '60%',
    linkName: 'abaqus',
    icon: abaqus,
    description: 'Conhecimentos intermediários do software Abaqus para simulação de elementos finitos em conformação mecanica. Conhecimentos para realizar simulações bi e tridimensionais, com diferentes métodos de solução.' 
  },

  {
    name: 'Steel Challenge',
    knowlege: '70%',
    linkName: 'steelchallenge',
    icon: steelchallenge,
    description: 'Conhecimentos sobre simulações de aciaria e lingotamento contínuo da Steel University. Tive a oportunidade de participar no Steel Challenge de 2020 nesses módulos, e consegui com muito orgulho me colocar em terceiro lugar da américa latina, sendo o primeiro entre os estudantes da UFMG' 
  },

  {
    name: 'Solidworks',
    knowlege: '50%',
    linkName: 'solidworks',
    icon: solidworks,
    description: 'Noção intermediária de criação de geometrias em 3d e 2d, bem como esboços para a realização de simulações.' 
  },

  {
    name: 'Autocad',
    knowlege: '40%',
    linkName: 'autocad',
    icon: autocad,
    description: 'Noção básica de criação de geometrias em 2d em visão isométrica, bem como esboços para a realização de simulações em planos.' 
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