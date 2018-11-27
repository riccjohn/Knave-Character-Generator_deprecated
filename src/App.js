import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { AbilityScores, CharacterDetails, Traits } from './Components'; // eslint-disable-line no-unused-vars
import './index.css';
import { weapons } from './data/gear';
import { generateCharacter } from './utils/utils';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  addWeapon = num => {
    this.setState({
      weapon: weapons[num],
    });
  };

  componentDidMount() {
    this.setState(generateCharacter());
  }

  render() {
    return (
      <div className="main-container flex column">
        <div className="main-padding flex column">
          <h1 className="box">Knave</h1>
          <Traits character={this.state} />
          <AbilityScores character={this.state} />
          <CharacterDetails
            weaponUpdate={this.addWeapon}
            character={this.state}
          />
        </div>
        <div className="footer flex row">
          <p className="block">
            Based on the fantasic RPG 'Knave' by Ben Milton
          </p>
          <p className="block">Made with ♥ in Madison, WI</p>
        </div>
      </div>
    );
  }
}

export default App;
