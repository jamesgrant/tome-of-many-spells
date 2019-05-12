import React, {Component, Fragment} from 'react';
import {AppHeader, AppSpell, AppButton} from '@components/presentational/index';
import {getRandomSpell} from '@/services/tome/index';

const initialState = {
  filterClass: null,
  filterSpellLevel: null,
  spell: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);
  }
  
  fetchSpell = () => (event) => {
    event.preventDefault();
    
    const onSuccess = (spell) => {
      this.setState(state => ({
        spell,
      }));
    }
    
    const onError = (errors) => {
      console.log(errors);
    }
    
    getRandomSpell('sorcerer', 1, onSuccess, onError);
  }
  
  renderSpell() {
    const {spell} = this.state;
    return spell ? (<AppSpell spell={ spell } />) : '';
  }
  
  render() {
    return <Fragment>
      <AppHeader></AppHeader>
      
      {this.renderSpell()}
      
      <div class="container--butttons">
        <AppButton label="Generate" onClick={this.fetchSpell()}></AppButton>
      </div>
    </Fragment>;
  }
}

export default App;
