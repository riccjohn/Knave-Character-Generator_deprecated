import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { AbilityScores, CharacterDetails } from './Components'; // eslint-disable-line no-unused-vars
import './index.css';
import { generateCharacter } from './utils/utils';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.setState(generateCharacter());
  }

  render() {
    return (
      <div className="main-container flex column">
        <div className="main-padding flex column">
          <h1>Knave</h1>
          <AbilityScores character={this.state} />
          <CharacterDetails character={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
