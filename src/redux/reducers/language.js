const INNITIAL_STATE = {
  language: 'PT-BR',
};

function languageReducer(state = INNITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

export default languageReducer;
