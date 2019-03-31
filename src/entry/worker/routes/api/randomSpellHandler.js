import extractQueryParams from '@helpers/extractQueryParams';
import getClassSpells from '@services/dnd5eapi/getClassSpells';

async function randomSpellHandler(request) {
  const query = extractQueryParams(request);
  const classValue = query.class || 'sorcerer';
  const levelValue = query.level || null;

  // Get spells for class.
  const spells = await getClassSpells(classValue, levelValue);

  // Select a random spell.
  const spellIndex = Math.floor(Math.random() * spells.count) + 1;
  const spell = await fetch(spells.results[spellIndex].url)
    .then(response => response.json())
    .catch(err => console.log(err));

  // Construct response.
  const body = JSON.stringify({ data: spell });
  const opts = {
    headers: { 'Content-Type': 'Application/JSON' }
  };
  
  return new Response(body, opts);
}

export default randomSpellHandler;
