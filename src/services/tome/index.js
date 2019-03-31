import apiRequest from './apiRequest';

const baseUrl = 'https://tome-of-many-spells.vaultofheroes.com/api/';
const url = (endpoint) => `${baseUrl}${endpoint}`;

function getRandomSpell(filterClass, filterLevel, onSuccess = () => {}, onError = () => {}) {
  const data = {
    'class': filterClass || '',
    'level': filterLevel || '',
  };
  
  return apiRequest(url('random-spell'), 'GET', data, onSuccess, onError);
}

export {
  getRandomSpell
};
