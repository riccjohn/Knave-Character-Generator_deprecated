import React from 'react'; // eslint-disable-line no-unused-vars
import { AbilityScores, CharacterDetails } from './Components'; // eslint-disable-line no-unused-vars
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Knave</h1>
      <AbilityScores />
      <CharacterDetails />
    </div>
  );
};

export default App;
