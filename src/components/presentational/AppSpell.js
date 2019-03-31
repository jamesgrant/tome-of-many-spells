import React, {Component} from 'react';

class AppSpell extends Component {
  render() {
    const { name } = this.props.spell;

    return (
      <div class="app-spell">
        { name }
      </div>
    );
  }
}

export default AppSpell;
