// src/Config/actions.js
export const setPrixVente = (prix) => ({
  type: 'SET_PRIX_VENTE',
  payload: prix,
});

export const calculerFrais = (prix) => {
  const droitsEnregistrement = prix * 0.04;
  const conservationFonciere = prix * 0.015 + 200;
  const fraisDossier = 1500;

  let honorairesNotaire;
  if (prix <= 300000) {
    honorairesNotaire = 4000;
  } else if (prix <= 1000000) {
    honorairesNotaire = prix * 0.015;
  } else if (prix <= 5000000) {
    honorairesNotaire = prix * 0.0125;
  } else if (prix <= 10000000) {
    honorairesNotaire = prix * 0.0075;
  } else {
    honorairesNotaire = prix * 0.005;
  }

  const tva = honorairesNotaire * 0.10;
  const totalFrais = droitsEnregistrement + conservationFonciere + fraisDossier + honorairesNotaire + tva;

  const fraisCalcules = {
    droitsEnregistrement,
    conservationFonciere,
    fraisDossier,
    honorairesNotaire,
    tva,
    totalFrais,
  };

  return {
    type: 'SET_FRAIS',
    payload: fraisCalcules,
  };
};
