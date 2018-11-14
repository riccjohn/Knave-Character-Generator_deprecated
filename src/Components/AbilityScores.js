import React, { Component } from "react"; // eslint-disable-line no-unused-vars

class AbilityScores extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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

  setChar = () => {
    const { character } = this.props;
    this.setState(character);
  };

  componentDidMount() {
    this.setChar();
  }

  render() {
    const { character } = this.props;
    const { abilities } = character;
    return (
      <React.Fragment>
        <div className="abilities flex row center">
          <table className="table table-striped">
            <caption>Abilities</caption>
            <thead className="thead-dark">
              <tr>
                <th>Defense</th>
                <th>Ability</th>
                <th>Bonus</th>
              </tr>
            </thead>
            <tbody>
              {abilities &&
                Object.keys(abilities).map(ability => (
                  <tr key={ability}>
                    <td>{abilities[ability] + 10}</td>
                    <th className={"bold large"}>
                      {ability.slice(0, 3).toUpperCase()}
                    </th>
                    <td>+{abilities[ability]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex center column">
          <p className="block">Level: 1</p>{" "}
          <p className="block">HP: {character.hp}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default AbilityScores;
