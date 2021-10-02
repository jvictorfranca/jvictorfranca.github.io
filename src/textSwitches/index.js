import headerPTBRTexts from '../Components/Header/Header-text-PT-BR.json';
import headerENGTexts from '../Components/Header/Header-text-ENG.json';
import homeTextENG from '../Pages/Home/Home-text-ENG.json';
import homeTextPTBR from '../Pages/Home/Home-text-PT-BR.json';

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

export default headerSwitches;
