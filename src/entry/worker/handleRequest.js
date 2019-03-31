import extractQueryParams from '@helpers/extractQueryParams'
import getClassSpells from '@services/dnd5eapi/getClassSpells'
// import getSpell from '@services/dnd5eapi/getSpell'

import indexHandler from './routes/http/indexHandler';
import assetsHandler from './routes/http/assetsHandler';
import randomSpellHandler from './routes/api/randomSpellHandler';

/**
 * Fetch and log a request
 * @param {Request} request
 */
function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  if (/^\/assets\//.test(path)) {
    return assetsHandler(request);
  }
  
  if (/^\/api\/random-spell/.test(path)) {
    return randomSpellHandler(request);
  }
  
  // Default route.
  return indexHandler(request);
}

export default handleRequest;
