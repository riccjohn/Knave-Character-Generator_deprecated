import React, { Component } from 'react';

class AbilityScores extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      strRaw: 2,
      dexRaw: 2,
      conRaw: 3,
      intRaw: 4,
      wisRaw: 5,
      chaRaw: 6,
    };
  }

  rollStat = () => {
    const rolls = [];
    for (let i = 0; i < 3; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    return Math.min(...rolls);
  };

  rollCharStats = () => {
    this.setState({
      strRaw: this.rollStat(),
      dexRaw: this.rollStat(),
      conRaw: this.rollStat(),
      intRaw: this.rollStat(),
      wisRaw: this.rollStat(),
      charRaw: this.rollStat(),
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
        <button onClick={this.rollCharStats}>Roll</button>
      </div>
    );
  }
}

export default AbilityScores;
