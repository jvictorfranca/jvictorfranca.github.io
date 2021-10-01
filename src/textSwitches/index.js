import headerPTBRTexts from '../Components/Header/Header-text-PT-BR.json';
import headerENGTexts from '../Components/Header/Header-text-ENG.json';

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

export default headerSwitches;
