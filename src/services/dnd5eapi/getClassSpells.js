import isNumeric from '@helpers/isNumeric'

const apiUrl = 'http://dnd5eapi.co/api'

/**
 * Get spells for a class, optionally filtered by level.
 *
 * @param   {string} className
 * @param   {number} level
 * @returns {object}
 */
async function getClassSpells(className, level = null) {
  const endpoint = Number.isInteger(level)
    ? `${apiUrl}/spells/${className}/level/${level}`
    : `${apiUrl}/spells/${className}`

  return await fetch(endpoint)
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getClassSpells;
