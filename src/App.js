import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Config/store';
import Menu from './Componnents/Menu';
import Verification from './Componnents/Verification';
import Calculer_Frais from './Componnents/Calculer_Frais';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/calcul-frais" element={<Calculer_Frais />} />
            <Route path="/verification" element={<Verification />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
