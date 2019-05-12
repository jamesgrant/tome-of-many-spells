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
          <h2 className="app-spell__name">{ name }</h2>
          <div className="app-spell__meta">
            <span className="app-spell__level">{ `Level ${level},` }</span>
            <span className="app-spell__school">
              <a href={school.url}>{ school.name }</a>
            </span>
          </div>
        </div>
        
        <div className="app-spell__detail">
          <span className="app-spell__classes">{ classes.map(spellClass => spellClass.name).join(', ') }</span>
          <span className="app-spell__page-ref">{ page }</span>
          <span className="app-spell__components">{ `Components: ${components.join(', ')}` }</span>
          <span className="app-spell__range">{ `Range: ${range}` }</span>
          <span className="app-spell__casting-time">{ `Casting time: ${castingTime}` }</span>
          <span className="app-spell__duration">{ `Duration: ${duration}` }</span>
          <span className="app-spell__concentation">{ `concentration: ${concentration}` }</span>
        </div>

        <div className="app-spell__description">
          { description.map(para => <p>{ para.replace('â€™', "'") }</p>) }
        </div>
      </div>
    );
  }
}

export default AppSpell;
