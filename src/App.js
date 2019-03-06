import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { AbilityScores, CharacterDetails, Traits } from './Components';
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
            Based on the fantasic RPG{' '}
            <a href="https://www.drivethrurpg.com/product/250888/Knave">
              'Knave'
            </a>
            {' by '}
            <a href="https://www.youtube.com/watch?v=hVL4coIiHsE">Ben Milton</a>
          </p>
          <p className="block">
            Made with <span id="heart">♥</span> in Madison, WI
          </p>
        </div>
      </div>
    );
  }
}

export default App;
