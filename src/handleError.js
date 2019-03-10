/**
 * Handle error
 * @param {Error} error
 * @param {Request} request
 */
async function handleError(error, request) {
  const logApiToken = 'd2406042-d6d5-40c5-a523-ec5f46c22c23'
  const logApiUrl = `http://logs-01.loggly.com/inputs/${logApiToken}/tag/http/`

  const logData = {
    message: error.message,
    from: 'tome-of-many-spells.vaultofheroes.com',
    status: 500,
  }

  const fetchOpts = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(logData)
  }
  
  await fetch(logApiUrl, fetchOpts)

  // Show error message to client
  const response = new Response('<p>Sorry, something went wrong</p>', {
    'status': '500',
    'statusText': 'Server error',
    'Content-Type': 'text/html; charset=utf-8',
  })
  
  return response
}

export default handleError;
