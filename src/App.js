import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { AbilityScores, CharacterDetails } from './Components'; // eslint-disable-line no-unused-vars
import './index.css';
import { weapons } from './data/gear';
import { generateCharacter } from './utils/utils';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  addWeapon = weaponName => {
    for (let i = 0; i < weapons.length; i++) {
      if (weapons[i].name === weaponName) {
        this.setState({
          weapon: weapons[i],
        });
      }
    }
  };

  componentDidMount() {
    this.setState(generateCharacter());
  }

  render() {
    return (
      <div className="main-container flex column">
        <div className="main-padding flex column">
          <h1>Knave</h1>
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
