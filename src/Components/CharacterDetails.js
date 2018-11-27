import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { weapons } from '../data/gear';
import { WeaponOption } from './WeaponOption';
import { calcUsedSlots, getTotalSlots } from '../utils/utils';

const CharacterDetails = props => {
  const { character } = props;
  return (
    <React.Fragment>
      <h1>Items</h1>
      <p>
        Item Slots Used: {calcUsedSlots(character)} /{' '}
        {character.abilities && getTotalSlots(character)}
      </p>
      <h4>Weapon</h4>
      <p>Choose a weapon</p>
      <select
        onChange={el => {
          props.weaponUpdate(el.target.value);
        }}
        id="weapon">
        <option value="default">-- WEAPONS --</option>

        {weapons.map((weapon, index) => WeaponOption(weapon, index, character))}
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
                <td>{character.helmetShield.name}</td>
                <td>-</td>
                <td>{character.helmetShield.slot}</td>
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
          <p className="inner-width section">
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
