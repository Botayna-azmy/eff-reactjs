import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/calcul-frais">Calcul des Frais</Link>
        </li>
        <li>
          <Link to="/verification">Vérification</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;