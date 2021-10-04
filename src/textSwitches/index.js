import headerPTBRTexts from '../Components/Header/Header-text-PT-BR.json';
import headerENGTexts from '../Components/Header/Header-text-ENG.json';
import homeTextENG from '../Pages/Home/Home-text-ENG.json';
import homeTextPTBR from '../Pages/Home/Home-text-PT-BR.json';
import projectsENG from '../Data/projects-ENG';
import projectsPTBR from '../Data/projects';
import contactItemTextENG from '../Components/ContactItem/contact-item-text-eng.json';
import contactItemTextPTBR from '../Components/ContactItem/contact-item-text-ptbr.json';
import contacts from '../Data/contacts';
import contactsENG from '../Data/contactsENG';
import ProjectListTextENG from '../Components/Portfolio-components/ProjectListTextsENG.json'
import ProjectListTextPTBR from '../Components/Portfolio-components/ProjectListTextsPTBR.json'

export function headerSwitches(languageStored) {
  switch (languageStored) {
    case 'PT-BR':
      return headerPTBRTexts;

    case 'ENG':
      return headerENGTexts;

    default:
      return headerPTBRTexts;
  }
}

export function homePageSwitches(languageStored) {
  switch (languageStored) {
    case 'PT-BR':
      return homeTextPTBR;

    case 'ENG':
      return homeTextENG;

    default:
      return homeTextPTBR;
  }
}

export function portfoliotSwitches(languageStored) {
  switch (languageStored) {
    case 'PT-BR':
      return projectsPTBR;

    case 'ENG':
      return projectsENG;

    default:
      return projectsPTBR;
  }
}

export function contactItemSwitches(languageStored) {
  switch (languageStored) {
    case 'PT-BR':
      return contactItemTextPTBR;

    case 'ENG':
      return contactItemTextENG;

    default:
      return contactItemTextPTBR;
  }
}

export function contactSwitches(languageStored) {
  switch (languageStored) {
    case 'PT-BR':
      return contacts;

    case 'ENG':
      return contactsENG;

    default:
      return contacts;
  }
}


export function projectListSwitches(languageStored) {
  switch (languageStored) {
    case 'PT-BR':
      return ProjectListTextPTBR;

    case 'ENG':
      return ProjectListTextENG;

    default:
      return ProjectListTextPTBR;
  }
}


export default headerSwitches;
