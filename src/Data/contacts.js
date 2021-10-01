import linkedin from './contactsIcons/linkedin.png';
import githHub from './contactsIcons/githHub.png';
import email from './contactsIcons/email.png';

const contacts = {
  title: 'Contatos',
  text: 'Para contato:',
  contactItens: [
    {
      title: 'Linkedin',
      visit: true,
      image: linkedin,
      link: 'https://www.linkedin.com/in/jvictorfranca/',
    },
    {
      title: 'Git Hub',
      visit: true,
      image: githHub,
      link: 'https://github.com/jvictorfranca',
    },
    {
      title: 'Email',
      visit: false,
      image: email,
      link: 'jvictorfranca@yahoo.com.br',
    },
  ],
};

export default contacts;
