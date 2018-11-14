import { traits } from "../data/traits";
import {
  dungeoneeringGear,
  generalGearOne,
  generalGearTwo,
  armor,
} from "../data/gear";

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
  const gearArr = ["rations (2)"];
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
  const roll = rollDice(20);
  if (roll <= 3) {
    return "";
  } else if (roll >= 4 && roll <= 14) {
    return armor[0];
  } else if (roll >= 15 && roll <= 19) {
    return armor[1];
  } else if (roll === 20) {
    return armor[2];
  } else {
    alert("ERROR: ROLL OUT OF RANGE");
  }
};

const getHelmetShield = () => {
  let helmetShield = "";
  const roll = rollDice(20);
  if (roll <= 13) {
    helmetShield = null;
  } else if (roll > 13 && roll <= 16) {
    helmetShield = {
      name: "helmet",
      defense: 1,
      slot: 1,
      quality: 1,
    };
  } else if (roll > 16 && roll <= 19) {
    helmetShield = {
      name: "shield",
      defense: 1,
      slot: 1,
      quality: 1,
    };
  } else if (roll === 20) {
    helmetShield = {
      name: "helmet & shield",
      defense: 2,
      slot: 2,
      quality: 1,
    };
  } else {
    helmetShield = "error";
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
    sex: rollDice(2) === 1 ? "male" : "female",
    traits: {
      physique: randomTrait("physique"),
      face: randomTrait("face"),
      skin: randomTrait("skin"),
      hair: randomTrait("hair"),
      clothing: randomTrait("clothing"),
      virtue: randomTrait("virtue"),
      vice: randomTrait("vice"),
      speech: randomTrait("speech"),
      background: randomTrait("background"),
      misfortunes: randomTrait("misfortunes"),
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

export const initialCaps = str => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

export const calcUsedSlots = state => {
  const armor = state.armor ? state.armor.slot : 0;
  const helmetShield = state.helmetShield ? state.helmetShield.slot : 0;

  const weapon = state.weapon ? state.weapon.slot : 0;

  return 5 + armor + helmetShield + weapon;
};

export const getTotalSlots = state => {
  return state.abilities.constitution + 10;
};

export const checkDisabled = (state, weapon) => {
  if (state.abilities) {
    return getTotalSlots(state) - 2 < weapon.slot + calcUsedSlots(state);
  }
  return false;
};
