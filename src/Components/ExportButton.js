/* eslint-disable indent */
import React from 'react';
import { getTotalSlots, calcUsedSlots } from '../utils/utils';

const optionalItem = item =>
  item
    ? `${item.name},${item.quality},${item.defense || item.damage || '-'},${
        item.slot
      }\n`
    : '';

const characterToCSV = ({
  abilities,
  hp,
  sex,
  traits,
  gear,
  armor,
  helmetShield,
  weapon,
  usedSlots,
  totalSlots,
}) => `Ability Scores
  Ability,Defense,Bonus
  STR,${abilities.strength + 10},${abilities.strength}
  DEX,${abilities.dexterity + 10},${abilities.dexterity}
  CON,${abilities.constitution + 10},${abilities.constitution}
  INT,${abilities.intelligence + 10},${abilities.intelligence}
  WIS,${abilities.wisdom + 10},${abilities.wisdom}
  CHA,${abilities.charisma + 10},${abilities.charisma}

  Status
  HP,${hp}
  Experience,0
  Level,1

  Traits
  Sex,${sex}
  Physique,${traits.physique}
  Face,${traits.face}
  Skin,${traits.skin}
  Hair,${traits.hair}
  Clothing,${traits.clothing}
  Virtue,${traits.virtue}
  Vice,${traits.vice}
  Speech,${traits.speech}
  Background,${traits.background}
  Misfortunes,${traits.misfortunes}

  Items
  Item,Quality,Defense / Damage,Slots (${usedSlots} / ${totalSlots})
  ${gear.join(',-,-,1\n') + ',-,-,1'}
  ${optionalItem(armor) + optionalItem(helmetShield) + optionalItem(weapon)}
`;

const ExportButton = ({ character }) => (
  <a
    className='exportBox'
    href={`data:text/csv,${encodeURI(
      characterToCSV({
        ...character,
        usedSlots: calcUsedSlots(character),
        totalSlots: getTotalSlots(character),
      })
    )}`}
    download='character.csv'>
    <strong>Export as CSV</strong>
  </a>
);
export default ExportButton;
