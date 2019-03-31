/**
 * Handled an internal API request using the JSON:API sepcification.
 *
 * @see https://jsonapi.org/format/
 *
 * @param   {[type]} url
 * @param   {String} [method='GET']
 * @param   {Object} [data={}]
 * @param   {[type]} [onSuccess=(]
 */
async function apiRequest(url, method = 'GET', data = {}, onSuccess = () => {}, onError = () => {}) {
  const headers = new Headers();
  let queryParams = '';
  let body = undefined;
  
  headers.append('Content-Type', 'application/vnd.api+json');
  headers.append('Accept', 'JSON:API');
  
  if (data !== {}) {
    if (method === 'GET') {
      const queryParamsArray = [];
      
      for (const property in data) {
        queryParamsArray.push(`${property}=${data[property]}`);
      }
      
      queryParams = `?${queryParamsArray.join('&')}`;
    } else if (method === 'POST') {
      body = new FormData();
      
      for (const property in data) {
        formdata.append(property, data[property]);
      }
    } 
  }
  
  fetch(url + queryParams, {
    method,
    headers,
    body,
  })
  .then(response => {
    return response.json();
  })
  .then(response => {
    if (typeof response.data !== 'undefined') {
      onSuccess(response.data);
    } else if (typeof response.errors !== 'undefined') {
      onError(response.errors);
    } else {
      onError([
        {
          title: 'Bad JSON:API response',
          detail: 'Response must contain either "errors" or "data" as top level members'
        },
      ]);
    }
  })
  .catch(error => {
    onError([
      {
        title: error.name,
        detail: error.message
      },
    ]);
  });
}

export default apiRequest;
