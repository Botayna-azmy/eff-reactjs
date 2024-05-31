const initialState = {
    prixVente: '',
    frais: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRIX_VENTE':
        return { ...state, prixVente: action.payload };
      case 'SET_FRAIS':
        return { ...state, frais: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;