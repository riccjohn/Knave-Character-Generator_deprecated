import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

const CharacterDetails = props => {
  const { character } = props;
  return (
    <React.Fragment>
      <h1>Items</h1>
      <p>
        Total Item Slots:
        {character.abilities && character.abilities.constitution + 10}
      </p>
      {character.gear ? (
        <table className="gear table table-striped table-sm">
          <caption>Gear</caption>
          <tbody>
            {!!character.armor && (
              <tr>
                <td>
                  {character.armor}
                  Armor
                </td>
              </tr>
            )}
            {!!character.helmetShield && (
              <tr>
                <td>{character.helmetShield}</td>
              </tr>
            )}
            {character.gear.map(item => (
              <tr key={item}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading ...</p>
      )}

      <h1>Traits</h1>
      {character.traits ? (
        <table className="table table-striped table-sm">
          <caption>Traits</caption>
          <tbody>
            {Object.keys(character.traits).map(trait => (
              <tr key={trait}>
                <td>{trait}</td>
                <td>{character.traits[trait]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading ...</p>
      )}
    </React.Fragment>
  );
};

export default CharacterDetails;
