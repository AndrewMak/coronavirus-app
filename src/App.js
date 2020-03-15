import React from 'react';
import './App.css';
import Stats from '../src/components/Stats'
import CountrySelector from '../src/components/CountrySelector'

function App() {
  return (
    <div>
      <h1>Números Globais</h1>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}

export default App;
