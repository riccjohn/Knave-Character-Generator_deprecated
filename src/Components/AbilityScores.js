import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { rollDice } from '../utils/utils';

class AbilityScores extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Samuel Jackson',
      abilities: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },

      hp: 0,
      itemSlots: 0,
    };
  }

  componentDidMount() {
    this.rollCharStats();
  }

  rollStat = () => {
    const rolls = [];
    for (let i = 0; i < 3; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    return Math.min(...rolls);
  };

  rollCharStats = async () => {
    let str, dex, con, intel, wis, chari;
    const statArr = [];
    for (let i = 0; i < 6; i++) {
      statArr.push(this.rollStat());
    }

    [str, dex, con, intel, wis, chari] = statArr;

    await this.setState({
      abilities: {
        strength: str,
        dexterity: dex,
        constitution: con,
        intelligence: intel,
        wisdom: wis,
        charisma: chari,
      },
      hp: rollDice(8),
      armor: 'Chain',
      helmet: true,
      shield: true,
      dungoneeringGear: ['rope', 'crowbar'],
      genGearA: 'shovel',
      genGearB: 'face paint',
    });
    await this.setState({
      itemSlots: this.state.abilities.constitution + 10,
    });
  };

  render() {
    const { abilities } = this.state;
    return (
      <div className="container">
        <div className="abilities flex row">
          <table>
            <tbody>
              <tr>
                <th>Defense</th>
                <th>Ability</th>
                <th>Bonus</th>
              </tr>
              {Object.keys(abilities).map(ability => (
                <tr key={ability}>
                  <td>{abilities[ability]}</td>
                  <th className={'bold large'}>{ability.slice(0, 3)}</th>
                  <td>{abilities[ability] + 10}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex">
          <p>Level: 1</p>
          <p>HP: {this.state.hp}</p>
        </div>
        <button onClick={this.rollCharStats}>Roll</button>
      </div>
    );
  }
}

export default AbilityScores;
