import React, {Component, Fragment} from 'react';
import {AppHeader, AppSpell, AppButton} from '@components/presentational/index';
import {getRandomSpell} from '@/services/tome/index';

const initialState = {
  filterClass: null,
  filterSpellLevel: null,
  spell: null,
};

const spellLevels = Array.from(Array(10).keys()); // Values 0 to 10.
const classes = {
  cleric: 'Cleric',
  hunter: 'Hunter',
  paladin: 'Paladin',
  sorcerer: 'Sorcerer',
  warlock: 'Warlock',
  wizard: 'Wizard'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);
  }
  
  fetchSpell = () => (event) => {
    const { filterClass, filterSpellLevel } = this.state;
    
    event.preventDefault();
    
    const onSuccess = (spell) => {
      this.setState(state => ({
        spell,
      }));
    }
    
    const onError = (errors) => {
      console.log(errors);
    }
    
    if (filterClass && filterSpellLevel) {
      getRandomSpell(filterClass, filterSpellLevel, onSuccess, onError);
    } else {
      alert('Please select a Class and Spell Level');
    }
  }
  
  updateState = (key) => ({target: {value}}) => {
    const newState = {};
    newState[key] = value;

    this.setState((state) => ({
      ...state,
      ...newState
    }));
  }
  
  isDisabled() {
    const { filterClass, filterSpellLevel } = this.state;
    return !filterClass || !filterSpellLevel;
  }
  
  renderSpell() {
    const {spell} = this.state;
    return spell ? (<AppSpell spell={ spell } />) : '';
  }
  
  render() {
    return <Fragment>
      <AppHeader></AppHeader>
      
      <div className="app-actions">
        <select className="app-actions__class" onChange={this.updateState('filterClass')}>
          <option>Class&hellip;</option>
          { Object.entries(classes).map(([key, value]) => <option value={key}>{ value }</option>) }
        </select>

        <select className="app-actions__spell-level" onChange={this.updateState('filterSpellLevel')}>
          <option>Spell level&hellip;</option>
          { spellLevels.map(value => <option value={value}>{ value }</option>) }
        </select>

        <AppButton className="app-actions__generate" disabled={this.isDisabled()} onClick={this.fetchSpell()}>Generate</AppButton>
      </div>
      
      { this.renderSpell() }
    </Fragment>;
  }
}

export default App;
