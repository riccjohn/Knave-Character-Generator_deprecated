import React from 'react'; // eslint-disable-line no-unused-vars

const Traits = props => {
  const { character } = props;
  return (
    <React.Fragment>
      <h1>Traits</h1>
      {!!character.traits && (
        <div className="inner-width section">
          <p>
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
          <p>
            You were formerly a {character.traits.background}, and found
            yourself {character.traits.misfortunes}.
          </p>
          <p>
            You are a level <span className="bold">1</span> character with{' '}
            <span className="bold"> {character.hp}</span> hitpoints.
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Traits;
