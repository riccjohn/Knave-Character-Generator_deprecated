import { traits } from '../data/traits';
import {
  dungeoneeringGear,
  generalGearOne,
  generalGearTwo,
} from '../data/gear';

export const rollDice = dieSize => {
  return Math.floor(Math.random() * dieSize + 1);
};

export const getRand = length => {
  return Math.floor(Math.random() * length);
};

const rollStat = () => {
  const rolls = [];
  for (let i = 0; i < 3; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return Math.min(...rolls);
};

const rollCharStats = () => {
  const statArr = [];
  for (let i = 0; i < 6; i++) {
    statArr.push(rollStat());
  }
  return statArr;
};

const rollForGear = () => {
  const gearArr = ['rations (2)'];
  while (gearArr.length < 3) {
    let gear = dungeoneeringGear[getRand(dungeoneeringGear.length)];
    if (!gearArr.includes(gear)) {
      gearArr.push(gear);
    }
  }

  gearArr.push(generalGearOne[getRand(generalGearOne.length)]);
  gearArr.push(generalGearTwo[getRand(generalGearTwo.length)]);

  return gearArr;
};

const getArmor = () => {
  let armor = '';
  const roll = rollDice(20);
  if (roll <= 3) {
    armor = '';
  } else if (roll >= 4 && roll <= 14) {
    armor = 'Gambeson';
  } else if (roll >= 15 && roll <= 19) {
    armor = 'Brigandine';
  } else if (roll === 20) {
    armor = 'Chain';
  } else {
    alert('ERROR: ROLL OUT OF RANGE');
  }
  return armor;
};

const getHelmetShield = () => {
  let helmetShield = '';
  const roll = rollDice(20);
  if (roll <= 13) {
    helmetShield = '';
  } else if (roll > 13 && roll <= 16) {
    helmetShield = 'helmet';
  } else if (roll > 16 && roll <= 19) {
    helmetShield = 'shield';
  } else if (roll === 20) {
    helmetShield = 'helmet & shield';
  } else {
    helmetShield = 'error';
  }
  return helmetShield;
};

export const generateCharacter = () => {
  let characterObj = {};
  const statArr = rollCharStats();
  const [str, dex, con, intel, wis, chari] = statArr;
  characterObj = {
    abilities: {
      strength: str,
      dexterity: dex,
      constitution: con,
      intelligence: intel,
      wisdom: wis,
      charisma: chari,
    },
    hp: rollDice(8),
    traits: {
      physique: randomTrait('physique'),
      face: randomTrait('face'),
      skin: randomTrait('skin'),
      hair: randomTrait('hair'),
      clothing: randomTrait('clothing'),
      virtue: randomTrait('virtue'),
      vice: randomTrait('vice'),
      speech: randomTrait('speech'),
      background: randomTrait('background'),
      misfortunes: randomTrait('misfortunes'),
    },
    gear: rollForGear(),
    armor: getArmor(),
    helmetShield: getHelmetShield(),
  };
  return characterObj;
};

export const randomTrait = traitName => {
  return traits[traitName][getRand(traits[traitName].length)];
};
