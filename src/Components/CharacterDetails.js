import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { weapons } from '../data/gear';
import { WeaponOption } from './WeaponOption';
import { calcUsedSlots, getTotalSlots } from '../utils/utils';

const CharacterDetails = props => {
  const { character } = props;
  return (
    <React.Fragment>
      <div className="flex column center section items">
        <h2>Items</h2>
        <p>
          Item Slots Used: {calcUsedSlots(character)} /{' '}
          {character.abilities && getTotalSlots(character)}
        </p>
        <h5>Weapon</h5>
        <select
          onChange={el => {
            props.weaponUpdate(el.target.value);
          }}
          id="weapon">
          <option value="default">-- Choose a weapon --</option>

          {weapons.map((weapon, index) =>
            WeaponOption(weapon, index, character)
          )}
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
              {!!character.weapon && (
                <tr>
                  <td>{character.weapon.name}</td>
                  <td>{character.weapon.damage}</td>
                  <td>{character.weapon.slot}</td>
                </tr>
              )}
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
      </div>
    </React.Fragment>
  );
};

export default CharacterDetails;
