import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { getRand } from '../utils/utils';
import { traits, dungeoneeringGear } from '../data/traits';

class CharacterDetails extends Component {
  constructor() {
    super();
    this.state = {
      physique: '',
      face: '',
      skin: '',
      hair: '',
      clothing: '',
      virtue: '',
      vice: '',
      speech: '',
      background: '',
      misfortunes: '',
    };
  }

  randomTrait = traitName => {
    return traits[traitName][getRand(traits[traitName].length)];
  };

  rollForTraits = () => {
    this.setState({
      physique: this.randomTrait('physique'),
      face: this.randomTrait('face'),
      skin: this.randomTrait('skin'),
      hair: this.randomTrait('hair'),
      clothing: this.randomTrait('clothing'),
      virtue: this.randomTrait('virtue'),
      vice: this.randomTrait('vice'),
      speech: this.randomTrait('speech'),
      background: this.randomTrait('background'),
      misfortunes: this.randomTrait('misfortunes'),
    });
  };

  componentDidMount() {
    this.rollForTraits();
  }

  render() {
    return (
      <div>
        <h1>Character Details</h1>
        {Object.keys(this.state).map(trait => (
          <p>
            {trait}: {this.state[trait]}
          </p>
        ))}
        <button onClick={this.rollForTraits}>Roll Traits</button>
      </div>
    );
  }
}

export default CharacterDetails;
