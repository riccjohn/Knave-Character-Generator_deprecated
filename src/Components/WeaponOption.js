import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { initialCaps, checkDisabled } from '../utils/utils';

export const WeaponOption = (weapon, index, character) => {
  if (checkDisabled(character, weapon)) {
    return (
      <option key={weapon.name} value={index} disabled>
        {' '}
        {initialCaps(weapon.name)} • Damage: {weapon.damage} • Slots:{' '}
        {weapon.slot}
      </option>
    );
  } else {
    return (
      <option key={weapon.name} value={index}>
        {' '}
        {initialCaps(weapon.name)} • Damage: {weapon.damage} • Slots:{' '}
        {weapon.slot}
      </option>
    );
  }
};
