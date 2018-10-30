import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { getRand, rollDice } from '../utils/utils';
import { traits } from '../data/traits';
import {
  dungeoneeringGear,
  generalGearOne,
  generalGearTwo,
} from '../data/gear';

class CharacterDetails extends Component {
  constructor() {
    super();
    this.state = {
      traits: {
        physique: '',
        face: '',
        skin: '',
        hair: '',
        clothing: '',
        virtue: '',
        vice: '',
        speech: '',
        background: '',
        misfortunes: '',
      },
      gear: [],
    };
  }

  randomTrait = traitName => {
    return traits[traitName][getRand(traits[traitName].length)];
  };

  rollForTraits = () => {
    this.setState({
      traits: {
        physique: this.randomTrait('physique'),
        face: this.randomTrait('face'),
        skin: this.randomTrait('skin'),
        hair: this.randomTrait('hair'),
        clothing: this.randomTrait('clothing'),
        virtue: this.randomTrait('virtue'),
        vice: this.randomTrait('vice'),
        speech: this.randomTrait('speech'),
        background: this.randomTrait('background'),
        misfortunes: this.randomTrait('misfortunes'),
      },
    });
  };

  rollForGear = () => {
    const gearArr = [];
    while (gearArr.length < 2) {
      let gear = dungeoneeringGear[getRand(dungeoneeringGear.length)];
      if (!gearArr.includes(gear)) {
        gearArr.push(gear);
      }
    }

    gearArr.push(generalGearOne[getRand(generalGearOne.length)]);
    gearArr.push(generalGearTwo[getRand(generalGearTwo.length)]);

    this.setState({
      gear: gearArr,
    });
  };

  getArmor = () => {
    let armor = '';
    const roll = rollDice(20);
    if (roll <= 3) {
      armor = '';
    } else if (roll >= 4 && roll <= 14) {
      armor = 'Gambeson';
    } else if (roll >= 15 && roll <= 19) {
      armor = 'Brigandine';
    } else if (roll === 20) {
      armor = 'Chain';
    } else {
      alert('ERROR: ROLL OUT OF RANGE');
    }
    if (armor.length) {
      this.setState({
        armor: armor,
      });
    }
  };

  getHelemetShield = () => {};

  componentDidMount() {
    this.rollForTraits();
    this.rollForGear();
    this.getArmor();
  }

  render() {
    return (
      <div>
        <h1>Items</h1>
        <table>
          <tbody>
            {this.state.gear.map(item => (
              <tr key={item}>
                <td>{item}</td>
              </tr>
            ))}
            {this.state.armor && (
              <tr>
                <td>{this.state.armor} Armor</td>
              </tr>
            )}
          </tbody>
        </table>
        <h1>Traits</h1>
        <table>
          <tbody>
            {Object.keys(this.state.traits).map(trait => (
              <tr key={trait}>
                <td>{trait}</td>
                <td>{this.state.traits[trait]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CharacterDetails;
