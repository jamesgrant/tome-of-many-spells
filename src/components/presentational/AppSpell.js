import React, {Component} from 'react';

class AppSpell extends Component {
  render() {
    const { 
      casting_time: castingTime, 
      classes,
      components, 
      concentration,
      desc: description, 
      duration, 
      level, 
      name, 
      page, 
      range,
      school
    } = this.props.spell;

    return (
      <div className="app-spell">
        <div className="app-spell__title">
          <h2 className="app-spell__name">
            { name }
            <a className="app-spell__link" href={`https://www.dndbeyond.com/spells/${name.toLowerCase().replace(' ', '-')}`} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" x="0px" y="0px"><g><path d="M14,60a14,14,0,0,1-9.9-23.89L16.82,23.38a13.94,13.94,0,0,1,9.9-4.1,14,14,0,0,1,7.55,2.21,13.61,13.61,0,0,1,2.35,1.89,4,4,0,0,1,1.16,3.08A4,4,0,0,1,36.62,29,4.1,4.1,0,0,1,31,29a6,6,0,0,0-8.48,0L9.75,41.76a6,6,0,0,0,8.49,8.49l7.55-7.56a1,1,0,0,1,1.09-.22,16.83,16.83,0,0,0,6.4,1.24h.4a1,1,0,0,1,.71,1.71l-10.5,10.5A13.91,13.91,0,0,1,14,60Z"/><path d="M33.34,40.71h-.06l-.7,0a13.93,13.93,0,0,1-1.49-.14c-.41-.07-.81-.15-1.21-.25l-.59-.16c-.21-.06-.43-.13-.64-.21s-.43-.15-.64-.24-.42-.17-.63-.27a13.88,13.88,0,0,1-4-2.8,4,4,0,0,1-1.16-3.08A4,4,0,0,1,23.38,31,4.1,4.1,0,0,1,29,31a6,6,0,0,0,8.48,0l3.28-3.26.08-.09,9.38-9.37a6,6,0,0,0-8.49-8.49L34.2,17.31a1,1,0,0,1-1.09.22,16.8,16.8,0,0,0-6.39-1.25h-.37a1,1,0,0,1-.94-.61,1,1,0,0,1,.21-1.1L36.11,4.09a14,14,0,0,1,19.8,19.8L43.18,36.62a14,14,0,0,1-6.49,3.68l-.11,0-.58.12-.32.06-.69.1-.34,0c-.26,0-.49.05-.71.06Z"/></g></svg>
            </a>
          </h2>
          <div className="app-spell__meta">
            <span className="app-spell__level">{ `Level ${level}` }</span>
            { ' spell of the ' }
            <span className="app-spell__school">{ school.name }</span>
            { ' school.'}
          </div>
        </div>
        
        <div className="app-spell__detail">
          <span className="app-spell__classes">{ classes.map(spellClass => spellClass.name).join(', ') }</span>
          <span className="app-spell__components">{ `Components: ${components.join(', ')}` }</span>
          <span className="app-spell__range">{ `Range: ${range}` }</span>
          <span className="app-spell__casting-time">{ `Casting time: ${castingTime}` }</span>
          <span className="app-spell__duration">{ `Duration: ${duration}` }</span>
          <span className="app-spell__concentation">{ `Concentration: ${concentration}` }</span>
        </div>

        <div className="app-spell__description">
          { description.map(para => <p>{ para.replace('â€™', "'") }</p>) }
        </div>
      </div>
    );
  }
}

export default AppSpell;
