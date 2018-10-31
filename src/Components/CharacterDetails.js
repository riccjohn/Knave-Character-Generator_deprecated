import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

const CharacterDetails = props => {
  const { character } = props;
  console.log('CHARACTER: ', character);
  return (
    <React.Fragment>
      <h1>Items</h1>
      <p>
        Total Item Slots:
        {character.abilities && character.abilities.constitution + 10}
      </p>
      <h4>Weapon</h4>
      <p>Choose a weapon</p>
      {character.gear ? (
        <table className="gear table table-striped table-sm">
          <caption>Gear</caption>
          <thead className="thead-dark">
            <tr>
              <th>Item</th>
              <th>Defense / Damage</th>
              <th>Slots</th>
            </tr>
          </thead>
          <tbody>
            {!!character.armor && (
              <tr>
                <td>{character.armor.name}</td>
                <td>+{character.armor.defense || '-'} def</td>
                <td>{character.armor.slot || 1}</td>
              </tr>
            )}
            {!!character.helmetShield && (
              <tr>
                <td>{character.helmetShield}</td>
                <td>-</td>
                <td>-</td>
              </tr>
            )}
            {character.gear.map(item => (
              <tr key={item}>
                <td>{item}</td>
                <td>-</td>
                <td>1</td>
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
      {!!character.traits && (
        <p>
          You are{' '}
          {['a', 'e', 'i', 'o', 'u'].includes(character.traits.physique[0])
            ? 'an'
            : 'a'}{' '}
          {character.traits.physique} {character.sex} with a{' '}
          {character.traits.face} face, {character.traits.skin} skin, and{' '}
          {character.traits.hair} hair.
        </p>
      )}
    </React.Fragment>
  );
};

export default CharacterDetails;
