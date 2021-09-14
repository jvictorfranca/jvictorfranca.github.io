import rpg from './projectIcons/rpg.png'
import movielist from './projectIcons/movielist.png'
import stopwatch from './projectIcons/stopwatch.png'
import pixelsart from './projectIcons/pixelsart.png'
import pokedex from './projectIcons/pokedex.png'
import todolist from './projectIcons/todolist.png'
import lessonslearned from './projectIcons/lessonslearned.png'
import trybewarts from './projectIcons/trybewarts.png'
import zoofunc from './projectIcons/zoofunc.png'
import oldportfolio from './projectIcons/oldportfolio.png'
import onlinestore from './projectIcons/onlinestore.png'
import trivia from './projectIcons/trivia.png'



const groupProjects = [
  {name : 'Hall of Fame',
  description: 'Esse é o Hall da Fama. Pus aqui os projetos que mais gostei de fazer e do resultado. Confira esses projetos. Para navegar basta clicar nos botões laterias, e para visitar basta clicar no ícone do projeto ou em "Teste aqui". ',
  projects:[
    {
    name: 'RPG Jãogeons and Dragons',
    used: ['javascript', 'html', 'css'],
    linkName: 'RpgJão',
    url: 'https://jvictorfranca.github.io/RPG-jaogeons-and-dragons/',
    icon: rpg,
    description: 'Que tal enfrentar um dragão com uma party de um guerreiro e um mago? Parece uma missão dificil, e de fato é. O dragão é muito poderoso e dificil de derrotar, mas garanto que se suas capacidades de combate forem avançadas é possível. Vamos jogar!' 
  },

  {
    name: 'Trivia',
    used: ['react','javascript', 'html', 'css'],
    linkName: 'trivia',
    url: 'http://jvictorfranca.github.io/trivia',
    icon: trivia,
    description: 'Um belo jogo de trivia com temática do Castelo Ratimbum. Feito com metodologias ágeis em grupo com meus colegas Gabriel Ribeiro,, Yasmin Araújo e Carolina Inglethe. As perguntas estão em inglês e é uma bela oportunidade para treinar o idioma. Como estão seus conhecimentos acerca de jogos, geografia, história, esportes, etc? É hora de descobrir ' 
  },

  {
    name: 'Online Store',
    used: ['react','javascript', 'html', 'css'],
    linkName: 'onlineStore',
    url: 'http://jvictorfranca.github.io/project-frontend-online-store',
    icon: onlinestore,
    description: 'Uma emulação do site do Mercado Livre. Faz a requisição a API de produtos do proprio mercado livre e as mostra na tela. Singlepage Aplication com caminhos para carrinho de compra, finalização de compra e detalhamento de produto. Uma experiencia completa em compra de produtos online. Meu primeiro projeto em grupo, com a ajuda de Rafael Nery e Pedro Loures' 
  },
  {
    name: 'Stopwatch',
    used: ['react','javascript', 'html', 'css'],
    linkName: 'Stopwatch',
    url: 'https://jvictorfranca.github.io/stopwatch/',
    icon: stopwatch,
    description: 'Quer dormir, esta com dificuldades e precisa de um despertador? Stopwatch é o projeto. Um cronômetro dinâmico de contagem regressiva enquanto você pode contar carneirinhos. Mas tome cuidado, o despertador é inusitado.' 
  },
  {
    name: 'Movie List Crud',
    used: ['react','javascript', 'html', 'css'],
    linkName: 'MovieList',
    url:'https://jvictorfranca.github.io/movie-list',
    icon: movielist,
    description: 'Um site de cinema que emula uma requisição para a API mas na verdade é apenas uma Promise. União de diversos projetos da Trybe garantiram bastantes funcionalidades. Tela de carregamento, possibilidade de inserir filmes, deletar, editar, tudo de modo dinámico com React.' 
  },
  {
    name: 'Pixels Art',
    used: ['javascript', 'html', 'css'],
    linkName: 'Pixels Art',
    url: 'https://jvictorfranca.github.io/pixels-art/',
    icon: pixelsart,
    description: 'Para desenhar artes pixeladas de modo fácil e rápido. Totalmente em javascript Vanilla. Permite escolher cor, clicar e segurar para colorir, redimensionar seu quadro para artes mais complexas e até mesmo salvar seus belíssimos desenhos. Veja como é fofo um pikachu e se inspire para belíssimas artes.' 
  },
  
  ]}
  
,
{
  name : 'Vanilla',
  description: 'Esses são projetos feitos utilizando basicamente HTML CSS e JS vanilla, alguns iniciais sem mesmo JS.',
  projects: [
    {
    name: 'To Do List',
    used: ['javascript', 'html', 'css'],
    linkName: 'toDoList',
    url:'https://jvictorfranca.github.io/todo-list/',
    icon: todolist,
    description: 'Fazer uma lista de tarefas nunca foi tão fácil. Possui funções de criar tarefa, subir ou descer uma tarefa, apagar lista, marcar item finalizado, dentre outros.' 
  },
  {
    name: 'Portifólio Velho',
    used: ['html', 'css'],
    linkName: 'oldPortfolio',
    url: 'https://jvictorfranca.github.io/old-portfolio/',
    icon:oldportfolio,
    description: 'Esse foi o primeiro portifólio que fiz. Sem Javascript algum, apenas para treinar os conhecimentos básicos. Dá para ver progresso né?' 
  },
  {
    name: 'Projeto Lessons Learned',
    used: ['html'],
    linkName:'lessonsLearned',
    url: 'https://jvictorfranca.github.io/lessons-learned/',
    icon: lessonslearned,
    description: 'Primeiro projeto da minha vida. Estará sempre por aqui para que possa marcar meu desenvolvimento. Somente usado HTML para me acostumar com a linguagem.'
  },
  {
    name: 'Projeto Zoo Functions',
    used: ['javascript'],
    linkName: 'zooFunctions',
    url:'',
    icon: zoofunc,
    description: 'Um projeto apenas em Javascript e muito pesado de fazer. Utilizado para gerenciar a estrutura dos funcionarios e animais de um zoológico. Por enquanto não tem interface gráfica (HTML e CSS) mas quem sabe futuramente implante.'
  },
  {
    name: 'Projeto TrybeWarts',
    used: ['javascript', 'html', 'css'],
    linkName: 'trybeWarts',
    url: 'https://jvictorfranca.github.io/project-trybewarts/',
    icon: trybewarts,
    description: 'Uma escola de magia da Trybe? Daí vem o nome do projeto (cuidado com a Copyright). Primeiro contato com Forms e um projeto feito em dupla.'
  }
    
  ]
},
{name : 'React',
description: 'Meus projetos feitos com a biblioteca React de Javascript, produzida e gerenciada pelo Facebook.',
projects: [

  {
    name: 'Pokedex',
    used: ['react','javascript', 'html', 'css'],
    linkName: 'Pokedex',
    url: 'https://jvictorfranca.github.io/pokedex/',
    icon: pokedex,
    description: 'A pokedex é uma ferramenta para guardar os tipos e caracteristicas de todos os Pokémons. O primeiro passo no react, contando com filtros e várias páginas em uma single page application. Temos que pegar!' 
  },

]}
]

export default groupProjects