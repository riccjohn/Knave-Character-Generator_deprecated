import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

class AbilityScores extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Samuel Jackson',
      strRaw: 0,
      dexRaw: 0,
      conRaw: 0,
      intRaw: 0,
      wisRaw: 0,
      chaRaw: 0,
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

  rollDice = dieSize => {
    return Math.floor(Math.random() * dieSize + 1);
  };

  rollCharStats = async () => {
    let str, dex, con, intel, wis, chari;
    const statArr = [];
    for (let i = 0; i < 6; i++) {
      statArr.push(this.rollStat());
    }

    [str, dex, con, intel, wis, chari] = statArr;

    await this.setState({
      strRaw: str,
      dexRaw: dex,
      conRaw: con,
      intRaw: intel,
      wisRaw: wis,
      chaRaw: chari,
      hp: this.rollDice(8),
      armor: 'Chain',
      helmet: true,
      shield: true,
      dungoneeringGear: ['rope', 'crowbar'],
      genGearA: 'shovel',
      genGearB: 'face paint',
    });
    await this.setState({
      itemSlots: this.state.conRaw + 10,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="abilities flex row">
          <table>
            <tbody>
              <tr>
                <td />
                <th scope="col">STR</th>
                <th scope="col">DEX</th>
                <th scope="col">CON</th>
                <th scope="col">INT</th>
                <th scope="col">WIS</th>
                <th scope="col">CHA</th>
              </tr>
              <tr>
                <th className="sideHeading" scope="row">
                  Defense
                </th>
                <td>{this.state.strRaw}</td>
                <td>{this.state.dexRaw}</td>
                <td>{this.state.conRaw}</td>
                <td>{this.state.intRaw}</td>
                <td>{this.state.wisRaw}</td>
                <td>{this.state.chaRaw}</td>
              </tr>
              <tr>
                <th className="sideHeading" scope="row">
                  Bonus
                </th>
                <td>{this.state.strRaw + 10}</td>
                <td>{this.state.dexRaw + 10}</td>
                <td>{this.state.conRaw + 10}</td>
                <td>{this.state.intRaw + 10}</td>
                <td>{this.state.wisRaw + 10}</td>
                <td>{this.state.chaRaw + 10}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex column">
          <p>Level: 1</p>
          <p>HP: {this.state.hp}</p>
        </div>
        <button onClick={this.rollCharStats}>Roll</button>
      </div>
    );
  }
}

export default AbilityScores;
