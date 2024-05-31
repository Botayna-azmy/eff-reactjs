// src/components/Calcul_frais.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrixVente, calculerFrais } from '../Config/action';

function CalculFrais() {
  const dispatch = useDispatch();
  const prixVente = useSelector((state) => state.prixVente);
  const frais = useSelector((state) => state.frais);

  const handlePrixChange = (e) => {
    const { value } = e.target;
    dispatch(setPrixVente(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculerFrais(parseFloat(prixVente)));
  };

  return (
    <div>
      <h1>Calcul des Frais de Notaire</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prix de vente du terrain (en DH):
          <input
            type="number"
            value={prixVente}
            onChange={handlePrixChange}
          />
        </label>
        <button type="submit">Calculer</button>
      </form>
      {frais && (
        <div>
          <h2>Résultat</h2>
          <p>Droits d'enregistrement: {frais.droitsEnregistrement.toFixed(2)} DH</p>
          <p>Conservation foncière: {frais.conservationFonciere.toFixed(2)} DH</p>
          <p>Frais de dossier: {frais.fraisDossier.toFixed(2)} DH</p>
          <p>Honoraires du notaire: {frais.honorairesNotaire.toFixed(2)} DH</p>
          <p>TVA sur honoraires du notaire: {frais.tva.toFixed(2)} DH</p>
          <p>Total frais: {frais.totalFrais.toFixed(2)} DH</p>
        </div>
      )}
    </div>
  );
}

export default CalculFrais;
