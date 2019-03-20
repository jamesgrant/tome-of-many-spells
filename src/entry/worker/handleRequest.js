import extractQueryParams from '@helpers/extractQueryParams'
import getClassSpells from '@services/dnd5eapi/getClassSpells'
// import getSpell from '@services/dnd5eapi/getSpell'

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const query = extractQueryParams(request);

  // Get spells for class.
  const spells = await getClassSpells('sorcerer', query.level || null)

  // Select a random spell.
  // TODO: Extract this?
  const spellIndex = Math.floor(Math.random() * spells.count) + 1
  const spell = await fetch(spells.results[spellIndex].url)
    .then(response => response.json())
    .catch(err => console.log(err))

  // Response.
  if (query.format === 'json') {
    return new Response(
      JSON.stringify(spell),
      {
        headers: { 'Content-Type': 'Application/JSON' }
      }
    )
  }

  return new Response(
    `<h1>${spell.name}</h1>` + spell.desc.map(i => `<p>${i}</p>`).join(''),
    { 
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    }
  )
}

export default handleRequest;
