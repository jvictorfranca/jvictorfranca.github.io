import rpg from './projectIcons/rpg.png';
import movielist from './projectIcons/movielist.png';
import stopwatch from './projectIcons/stopwatch.png';
import pixelsart from './projectIcons/pixelsart.png';
import pokedex from './projectIcons/pokedex.png';
import todolist from './projectIcons/todolist.png';
import lessonslearned from './projectIcons/lessonslearned.png';
import trybewarts from './projectIcons/trybewarts.png';
import zoofunc from './projectIcons/zoofunc.png';
import oldportfolio from './projectIcons/oldportfolio.png';
import onlinestore from './projectIcons/onlinestore.png';
import trivia from './projectIcons/trivia.png';
import starwars from './projectIcons/starwars.png';
import walletcurrency from './projectIcons/walletcurrency.png';

const groupProjects = [
  {
    name: 'Hall of Fame',
    description:
      'This is the Hall of Fame. Here are the projects that i liked the most doing and the final version. Check them out. To switch between projects projects click on the side buttons, and for visiting a specific one, Click on the project icon or in "Test here". ',
    projects: [
      {
        name: 'RPG Jãogeons and Dragons',
        used: ['javascript', 'html', 'css'],
        linkName: 'RpgJão',
        url: 'https://jvictorfranca.github.io/RPG-jaogeons-and-dragons/',
        icon: rpg,
        description:
          'Lets fight a Dragon with a party of a warrior and a mage. It seems hard, and it is indeed. The dragon is very strong and hard to defeat, but i garantee that if you have advanced combat skills its possible to come with a win.Lets play!',
      },

      {
        name: 'Trivia',
        used: ['react', 'javascript', 'html', 'css'],
        linkName: 'trivia',
        url: 'http://jvictorfranca.github.io/trivia',
        icon: trivia,
        description:
          'A beautiful trivia game themed as "Castelo Ratimbum", a brazilian TV series. Done with agile software development methods in a group with my colleagues Gabriel Ribeiro, Yasmin Araújo and Carolina Inglethe. How much do you know about sports, Geography, History, Games and others? Lets find out.',
      },

      {
        name: 'Online Store',
        used: ['react', 'javascript', 'html', 'css'],
        linkName: 'onlineStore',
        url: 'http://jvictorfranca.github.io/project-frontend-online-store',
        icon: onlinestore,
        description:
          'A "Mercado Livre" site emulation. You cannot actually buy things. It makes a request for the API for Mercado Livre Store and shows them in the screen . A Singlepage Application with routes for Shopping Cart, finish the purchase, Products Details and more. One full experience in online shopping. My first group project, with the aid of Rafael Nery and Pedro Loures',
      },
      {
        name: 'Stopwatch',
        used: ['react', 'javascript', 'html', 'css'],
        linkName: 'Stopwatch',
        url: 'https://jvictorfranca.github.io/stopwatch/',
        icon: stopwatch,
        description:
          'Do you find it to hard to sleep, and when you succeed you cannot wake up by yourself? Stopwatch is for you then. A stopwatch where you can count sheeps to help you to sleep. But be carefull, the alarm clock e too noisy.',
      },
      {
        name: 'Movie List Crud',
        used: ['react', 'javascript', 'html', 'css'],
        linkName: 'MovieList',
        url: 'https://jvictorfranca.github.io/movie-list',
        icon: movielist,
        description:
          'A movie theater site that fakes a API request but its in fact a Promise. Putting together many Trybe projects made it very functional. Loading screen,adding movies, deleting, editing, everything fast and easy with React.',
      },
      {
        name: 'Pixels Art',
        used: ['javascript', 'html', 'css'],
        linkName: 'Pixels Art',
        url: 'https://jvictorfranca.github.io/pixels-art/',
        icon: pixelsart,
        description:
          'For drawing pixel arts in a easy and fast way. Totally in Vanilla Javascript.It lets you choose colors, click to colour a pixel, resize your grid to better arts and even save your pretty creations. See how cute a Pikachu is and get inspired for beautiful drawings.',
      },
    ],
  },

  {
    name: 'Vanilla',
    description:
      'Here are some projects done with Vanilla Javascript, HTML and CSS, some of then without even JS.',
    projects: [
      {
        name: 'To Do List',
        used: ['javascript', 'html', 'css'],
        linkName: 'toDoList',
        url: 'https://jvictorfranca.github.io/todo-list/',
        icon: todolist,
        description:
          'Making a to-do list could not be easier. You can create a task, put it up or down the list, clear your list, mark as finished, and more.',
      },
      {
        name: 'Old Portfolio',
        used: ['html', 'css'],
        linkName: 'oldPortfolio',
        url: 'https://jvictorfranca.github.io/old-portfolio/',
        icon: oldportfolio,
        description:
          'This was my first porfolio made. Without any Javascript, only for training Web programming. We can see improvement, cant we?',
      },
      {
        name: 'Projeto Lessons Learned',
        used: ['html'],
        linkName: 'lessonsLearned',
        url: 'https://jvictorfranca.github.io/lessons-learned/',
        icon: lessonslearned,
        description:
          'First project ever. Will always be here for mark my programming improvement. Using only HTML for me to get used to it',
      },
      {
        name: 'Project Zoo Functions',
        used: ['javascript'],
        linkName: 'zooFunctions',
        url: '',
        icon: zoofunc,
        description:
          'A tough and JS only project. Used to manage animals and employees of a zoo. For now it has no graphic interface, but in the future i intend making one.',
      },
      {
        name: 'Projeto TrybeWarts',
        used: ['javascript', 'html', 'css'],
        linkName: 'trybeWarts',
        url: 'https://jvictorfranca.github.io/project-trybewarts/',
        icon: trybewarts,
        description:
          'A Trybe magic school? That is where the name comes from (beware with the Copyright) . First time using forms and first couple project as well.',
      },
    ],
  },
  {
    name: 'React',
    description:
      'My projects using the React Framework, created and managed by Facebook.',
    projects: [
      {
        name: 'Currency wallet',
        used: ['react', 'javascript', 'html', 'css'],
        linkName: 'currencyWallet',
        url: 'https://jvictorfranca.github.io/currency-wallet/',
        icon: walletcurrency,
        description:
          'Organise your expenses, using Brazilian Real, Dollars, Bitcoins, Euros, or any currency. All in a fast and easy way. You can use every valid email for loggin in, and any password with more than 6 characters would do it. Happy buying',
      },
      {
        name: 'Star Wars Planets',
        used: ['react', 'javascript', 'html', 'css'],
        linkName: 'starWars',
        url: 'https://jvictorfranca.github.io/starwars-planets/',
        icon: starwars,
        description:
          'Do you like Star Wars universe? Then lets explore all of its planets. A tue Data Minning that makes an API request and allow manny different filters to search a specific planet. What would be the Endor alien population? Or even the Alderaan planet rotation? Now you are able to know!',
      },
      {
        name: 'Pokedex',
        used: ['react', 'javascript', 'html', 'css'],
        linkName: 'Pokedex',
        url: 'https://jvictorfranca.github.io/pokedex/',
        icon: pokedex,
        description:
          'Pokedex is a tool to store the characteristics of all the Pokemons. My first steps in React, with filters, and many pages in a single page application. Gotta catch them all!',
      },
    ],
  },
];

export default groupProjects;
