import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { weapons } from '../data/gear';
import { initialCaps } from '../utils/utils';

const CharacterDetails = props => {
  const { character } = props;
  // console.log('CHARACTER: ', character);
  return (
    <React.Fragment>
      <h1>Items</h1>
      <p>
        Total Item Slots:{' '}
        {character.abilities && character.abilities.constitution + 10}
      </p>
      <h4>Weapon</h4>
      <p>Choose a weapon</p>
      <select
        onChange={el => {
          props.weaponUpdate(el.target.value);
        }}
        id="weapon">
        <option value="default">-- WEAPONS --</option>
        {weapons.map(weapon => (
          <option key={weapon.name} value={weapon.name}>
            {initialCaps(weapon.name)} • Damage: {weapon.damage} • Slots:{' '}
            {weapon.slot}
          </option>
        ))}
      </select>
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
      {!!character.traits && (
        <React.Fragment>
          <p className="inner-width">
            You are{' '}
            {['a', 'e', 'i', 'o', 'u'].includes(character.traits.physique[0])
              ? 'an'
              : 'a'}{' '}
            {character.traits.physique} {character.sex} with a{' '}
            {character.traits.face} face, {character.traits.skin} skin,{' '}
            {character.traits.hair} hair, and {character.traits.clothing}{' '}
            clothes. Your biggest virtue is that you're{' '}
            {character.traits.virtue}, but your largest vice is that you're{' '}
            {character.traits.vice}. Your speech is {character.traits.speech}.
          </p>
          <p className="inner-width">
            You were formerly a {character.traits.background}, and found
            yourself {character.traits.misfortunes}.
          </p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CharacterDetails;

/*{character.traits ? (
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
)}*/
